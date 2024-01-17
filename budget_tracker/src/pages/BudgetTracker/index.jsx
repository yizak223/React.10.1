import React from "react";
import { useState, useEffect } from "react";
import BudgetCard from "../../components/BudgetCard";
import '../BudgetTracker/BudgetTracker.css'

//{title:'gas',category:'fuel',amount:1000,type:'income'}
function BudgetTracker(props) {
    const [budgetTrackers, setbudgetTrackers] = useState([])
    const [budgetTracker, setbudgetTracker] = useState({})
    const [edit, setedit] = useState(false)

    const changeBudgetTracker = (e) => {
        budgetTracker[e.target.name] = e.target.value
        setbudgetTracker({ ...budgetTracker })
        console.log(budgetTracker);
    }
    const submitBudgetTracker = (e) => {
        e.preventDefault()
        budgetTracker.id = Math.floor(Math.random() * 1000000)
        console.log([...budgetTrackers]);
        // localStorage.setItem('budgetTrackers', JSON.stringify(budgetTrackers));
        setbudgetTrackers([...budgetTrackers, { ...budgetTracker }])
    }
    useEffect(() => {
        const budgetData = JSON.parse(localStorage.getItem('budgetTrackers'))
        if (budgetData) {
            setbudgetTrackers(budgetData)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('budgetTrackers', JSON.stringify(budgetTrackers));
    },
        [budgetTrackers])

    const deleteBudgetTracker = (budgetTracker) => {
        const filtered = budgetTrackers.filter((item) => {
        return item.id!== budgetTracker.id
        })
        setbudgetTrackers(filtered)
    }
    const showForm=()=>{
        setedit(!edit)
        console.log(edit);
    }
    return (
        
        <div className="container">
            <button className={!edit?"buttonToShowForm":'hideForm'} onClick={showForm}>{!edit?'show':'hide'} form</button>
            <h1>Your Budget Tracker</h1>
            {edit?
            <form  onSubmit={submitBudgetTracker}>
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
                <input className="formInput" placeholder="How much?" onChange={changeBudgetTracker} type="text" name="amount" />
                <label className="label" htmlFor="type">Type: </label>
                <select className="formInput" onChange={changeBudgetTracker} name="type" id="">
                    <option value="Select an option" disabled selected>Select an option</option>
                    <option value="income">income</option>
                    <option value="outcome">outcome</option>
                </select>  {
                        props.name!=null?<button className="button" type="submit">Add Product</button>
                        :null
                }
            </form>:null}
            <div className="budgetContainer">
                {budgetTrackers.map((budgetTracker, index) => {
                    return (
                        <BudgetCard deleteBudgetTracker={deleteBudgetTracker}  budgetTracker={budgetTracker} key={index} />
                    )
                })}
            </div>
        </div>
    )
}
export default BudgetTracker;