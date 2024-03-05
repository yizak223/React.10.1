import React, { useContext, useState } from "react";
import FormResume from "../../component/madeResume/FormResume";
import styles from './madeMeResume.module.css';

export default function MadeMeResume() {
  const [counter, setCounter] = useState(1)
  return (
    <div className={styles.container}>
      <FormResume setCounter={setCounter} counter={counter} />
      <div className={styles.steps}>
        <h2 onClick={()=>setCounter(1)} className={counter==1?styles.onIt:styles.step}>Contact details</h2>
        <div className={styles.line}></div>
        <h2 onClick={()=>setCounter(2)} className={counter==2?styles.onIt:styles.step}>Education</h2>
        <div className={styles.line}></div>
        <h2 onClick={()=>setCounter(3)} className={counter==3?styles.onIt:styles.step}>Experience</h2>
      </div>
    </div>
  )
}
