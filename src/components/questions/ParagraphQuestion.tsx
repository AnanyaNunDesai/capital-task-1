import { Input } from "antd";
import { useState } from "react";

interface QuestionProps {
    setQuestionData: (questionData: any) => void
};

function ParagraphQuestion(props: QuestionProps) {
    const [question, setQuestion] = useState<string | null>(null);

    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-1'>
            <p className='font-bold'>Question</p>
            <Input placeholder='Type here' onChange={(e) => props.setQuestionData(
                {question: e.target.value, type: 'Paragraph'}
            )}/>
        </div>
    );
}

export default ParagraphQuestion;
