import { useState } from 'react';
import { Button, Checkbox, Input, InputNumber } from 'antd';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';

interface QuestionProps {
    setQuestionData: (questionData: any) => void
};

function DropdownQuestion(props: QuestionProps) {
    const [question, setQuestion] = useState<string | null>(null);
    const [choices, setChoices] = useState<(string)[]>(['']);
    const [otherEnabled, setOtherEnabled] = useState(false);
    const [maxAllowedChoices, setMaxAllowedChoices] = useState(1);

    function setSpecificMultiChoice(e: any, i: number) {
        const newList = [...choices];
        newList[i] = e.target.value;
        setChoices(newList);
    }

    function handleAddChoice() {
        const newList = [...choices];
        newList.push('');
        setChoices(newList);
    }

    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-1'>
            <p className='font-bold'>Question</p>
            <Input placeholder='Type here' onChange={(e) => setQuestion(e.target.value)}/>
            <p className='font-bold ml-2'>Choice</p>
            {choices.map((choice, idx) => {
                    return (
                        <div key={idx} className='flex flex-row gap-x-3 justify-start items-center w-full'>
                            <UnorderedListOutlined />
                            <Input className='w-[70%]' placeholder={choice === '' ? 'Type here' : choice} onChange={(e) => setSpecificMultiChoice(e, idx)}/>
                            {idx === choices.length - 1 ? <Button onClick={handleAddChoice} type='text' icon={<PlusOutlined />} /> : null}
                        </div>
                    );
                })}
            <div className='flex flex-row items-center gap-x-2'>
                <Checkbox checked={otherEnabled} onChange={(e) => setOtherEnabled(e.target.checked)} />
                <p className='text-xs'>Enable "Other" Option</p>
            </div>
            <div className='my-3 flex flex-col'>
                <p className='font-bold'>Max choice allowed</p>
                <InputNumber className='w-full' placeholder='Enter number of choice allowed here' onChange={(e) => setMaxAllowedChoices(Number(e))}/>
            </div>
        </div>
    );
}

export default DropdownQuestion;
