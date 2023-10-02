import { useEffect, useState } from 'react';
import './App.css';
import AppFlow from './components/AppFlow';
import CoverImage from './components/CoverImage';
import Navbar from './components/Navbar';
import PersonalInformation from './components/PersonalInformation';
import Profile from './components/Profile';
import SchemaService from './api/SchemaService';

function App() {
  const [personalInformationData, setPersonalInformationData] = useState<any>();
  const [profileData, setProfileData] = useState<any>();
  const [personalInformationQuestions, setPersonalInformationQuestions] = useState<any[]>([]);
  const [profileQuestions, setProfileQuestions] = useState<any[]>([]);
  const [updatedSchema, setUpdatedSchema] = useState<number>(0);

  useEffect(() => {
    const gatherQuestions = async () => {
      const storedSchema = await SchemaService.getAllSchemaData();
      setPersonalInformationData(storedSchema['attributes']['personalInformation']);
      setProfileData(storedSchema['attributes']['profile']);

      const customQuestions = storedSchema['attributes']['customisedQuestions'];

      for (const customQuestion of customQuestions) {
        const questionId = customQuestion.id;
        let customPersonalInformationQuestions = [];
        let customProfileQuestions = [];

        // Personal Information questions use uppercase ID
        if (questionId === questionId.toUpperCase()) {
          customPersonalInformationQuestions.push(customQuestion);
        } else {
          customProfileQuestions.push(customQuestion);
        }

        setPersonalInformationQuestions(customPersonalInformationQuestions);
        setProfileQuestions(customProfileQuestions);
      }
    };
    gatherQuestions();
  }, []);

  useEffect(() => {
    const gatherQuestions = async () => {
      setTimeout(function() {
      }, 1000);
      const storedSchema = await SchemaService.getAllSchemaData();
      setPersonalInformationData(storedSchema['attributes']['personalInformation']);
      setProfileData(storedSchema['attributes']['profile']);

      const customQuestions = storedSchema['attributes']['customisedQuestions'];
      for (const customQuestion of customQuestions) {
        const questionId = customQuestion.id;
        let customPersonalInformationQuestions = [];
        let customProfileQuestions = [];

        // Personal Information questions use uppercase ID
        if (questionId === questionId.toUpperCase()) {
          customPersonalInformationQuestions.push(customQuestion);
        } else {
          customProfileQuestions.push(customQuestion);
        }

        setPersonalInformationQuestions(customPersonalInformationQuestions);
        setProfileQuestions(customProfileQuestions);
      }
    };
    gatherQuestions();
  }, [updatedSchema]);

  function handleUpdatedSchema(value: number) {
    setUpdatedSchema(updatedSchema + value);
  }

  return (
    <div className='home'>
      <Navbar />
      <AppFlow />
      <div className='content'>
        <div className='question-list'>
          <CoverImage />
          <PersonalInformation onUpdate={handleUpdatedSchema} defaultQuestionsSettings={personalInformationData} customQuestions={personalInformationQuestions}  />
          <Profile onUpdate={handleUpdatedSchema} defaultQuestionsSettings={profileData} customQuestions={profileQuestions} />
        </div>
      </div>
    </div>
  );
}

export default App;
