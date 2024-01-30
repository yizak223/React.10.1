import React, { useEffect } from 'react'
import { useState } from 'react';
import Education from './Education';
import WorkExperince from './WorkExperince';
import PrivateDetails from './PrivateDetails';
import MessageSent from './MessageSent';
import { dB } from '../../config/firebaseConfig';
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";

export default function FormResume() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({})
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

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
    switch (counter) {
      case 0:
        return <PrivateDetails handleInputChange={handleInputChange} />;
      case 1:
        return (
          <WorkExperince
            formData={formData}
            setFormData={setFormData}
            selectedOption={selectedOption}
            handleInputChange={handleInputChange}
            handleOptionChange={handleOptionChange}
          />
        );
      case 2:
        return <Education
          formData={formData}
          setFormData={setFormData}
          handleInputChange={handleInputChange}
        />;
      case 3:
        return <MessageSent />;
      default:
        return null;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted:", formData);
    //   const collectionRef = collection(dB, 'UserDetails')
    //   const payload = {

    // }
    // const docRef = await addDoc(collectionRef, payload)
    // console.log(docRef.id);
    // formData.id = docRef.id
  };
  const goToMessage = () => {
    setCounter(counter + 1)
    setCounter2(counter2 + 1)
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {renderCurrentStep()}
        {0 < counter && counter < 3 ?
          <button className="form-btn" onClick={() => setCounter(counter - 1)}>Previos</button>
          : null
        }
        {counter < 2 ? (
          <button className="form-btn" onClick={() => setCounter(counter + 1)}>
            Next
          </button>
        ) : (
          counter2 == 0 ?
            <button onClick={goToMessage} type="submit" className="form-btn submitBtn">
              Make resume
            </button> : null
        )}
      </form>
    </div>
  )
}
