import { useState } from "react";
import BudgetCard from "../components/BudgetCard";

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
       <div>
        
        <form onSubmit={submitBudgetTracker}>
                    <input onChange={changeBudgetTracker} type="text" placeholder="what's title?" name="title"/>
                    <label htmlFor="">Category: </label>
                        <select  onChange={changeBudgetTracker}  name="category" id="">
                            <option value="mortgage">mortgage</option>
                            <option value="shopping">shopping</option>
                            <option value="fuel">fuel</option>
                            <option value="Loans">Loans</option>
                            <option value="salary">salary</option>
                        </select>
                    <input placeholder="How much?" onChange={changeBudgetTracker} type="text"  name="amount"/>
                    <label htmlFor="type">Type: </label>
                        <select  onChange={changeBudgetTracker} name="type" id="">
                            <option value="income">income</option>
                            <option value="outcome">outcome</option>
                        </select>
                    <button type="submit">Add Product</button>
                </form>
            {budgetTrackers.map((budgetTracker,index)=>{
                return (
                <BudgetCard budgetTracker={budgetTracker} key={index}/>
                )
            })}
       </div>
    )
}
export default BudgetTracker;