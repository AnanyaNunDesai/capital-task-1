import { Checkbox, Input } from "antd";
import { useState } from "react";

interface QuestionProps {
    existingQuestion?: any,
    setQuestionData: (questionData: any) => void
};

function YesNoQuestion(props: QuestionProps) {
    const [question, setQuestion] = useState<string | null>(null);
    const [disqualifyOnNo, setDisqualifyOnNo] = useState(false);

    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-1'>
            <p className='font-bold'>Question</p>
            <Input value={props.existingQuestion?.question} placeholder='Type here' onChange={(e) => props.setQuestionData({
                ...props.existingQuestion,
                question: e.target.value
            })} />
            <div className='flex flex-row items-center gap-x-1 ml-3 mb-3'>
                <Checkbox checked={props.existingQuestion?.disqualify} onChange={(e) => props.setQuestionData({
                ...props.existingQuestion,
                disqualify: e.target.value
            })} />
                <p className='text-xs'>Disqualify candidate if the answer is no</p>
            </div>
        </div>
    );
}

export default YesNoQuestion;
