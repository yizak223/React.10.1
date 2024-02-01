import React, { useEffect, useState } from 'react'
import Education from './Education';
import WorkExperince from './WorkExperince';
import PrivateDetails from './PrivateDetails';
import MessageSent from './MessageSent';
import ConnectFirst from './connectFirst';
import { useContext } from 'react';
import { UserContext } from '../../context/User';
import { useFormData } from '../../context/FormData';
import { dB } from '../../config/firebaseConfig';
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";


export default function FormResume() {
  const { userName, user, userId } = useContext(UserContext)
  const { formData, setFormData } = useFormData();
  const [selectedOption, setSelectedOption] = useState(null);
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)
  const [previewMode, setPreviewMode] = useState(false)


  const handleInputChange = (e) => {
    formData[e.target.name] = e.target.value
    setFormData({ ...formData })
    console.log(formData);
  }

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    formData[e.target.name] = e.target.value
    setFormData({ ...formData })
    console.log(formData);
  };

  const renderCurrentStep = () => {
    if (!previewMode) {
      switch (counter) {
        case 0:
          return <PrivateDetails handleInputChange={handleInputChange} />;
        case 1:
          return (
            <WorkExperince
              selectedOption={selectedOption}
              handleInputChange={handleInputChange}
              handleOptionChange={handleOptionChange}
            />
          );
        case 2:
          return <Education
            handleInputChange={handleInputChange}
          />;
        case 3:
          return <MessageSent />;
        default:
          return null;
      }
    }
    else {
      return <>
        <PrivateDetails handleInputChange={handleInputChange} />
        <WorkExperince
          selectedOption={selectedOption}
          handleInputChange={handleInputChange}
          handleOptionChange={handleOptionChange} />
        <Education
          handleInputChange={handleInputChange} />
      </>
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCounter(counter + 1)
    setCounter2(counter2 + 1)
    // Add logic to handle form submission
    console.log("Form submitted:", formData);
    const collectionRef = collection(dB, 'UserDetails')
    formData.userId = userId
    const docRef = await addDoc(collectionRef, formData)
    formData.id = docRef.id
  };

  return (
    <>
      {userName ?
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {renderCurrentStep()}
            {0 < counter && counter < 3 ?
              <button type='button' className="form-btn" onClick={() => setCounter(counter - 1)}>
                Previos
              </button>
              : null
            }
            {counter < 2 ? (
              <p className="form-btn pBtn" onClick={() => setCounter(counter + 1)}>
                Next
              </p>
            ) : (
              counter2 == 0 ?
                <>
                  <button className='form-btn submitBtn' type='submit'>Make your resume</button>
                </>
                : null
            )}
          </form>
        </div>
        : <ConnectFirst />}
    </>
  )
}
