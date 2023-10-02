import { Checkbox, Divider, Switch } from 'antd';
import QuestionOption from './QuestionOption';
import QuestionPreview from './QuestionPreview';

interface PersonalInformationProps {
    onUpdate: (value: number) => void,
    defaultQuestionsSettings?: {
        phoneNumber: {
            internalUse: boolean,
            show: boolean
        },
        nationality: {
            internalUse: boolean,
            show: boolean
        },
        currentResidence: {
            internalUse: boolean,
            show: boolean
        },
        idNumber: {
            internalUse: boolean,
            show: boolean
        },
        dateOfBirth: {
            internalUse: boolean,
            show: boolean
        },
        gender: {
            internalUse: boolean,
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

function PersonalInformation(props: PersonalInformationProps) {
    const savedSettings = props.defaultQuestionsSettings;
    const customQuestions = props.customQuestions;

    return (
        <div className='w-1/3 shadow-md rounded-xl'>
            <div className='bg-cyan-100 rounded-t-xl'>
                <h2 className='text-black font-semibold text-left p-3'>
                    Personal Information
                </h2>
            </div>
            <div className='m-4 p-4 rounded-b-xl'>
                <div className='flex flex-col items-start justify-center w-full'>
                    <p className='font-bold'>First Name</p>
                    <Divider />
                    <p className='font-bold'>Last Name</p>
                    <Divider />
                    <p className='font-bold'>Email</p>
                    <Divider />
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[10%]'>
                                <p className='font-bold'>Phone</p>
                            </div>
                            <div className='w-[30%] items-center'>
                                <p className='text-xs'>(without dial code)</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.phoneNumber.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.phoneNumber.show} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[43%]'>
                                <p className='font-bold'>Nationality</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.nationality.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.nationality.show} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[43%]'>
                                <p className='font-bold'>Current Residence</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.currentResidence.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.currentResidence.show} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[43%]'>
                                <p className='font-bold'>ID Number</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.idNumber.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.idNumber.internalUse} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[43%]'>
                                <p className='font-bold'>Date of Birth</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.dateOfBirth.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.dateOfBirth.show} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    <div className='flex flex-col w-full justify-between'>
                        <div className='flex flex-row w-full justify-start items-center gap-x-3'>
                            <div className='w-[43%]'>
                                <p className='font-bold'>Gender</p>
                            </div>
                            <div className='w-[40%] flex flex-row gap-x-3 justify-center items-center'>
                                <Checkbox defaultChecked={savedSettings?.gender.internalUse} className='text-xs'>Internal</Checkbox>
                                <div className='flex flex-row gap-x-2 justify-center items-center'>
                                    <Switch defaultChecked={savedSettings?.gender.show} />
                                    <p className='text-xs'>Show</p>
                                </div>
                            </div>
                        </div>
                        <Divider />
                    </div>
                    {customQuestions?.map((question, idx) => {
                        return <QuestionPreview key={idx}  onUpdate={props.onUpdate} question={question} category='personal'  />
                    })}
                    <QuestionOption onUpdate={props.onUpdate} category='personal' />
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;
