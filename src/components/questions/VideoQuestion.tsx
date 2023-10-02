import { useState } from 'react';
import { Input, InputNumber, Select } from 'antd';

interface QuestionProps {
    setQuestionData: (questionData: any) => void
};

function VideoQuestion(props: QuestionProps) {
    const [question, setQuestion] = useState<string | null>(null);
    const [information, setInformation] = useState<string | null>(null);
    const [duration, setDuration] = useState<number | null>(null);
    const [durationType, setDurationType] = useState<string | null>(null);

    return (
        <div className='flex flex-col items-start justify-center w-full gap-y-1'>
            <p className='font-bold'>Question</p>
            <Input placeholder='Type here' onChange={(e) => setQuestion(e.target.value)}/>
            <Input placeholder='Additional information' onChange={(e) => setInformation(e.target.value)}/>
            <div className='flex flex-row justify-center items-start gap-x-3'>
            <InputNumber className='w-45' placeholder='Max duration of video in (sec/min)' onChange={(e) => setDuration(Number(e))}/>
            <Select value={durationType} onChange={(e) => setDurationType(e)} className='w-45' placeholder='Select "Seconds" or "Minutes"'>
                <Select.Option value='Seconds'>Seconds</Select.Option>
                <Select.Option value='Minutes'>Minutes</Select.Option>
            </Select>
            </div>
        </div>
    );
}

export default VideoQuestion;
