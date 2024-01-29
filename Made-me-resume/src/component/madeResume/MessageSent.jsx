import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MessageSent() {
  const [isVisible, setIsVisible] = useState(true);

  const handleReload = () => {
    setIsVisible(false);
    location.reload();
  };

  return (
    <div >
      <h1>Your resume made!</h1>
      <div className='btnContainer'>
      {isVisible && (
        <Link className='goSeeItLink' to='/UserResume'>
          <div className='goSeeItBtn'>
             Go see it
          </div>
        </Link>
      )}
      <button className='form-btn' onClick={handleReload}>
        Make another one
      </button>
      </div>
    </div>
  );
}
