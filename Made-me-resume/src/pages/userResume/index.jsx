import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import FormResume from "../../component/madeResume/FormResume";
import { UserContext } from '../../context/User';
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { dB, auth } from '../../config/firebaseConfig';
import SmallCardResume from '../../component/savedResumes/SmallCardResume'

export default function UserResume() {

  const { userName, userId } = useContext(UserContext);
  const [userResumeData, setUserResumeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const collectionRef = collection(dB, 'UserDetails');
          const qUser = query(collectionRef, where("userId", "==", user.uid));
          const snapshot = await getDocs(qUser);
          const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          setUserResumeData(results);
          console.log(userResumeData);
        }
      });
    };

    fetchData();
  }, []);
  console.log(userResumeData);


  return (
    <>
      {
        userResumeData?.map((res, index) => {
          return (
            <div className="containerResume" key={index}>
              <SmallCardResume res={res}/>
            </div>
          )
        })
      }
    </>

  )
}
