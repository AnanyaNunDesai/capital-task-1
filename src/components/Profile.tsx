import { Checkbox, Divider, Switch } from 'antd';
import QuestionOption from './QuestionOption';
import QuestionPreview from './QuestionPreview';

interface ProfileProps {
    onUpdate: (value: number) => void,
    defaultQuestionsSettings?: {
        education: {
            mandatory: boolean,
            show: boolean
        },
        experience: {
            mandatory: boolean,
            show: boolean
        },
        resume: {
            mandatory: boolean,
            show: boolean
        }
    },
    customQuestions?: {
        choices?: string[],
        disqualify?: boolean,
        id: string,
        maxChoice?: number,
        other?: boolean,
        question: string,
        type: string
    }[]
};

function Profile(props: ProfileProps) {
    const savedSettings = props.defaultQuestionsSettings;
    const customQuestions = props.customQuestions;

    return (
    <div className='w-1/3 shadow-md rounded-xl'>
        <div className='bg-cyan-100 rounded-t-xl'>
            <h2 className='text-black font-semibold text-left p-3'>
                Profile
            </h2>
        </div>
        <div className='m-4 p-4 rounded-b-xl'>
            <div className='flex flex-col items-start justify-center w-full'>
            </div>
            <div className='flex flex-col w-full justify-between'>
                <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                    <div className='w-[43%]'>
                        <p className='font-bold'>Education</p>
                    </div>
                    <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                        <Checkbox defaultChecked={savedSettings?.education.mandatory} className='text-xs'>Mandatory</Checkbox>
                        <div className='flex flex-row gap-x-2 justify-center items-center'>
                            <Switch defaultChecked={savedSettings?.education.show} />
                            <p className='text-xs'>Show</p>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
            <div className='flex flex-col w-full justify-between'>
                <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                    <div className='w-[43%]'>
                        <p className='font-bold'>Experience</p>
                    </div>
                    <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                        <Checkbox defaultChecked={savedSettings?.experience.mandatory} className='text-xs'>Mandatory</Checkbox>
                        <div className='flex flex-row gap-x-2 justify-center items-center'>
                            <Switch defaultChecked={savedSettings?.experience.mandatory} />
                            <p className='text-xs'>Show</p>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
            <div className='flex flex-col w-full justify-between'>
                <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                    <div className='w-[43%]'>
                        <p className='font-bold'>Resume</p>
                    </div>
                    <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                        <Checkbox defaultChecked={savedSettings?.resume.mandatory} className='text-xs'>Mandatory</Checkbox>
                        <div className='flex flex-row gap-x-2 justify-center items-center'>
                            <Switch defaultChecked={savedSettings?.resume.mandatory} />
                            <p className='text-xs'>Show</p>
                        </div>
                    </div>
                </div>
                <Divider />
            </div>
            {customQuestions?.map((question, idx) => {
                return <QuestionPreview onUpdate={props.onUpdate} key={idx} question={question} category='profile' />
            })}
            <QuestionOption onUpdate={props.onUpdate} category='profile' />
        </div>
    </div>
    );
}

export default Profile;
