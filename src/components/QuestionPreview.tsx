import { Divider } from "antd";
import QuestionOption from "./QuestionOption";

interface QuestionPreviewProps {
    onUpdate: (value: number) => void,
    question: {
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

function QuestionPreview(props: QuestionPreviewProps) {
    const detail = props.question;

    return (
        <div className='flex flex-col justify-start w-full'>
            <p className='text-xs text-gray-300'>{detail.type}</p>
            <div className='flex flex-row justify-between'>
                <p className='font-bold w-36'>{detail.question}</p>
                <QuestionOption onUpdate={props.onUpdate} question={props.question} category={props.category}  />
            </div>
            <Divider />
        </div>
    );
}

export default QuestionPreview;
