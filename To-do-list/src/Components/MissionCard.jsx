import '../pages/BudgetTracker.css'

function MissionCard(props) {
    return (
        <div className="missionCard">
            <h3>{props.mission.title}</h3>
            <p>{props.mission.description}</p>
            <p>Due Date: {props.mission.due_date}</p>
            <button className='remove button' onClick={()=>{props.removeMission(props.mission)}}>Remove</button>
        </div>
    )
}
export default MissionCard