import React from "react";
import { useState, useEffect } from "react";
import MissionCard from "../Components/MissionCard";
import '../pages/BudgetTracker.css'


function List() {
    const [edit, setEdit] = useState(false)
    const [missions, setMissoins] = useState([])
    const [missoin, setMissoin] = useState({})

    const ShowForm = () => {
        setEdit(!edit)
        console.log(edit);
    }
    const changeMission = (e) => {
        missoin[e.target.name] = e.target.value
        setMissoin({...missoin})
        console.log(missoin);
    }
    const addMission = (e) => {
        e.preventDefault()
        missoin.id = Math.floor(Math.random() * 1000000)
        console.log([...missions]);
        setMissoins([...missions, {...missoin}])
    }
    const removeMission = (mission) => {
        const filteredMissions = missions.filter((item) => {
            return item.id!== mission.id
        })
        setMissoins(filteredMissions)
    }
    useEffect(() => {
        const missionData = JSON.parse(localStorage.getItem("missions"))
        if (missionData) {
            setMissoins(missionData)
        }
    },[])
    useEffect(() => {
        localStorage.setItem("missions", JSON.stringify(missions))
    },[missions])
    return (
        <div className="container">
            <button className={!edit?"buttonToShowForm":'hideForm'} onClick={ShowForm}>{edit ? 'show' : 'hide'} form</button>
            <h1>Your To Do List</h1>
            {!edit ? <form className="myForm" onSubmit={addMission}>
                <input className="myInput" onChange={changeMission} type="text" name="title" placeholder="What's on your mind?" />
                <input className="myInput" onChange={changeMission} type="text" name="description" placeholder="description" />
                <input className="myInput" onChange={changeMission} type="date" name="due_date"/>
                <button className="addBtn" id="addBtn">Add Mission</button>
            </form> : null}
            <div className="missionContainer">
            {
                missions.map((mission) => {
                    return (
                        <MissionCard removeMission={removeMission} key={mission.id} mission={mission} />
                    )
                })
            }
            </div>
        </div>
    )
}
export default List