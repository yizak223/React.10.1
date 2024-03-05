import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDoc, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";
import { dB, auth } from '../../config/firebaseConfig';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './bigResume.module.css'


import { useContext } from 'react';
import { useFormData } from '../../context/FormData';

const SmallCardEducation = ({ title, content, descriprion, date }) => (
  <div className="smallCard">
    <div>
      <p className={`${styles.cardTitle} ${styles.role}`}>{title}</p>
      <p className="cardContent">{content}  </p>
      <p className='cardDescription'>{!descriprion ? descriprion : null}</p>
    </div>
    <p className='date'>{date}</p>
  </div>
);
const SmallCardJobs = ({ title, content }) => (
  <div className={styles.smallCardJobs}>
    <p className={styles.cardTitle}>{title}  </p>
    <p className="cardContent"> {content}</p>
  </div>
);

export default function BigResume({ setPath }) {
  setPath('/UserResume')
  const { ResumeId } = useParams()
  const [resumeData, setResumeData] = useState(null)
  const [loader, setLoader] = useState(false)

  function formatDate(inputDate) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(inputDate).toLocaleDateString('en-US', options);
  }

  const downloadPdf = () => {
    const capture = document.querySelector('.resumeCardBig')
    setLoader(true)
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/png')
      const doc = new jsPDF('p', 'mm', 'a3')
      const componentsWidth = doc.internal.pageSize.getWidth()
      const componentsHeight = doc.internal.pageSize.getHeight()
      doc.addImage(imgData, 'PNG', 0, 0, componentsWidth, componentsHeight)
      setLoader(false)
      doc.save('Resume.pdf')
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resumeDoc = doc(dB, 'UserDetails', ResumeId)
        const docSnapshot = await getDoc(resumeDoc)
        if (docSnapshot.exists()) {
          const docData = docSnapshot.data()
          setResumeData(docData)
        }
        else {
          console.log("No such document!");
        }
      }
      catch (error) {
        console.log("Error getting document:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>{
      resumeData ? <div className='containerAllPage'>
        <div className={styles.resumeDoc}>
          <div className='containerFirstPargraph'>
            <div className='firstPargraph'>
              <p className='roleTitlebig'>{resumeData.jobs[0]?.Role?.toUpperCase()}</p>
              <p className={styles.nameTitleBig}>{resumeData.FullName}</p>
            </div>
            <div className={styles.contactDetails}>
              <p>{resumeData.Phone}</p>
              <p>{resumeData.Email}</p>
            </div>
          </div>
          <div className="smallCardReally blackTitle AboutMe">
            <h3 className={styles.blackTitle}>About Me:</h3>
            <p>{resumeData.AboutMe}</p>
          </div>
          <ul>
            <div className='educationDetails'>
              <h3 className={styles.blackTitle}>Education</h3>
              {resumeData.Education?.map((element, index) => (
                <SmallCardJobs
                  key={index}
                  title={`${element.Degree} at ${element.School}`}
                  content={`${formatDate(element.startDate)} - ${formatDate(element.endtDate)}`}
                />
              ))}
            </div>
            <div className='jobsDetails'>
              <h3 className={styles.blackTitle}>Experience</h3>
              {resumeData.jobs?.map((element, index) => (
                <SmallCardEducation key={index}
                  title={element.Role.toUpperCase()}
                  content={`${element.CompanyName}`}
                  date={`${formatDate(element.startDate)} - ${formatDate(element.endtDate)}`}
                  descriprion={`${element.Description}`}
                />
              ))}
            </div>
          </ul>

        </div>
        <div className='containerButtons'>
          <button className='Delete btnResume btnResumeHover'><i className="fa-sharp fa-solid fa-trash"></i></button>
          <button disabled={!(loader === false)} onClick={downloadPdf} className="goSeeItBtn">
            {loader ? (
              <span ><i className="fa-solid fa-down-to-dotted-line"></i></span>
            ) : (
              <span className='btnResumeHover'><i className="fa-solid fa-download"></i></span>
            )}
          </button>
          <Link className='BackBtn btnResumeHover' to='/UserResume'>Back</Link>
        </div>

      </div> : null
    }

    </>

  )
}
