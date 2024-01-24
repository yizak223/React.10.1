import React, { useState, useEffect } from 'react'
import { collection, serverTimestamp, addDoc, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore';
import { dB } from '../../config/fireBaseConfig';
import { Link, useParams } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../config/fireBaseConfig';

export default function Cardcurrency(props) {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      props.setuserId(user.uid)
      console.log(props.userId)
    })
  }, [props.userId, isSaved])
  useEffect(() => {
    checkIfSaved(props.currencyData.country);
  }, [props.isLoggedIn, props.currencyData.country]);

  const checkIfSaved = async (removeName) => {
    if (props.isLoggedIn) {
      const collectionRef = collection(dB, 'favuoriteCurrency');
      const q = query(collectionRef, where("country", "==", removeName));
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log(results[0].user_id);
      console.log(props.userId);
      // console.log(results[0].user_id == props.userId);
      try {
         if (results[0].user_id == props.userId) {

        setIsSaved(results.length === 1);
      }
      } catch (error) {
        console.log(error);
      }
     
    }
  };

  const addToFavourite = async (currencyObject) => {
    if (props.isLoggedIn) {
      const collectionRef = collection(dB, 'favuoriteCurrency');
      const q = query(collectionRef, where("country", "==", currencyObject.country), where("user_id", "==", props.userId));
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  
      console.log("Before state update - isSaved:", isSaved);
  
      if (results.length > 0) {
        const confirmUser = window.confirm('This currency is already saved. Do you want to remove it?');
        if (confirmUser) {
          const docRef = doc(dB, "favuoriteCurrency", results[0].id);
          await deleteDoc(docRef);
          setIsSaved((prevIsSaved) => !prevIsSaved);
        }
      } else {
        const payload = {
          country: currencyObject.country,
          currency: currencyObject.currency,
          exchange_rate: currencyObject.exchange_rate,
          record_date: currencyObject.date,
          timestamp: serverTimestamp(),
          user_id: props.userId
        };
  
        const docRef = await addDoc(collectionRef, payload);
        currencyObject.id = docRef.id;
        setIsSaved((prevIsSaved) => !prevIsSaved);
      }
  
      console.log("After state update - isSaved:", isSaved);
    } else {
      alert('Please login first');
    }
  };
  const bigShow = (id) => {
    <Link path=''></Link>
  }
  return (
    <div className='card'>
      <section className="LittleCard">
        <section className="card-body">
          <h1 className='fieldData'>{props.currencyData.country}</h1>
          {/* className='fieldData'<img src={props.currencyData.countryImg} alt="" /> */}
          <h2 className='fieldData'>{props.currencyData.currency}</h2>
          <h3 className='fieldData'>{props.currencyData.date}</h3>
          <h3 className='fieldData'>{props.currencyData.exchange_rate}</h3>
          <button
            onClick={() => addToFavourite(props.currencyData)}
            className={`SaveForLaterBtn ${isSaved ? 'userLiked' : ''}`}
          >
            {isSaved ? 'Remove' : 'Save for later'}
          </button>
        </section>
      </section>
    </div>
  )
}
