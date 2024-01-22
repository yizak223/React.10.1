// import '../pages/BudgetTracker/BudgetTracker.css'

function BudgetCard(props) {
    return (
        <div className="budgetCard">
            <h1>Title: {props.budgetTracker.Title}</h1>
            <h4>Category: {props.budgetTracker.Category}</h4>
            <h4>Amount: {props.budgetTracker.Amount}</h4>
            <h4 className={props.budgetTracker.Type === 'income' ? 'income' : 'outcome'}>
                Type: {props.budgetTracker.Type}
            </h4>
            <button className='remove button' onClick={() => props.hansleDelete(props.budgetTracker.id)}>remove</button>
        </div>
    )
}

export default BudgetCard;