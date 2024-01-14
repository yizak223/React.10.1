function BudgetCard(props) {
    return(
        <div>
            <h1>{props.budgetTracker.title}</h1>
            <h2>{props.budgetTracker.category}</h2>
            <h3>{props.budgetTracker.amount}</h3>
            <h4>{props.budgetTracker.type}</h4>
        </div>
    )
}

export default BudgetCard;