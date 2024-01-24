import React from 'react'
import FavouriteCard from '../../components/Favourite';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { dB } from '../../config/fireBaseConfig';
import { onAuthStateChanged, signOut, getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Favourite(props) {
  const [favourite, setfavourite] = useState([])
  

  useEffect(
    () => {
      onAuthStateChanged(auth, async (user) => {
        const collectionRef = collection(dB, 'favuoriteCurrency')
        const qUser = query(collectionRef, where("user_id", "==", user.uid));
        const snapshot = await getDocs(qUser);
        const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setfavourite(results)
      })
    }, [favourite])
    
  const auth = getAuth()
  const mysignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Your account has been signed out')
        props.setIsLoggedIn(!props.isLoggedIn)
        location.reload()
      }).catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div>
        {props.isLoggedIn ?
          <button onClick={mysignOut}>Log-out</button> :
          <Link
            onClick={() => props.setcounter(2)}
            className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
            to='/Authntication'><button>LogIn</button></Link>}
        <h1>Wellcome {props.name ? props.name : null} to our finance web</h1>
        <h2>{props.name ? null : 'please log in to see your favourite'}</h2>
      </div>
      <div className='listCard'>
        {favourite.map((currencyData, index) => {
          return (
            <FavouriteCard currencyData={currencyData} key={index} />
          )
        })}
      </div>
    </>
  )
}
