import '../pages/BudgetTracker/BudgetTracker.css'

function BudgetCard(props) {
    return (
        <div className="budgetCard">
            <h1>Title: {props.budgetTracker.title}</h1>
            <h4>Category: {props.budgetTracker.category}</h4>
            <h4>Amount: {props.budgetTracker.amount}</h4>
            <h4 className={props.budgetTracker.type === 'income' ? 'income' : 'outcome'}>
                Type: {props.budgetTracker.type}
            </h4>
            <button className='remove button' onClick={() => props.deleteBudgetTracker(props.budgetTracker)}>remove</button>
        </div>
    )
}

export default BudgetCard;