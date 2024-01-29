import React, { useEffect } from 'react'
import { useState } from 'react';
import Education from './Education';
import WorkExperince from './WorkExperince';
import PrivateDetails from './PrivateDetails';
import MessageSent from './MessageSent';

export default function FormResume() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData,setFormData]=useState({})
  const [counter,setCounter] = useState(0)
  const [counter2,setCounter2] = useState(0)

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
            selectedOption={selectedOption}
            handleInputChange={handleInputChange}
            handleOptionChange={handleOptionChange}
          />
        );
      case 2:
        return <Education handleInputChange={handleInputChange} />;
      case 3:
        return <MessageSent />;
      default:
        return null;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted:", formData);
    // You can add further logic to send the form data to a server, etc.
  };
  const goToMessage = ()=>{
    setCounter(counter+1)
    setCounter2(counter2+1)
  }
  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      {renderCurrentStep()}
      {counter < 2 ? (
        <button className="form-btn" onClick={() => setCounter(counter + 1)}>
          Next
        </button>
      ) : (
        counter2 ==0?
        <button onClick={goToMessage} type="submit" className="form-btn">
          Make resume
        </button>:null
      )}
    </form>
  </div>
  )
}
