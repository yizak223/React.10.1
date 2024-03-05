import React, { useState, useEffect } from "react";
import { useContext } from 'react';
import { UserContext } from '../../context/User';
import Footer from "../../component/Fotter";
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { dB, auth } from '../../config/firebaseConfig';
import SmallCardResume from '../../component/savedResumes/SmallCardResume'
import styles from './userResume.module.css';

export default function UserResume() {

  const { userName, userId } = useContext(UserContext);
  const [userResumeData, setUserResumeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const collectionRef = collection(dB, 'UserDetails');
          const qUser = query(collectionRef, where("userId", "==", user.uid));

          const unsub = onSnapshot((qUser), (snapshot) =>
            setUserResumeData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
          return unsub

          // const snapshot = await getDocs(qUser);
          // const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
          // setUserResumeData(results);

        }
      });
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="containerResume">
        {
          userResumeData?.map((res, index) => {
            return (
              <div key={index}>
                <SmallCardResume res={res} />
              </div>
            )
          })
        }
        {
          !userResumeData?
          <div className={styles.noResume}>
            <h3>You have not created a resume yet</h3>
            <img className={styles.img} src="https://www.visualcv.com/static/ae48fc69bc038d283241550212a7eff1/e3663/Resume_Template_-_CV_Samples_2x.png" alt="" />
          </div>
          :null
        }
      </div>
      <div  className='footerUserResume'>
        <Footer/>
      </div>
    </>

  )
}
