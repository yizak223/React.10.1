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
      setIsSaved(results.length === 1);
    }
  };

  const addToFavourite = async (removeName) => {
    if (props.isLoggedIn) {
      const collectionRef = collection(dB, 'favuoriteCurrency')
      const q = query(collectionRef, where("country", "==", removeName));
      const snapshot = await getDocs(q);
      const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      if (results.length == 1) {
        const confrimUser = window.confirm('this currency is already saved you want to remove it?')
        if (confrimUser) {
          if (results[0].country == removeName) {
            const docRef = doc(dB, "favuoriteCurrency", results[0].id);
            await deleteDoc(docRef);
            setIsSaved(false);
          }
        }
      }
      else {
        console.log(props.userId);
        const payload = {
          country: props.currencyData.country,
          currency: props.currencyData.currency,
          exchange_rate: props.currencyData.exchange_rate,
          record_date: props.currencyData.date,
          timestamp: serverTimestamp(),
          user_id: props.userId
        }
        console.log(payload);
        const docRef = await addDoc(collectionRef, payload)
        console.log(docRef.id);
        props.currencyData.id = docRef.id
        setIsSaved(true);
      }
    } else {
      alert('Please login first')
    }
  }
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
            onClick={() => addToFavourite(props.currencyData.country)}
            className={`SaveForLaterBtn ${isSaved ? 'userLiked' : ''}`}
          >
            {isSaved ? 'Remove' : 'Save for later'}
          </button>
        </section>
      </section>
    </div>
  )
}
