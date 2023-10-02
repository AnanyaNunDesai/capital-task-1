import { useState } from 'react';
import { CloseOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Modal, Select } from 'antd';
import SchemaService from '../api/SchemaService';
import Paragraph from './questions/ParagraphQuestion';
import ShortAnswer from './questions/ShortAnswerQuestion';
import YesNoQuestion from './questions/YesNoQuestion';
import DateQuestion from './questions/DateQuestion';
import DropdownQuestion from './questions/DropdownQuestion';
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion';
import NumberQuestion from './questions/NumberQuestion';
import FileUploadQuestion from './questions/FileUploadQuestion';
import VideoQuestion from './questions/VideoQuestion';

const { v4: uuidv4 } = require('uuid');

interface QuestionOptionProps {
    onUpdate: (value: number) => void,
    question?: {
        choices?: string[],
        disqualify?: boolean,
        id: string,
        maxChoice?: number,
        other?: boolean,
        question: string,
        type: string
    },
    category: string
};

function QuestionOption(props: QuestionOptionProps) {
    const [questionType, setQuestionType] = useState<QuestionType | null>(null);
    const [questionValues, setQuestionValues] = useState<{}>({});

    enum QuestionType {
        PARAGRAPH = 'Paragraph',
        SHORT_ANSWWER = 'Short answer',
        YES_NO = 'Yes/No',
        DROPDOWN = 'Dropdown',
        MULTIPLE_CHOICE = 'Multiple choice',
        DATE = 'Date',
        NUMBER = 'Number',
        FILE_UPLOAD = 'File upload',
        VIDEO_QUESTION = 'Video question'
    };

    const [modalActive, setModalActive] = useState(false);

    function displayModal() {
        setModalActive(true);
    }

    function hideModal() {
        setModalActive(false);
    }

    function handleModifyQuestion(modifiedQuestion: QuestionOptionProps) {
        setQuestionValues(modifiedQuestion);
    }

    async function saveQuestion() {
        // Create new question and attach to existing 
        if (!props.question) {
            const uuid = uuidv4();
            const category = props.category;
            let newId = '';
            if (category === 'personal') {
                newId = uuid.toUpperCase();
            } else {
                newId = uuid.toLowerCase();
            }

            let schema = await SchemaService.getAllSchemaData();
            schema.attributes.customisedQuestions.push({
                ...questionValues,
                id: newId,
            });
            await SchemaService.updateSchemaEntry({data: schema});
        }
        // Update this specific existing question
        else {
            let schema = await SchemaService.getAllSchemaData();
            let questionIdx = schema.attributes.customisedQuestions.findIndex(
                (question: any) => question.id === props.question?.id
            );
            schema.attributes.customisedQuestions[questionIdx] = questionValues;
            SchemaService.updateSchemaEntry({data: schema});
        }

        props.onUpdate(1);
        setModalActive(false);
    }

    function changeQuestionType(questionType: QuestionType) {
        setQuestionType(questionType);
    }

    // Commented QuestionTypes not described in UI
    function displayQuestion() {
        switch (questionType) {
            case QuestionType.PARAGRAPH:
                return <Paragraph setQuestionData={handleModifyQuestion} />;
            // case QuestionType.SHORT_ANSWER:
            //     return <ShortAnswer setQuestionData={handleModifyQuestion} />;
            case QuestionType.YES_NO:
                return <YesNoQuestion existingQuestion={questionValues} setQuestionData={handleModifyQuestion} />;
            case QuestionType.DROPDOWN:
                return <DropdownQuestion setQuestionData={handleModifyQuestion} />;
            case QuestionType.MULTIPLE_CHOICE:
                return <MultipleChoiceQuestion setQuestionData={handleModifyQuestion} />;
            // case QuestionType.DATE:
            //     return <DateQuestion setQuestionData={handleModifyQuestion} />;
            // case QuestionType.NUMBER:
            //     return <NumberQuestion setQuestionData={handleModifyQuestion} />;
            // case QuestionType.FILE_UPLOAD:
            //     return <FileUploadQuestion setQuestionData={handleModifyQuestion} />;
            case QuestionType.VIDEO_QUESTION:
                return <VideoQuestion setQuestionData={handleModifyQuestion} />;
            default:
                return <></>;
        }
    }

    // Endpoint in Prism Application Schema not available
    function deleteQuestion() {}

    // Gives option to delete question if modifying an existing one
    function displayDeleteOption() {
        if (!props.question) {
            return null;
        } else {
            return (
                <button
                    className='remove-image flex hover:text-red-900'
                    onClick={() => deleteQuestion()}
                 >
                <CloseOutlined className='w-6 h-6 mx-2 mb-2 font'/>
                <p className='remove-image hover:text-red-900 font-extrabold'>Delete question</p>
            </button>
            );
        }
    }

    // Alters component view if adding new or modifying existing question
    function addOrModifyView() {
        if (!props.question) {
            return (
                <Button type='text' onClick={displayModal} className='my-[1%] flex flex-row items-center gap border-none' size='large' icon={<PlusOutlined />}>
                    <p className='font-bold'>Add a question</p>
                </Button>
            );
        } else {
            return (
                <Button type='text' onClick={displayModal} size='large' icon={<EditOutlined />} />
            );
        }
    }

    return (
        <div>
            {addOrModifyView()}
            <Modal
                okType='default'
                centered
                open={modalActive}
                closeIcon={false}
                onCancel={hideModal}
                footer={[
                    <Button key={'save'} onClick={async() => await saveQuestion()} className='bg-[#087B2F] text-white'>
                        Save
                    </Button>
                ]}
            >
                <div className='shadow-md rounded-xl'>
                    <div className='bg-cyan-100 rounded-t-xl'>
                        <h2 className='text-black font-semibold text-left p-3'>
                            Questions
                        </h2>
                    </div>
                </div>
                <div className='mt-5 rounded-b-xl'>
                    <div className='flex flex-col items-start justify-center w-full gap-y-1'>
                        <p className='font-bold'>Type</p>
                        <Select
                            className='w-full'
                            placeholder='Select a question type'
                            onChange={changeQuestionType}
                            value={questionType}
                        >
                            {Object.values(QuestionType).map((questionType, idx) => <Select.Option key={idx} value={questionType}>{questionType}</Select.Option>)}
                        </Select>
                        {displayQuestion()}
                        {displayDeleteOption()}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default QuestionOption;
