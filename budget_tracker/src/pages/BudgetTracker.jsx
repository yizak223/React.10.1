import React from "react";
import { useState } from "react";
import BudgetCard from "../components/BudgetCard";
import '../pages/BudgetTracker.css'

//{title:'gas',category:'fuel',amount:1000,type:'income'}
function BudgetTracker() {
    const [budgetTrackers,setbudgetTrackers] = useState([])
    
    const [budgetTracker, setbudgetTracker] = useState({})

    const changeBudgetTracker =(e)=>{
        budgetTracker[e.target.name]=e.target.value
        setbudgetTracker({...budgetTracker})
        console.log(budgetTracker);
    }
    const submitBudgetTracker =(e)=>{
        e.preventDefault()
        console.log([...budgetTrackers]);
            setbudgetTrackers([...budgetTrackers,{...budgetTracker}]) 
        
    }
    return(
       <div className="container">
        <h1>Your Budget</h1>
        <form onSubmit={submitBudgetTracker}>
                    <input className="formInput" onChange={changeBudgetTracker} type="text" placeholder="what's title?" name="title"/>
                    <label className="label" htmlFor="category">Category: </label>
                        <select className="formInput" onChange={changeBudgetTracker}  name="category" id="">
                            <option value="mortgage">mortgage</option>
                            <option value="shopping">shopping</option>
                            <option value="fuel">fuel</option>
                            <option value="Loans">Loans</option>
                            <option value="salary">salary</option>
                        </select>
                    <input className="formInput" placeholder="How much?" onChange={changeBudgetTracker} type="text"  name="amount"/>
                    <label className="label" htmlFor="type">Type: </label>
                        <select className="formInput" onChange={changeBudgetTracker} name="type" id="">
                            <option value="income">income</option>
                            <option value="outcome">outcome</option>
                        </select>
                    <button className="button" type="submit">Add Product</button>
                </form>
                <div className="budgetContainer">
            {budgetTrackers.map((budgetTracker,index)=>{
                return (
                <BudgetCard budgetTracker={budgetTracker} key={index}/>
                )
            })}
            </div>
       </div>
    )
}
export default BudgetTracker;