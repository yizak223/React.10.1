import '../pages/BudgetTracker.css'

function BudgetCard(props) {
    return(
        <div className="budgetCard">
            <h1>Title: {props.budgetTracker.title}</h1>
            <h4>Category: {props.budgetTracker.category}</h4>
            <h4>Amount: {props.budgetTracker.amount}</h4>
            <h4>Type: {props.budgetTracker.type}</h4>
        </div>
    )
}

export default BudgetCard;