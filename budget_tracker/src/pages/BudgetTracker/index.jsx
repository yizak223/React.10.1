import React from "react";
import { useState, useEffect } from "react";
import BudgetCard from "../../components/BudgetTracker/BudgetCard";
import '../BudgetTracker/BudgetTracker.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, onSnapshot, doc, deleteDoc, query, getDocs, where, serverTimestamp, orderBy, updateDoc } from "firebase/firestore";



//{title:'gas',category:'fuel',amount:1000,type:'income'}
function BudgetTracker(props) {
    const [budgetTrackers, setbudgetTrackers] = useState([{ Title: 'loading...', id: 'initial' }])
    const [budgetTracker, setbudgetTracker] = useState({})
    const [edit, setedit] = useState(false)

    const changeBudgetTracker = (e) => {
        budgetTracker[e.target.name] = e.target.value
        setbudgetTracker({ ...budgetTracker })
        console.log(budgetTracker);
    }
    const submitBudgetTracker = async (e) => {
        e.preventDefault()
        console.log([...budgetTrackers]);
        // localStorage.setItem('budgetTrackers', JSON.stringify(budgetTrackers));
        setbudgetTrackers([...budgetTrackers, { ...budgetTracker }])
        const collectionRef = collection(props.dB, 'expanses')
        const payload = {
            Title: budgetTracker.title,
            Amount: budgetTracker.amount,
            Type: budgetTracker.type,
            Category: budgetTracker.category,
            timestamp: serverTimestamp()
        }
        const docRef = await addDoc(collectionRef, payload)
        console.log(docRef.id);
        budgetTracker.id = docRef.id
    }
    //? for edit button of budget
    const editBudgetTracker = async (id) => {
        const docRef = doc(props.dB, 'expanses', id)
        const payload = {
            Title: docRef.title,
            Amount: docRef.amount,
            Type: docRef.type,
            Category: docRef.category

        }
        updateDoc(docRef, payload)
    }
    const hansleDelete = async (id) => {
        const docRef = doc(props.dB, 'expanses', id)
        await deleteDoc(docRef)
    }
    const handleQueryDelete = async (removeName) => {
        if (removeName!='') {
             const collectionRef = collection(props.dB, "expanses");
        const q = query(collectionRef, where("Title", "==", removeName));
        console.log(removeName);
        const snapshot = await getDocs(q);
        const results = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(results);
        results.forEach(async (result) => {
            if (result.Title==removeName) {
            const docRef = doc(props.dB, "expanses", result.id);
            await deleteDoc(docRef);
            }
            else{
                alert('there is no budget like this')
            }})}}
            
    //? delete with local storage
    const deleteBudgetTracker = (budgetTracker) => {
        const filtered = budgetTrackers.filter((item) => {
            return item.id !== budgetTracker.id
        })
        setbudgetTrackers(filtered)
    }
    const showForm = () => {
        setedit(!edit)
        console.log(edit);
    }
    useEffect(
        () => {
            const collectionRef = collection(props.dB, 'expanses')
            const q = query(collectionRef, orderBy('timestamp', 'asc'))
            const unsub = onSnapshot(collection(props.dB, 'expanses'), (snapshot) =>
                setbudgetTrackers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            return unsub
        }
        , [])
    // todo: local storage
    // useEffect(() => {
    //      const budgetData = JSON.parse(localStorage.getItem('budgetTrackers'))
    //      console.log(budgetData);
    //      if (budgetData) {
    //          setbudgetTrackers(budgetData)
    //      }
    // }, [])
    // useEffect(() => {
    // localStorage.setItem('budgetTrackers', JSON.stringify(budgetTrackers));
    // },
    //     [budgetTrackers])

    return (

        <div className="container">
            <button className={!edit ? "buttonToShowForm" : 'hideForm'} onClick={showForm}>{!edit ? 'show' : 'hide'} form</button>
            <h1>Your Budget Tracker</h1>
            {edit ?
                <form onSubmit={submitBudgetTracker}>
                    <input className="formInput" onChange={changeBudgetTracker} type="text" placeholder="what's title?" name="title" />
                    <label className="label" htmlFor="category">Category: </label>
                    <select className="formInput" onChange={changeBudgetTracker} name="category" id="">
                        <option value="Select an option" disabled selected>Select an option</option>
                        <option value="mortgage">mortgage</option>
                        <option value="shopping">shopping</option>
                        <option value="fuel">fuel</option>
                        <option value="Loans">Loans</option>
                        <option value="salary">salary</option>
                    </select>
                    <input className="formInput" placeholder="How much?" onChange={changeBudgetTracker} type="number" name="amount" />
                    <label className="label" htmlFor="type">Type: </label>
                    <select className="formInput" onChange={changeBudgetTracker} name="type" id="">
                        <option value="Select an option" disabled selected>Select an option</option>
                        <option value="income">income</option>
                        <option value="outcome">outcome</option>
                    </select>  {
                        props.name != null ? <>
                            <button className="button" type="submit">Add Product</button>
                            <input type="text" name="removeName" id="removeName" placeholder="what to remove?" />
                            <button onClick={() => { handleQueryDelete(removeName.value) }} className="remove">remove</button>
                        </>
                            : <p>You need to  <Link onClick={() => props.setcounter(2)} className={props.counter == 2 ? 'active' : null} to='/LogIn'><span className="lgin-signup"> Log In</span></Link></p>
                    }

                </form> : null}
            <div className="budgetContainer">
                {budgetTrackers.map((budgetTracker, index) => {
                    return (
                        <BudgetCard hansleDelete={hansleDelete} budgetTracker={budgetTracker} key={index} />
                    )
                })}
            </div>
        </div>
    )
}
export default BudgetTracker;