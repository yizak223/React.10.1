import React from 'react'
import { useState, useEffect } from 'react'
import UserLinks from '../../Component/linksComponent/UserLinks'
import Form from '../form/index'

export default function Links() {

    const [Links, setLinks] = useState([])
    const fetchData = () => {
        fetch('http://localhost:3100/api/v1/links')
            .then(response => response.json())
            .then(data => {
                console.log(data.links);
                setLinks(data.links)
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }
    //DELETE method
    const deleteHandle = async (link) => {
        console.log(link);
        try {
            const res = await fetch(`http://localhost:3100/api/v1/links/${link._id}`,{method:'DELETE'})
            
            if(res.status === 200) {
               const filtered = Links.filter(item => {
                return item._id !== link._id
               })
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchData()
        console.log(Links);
    }, [])

    return (
        <div>
            {Links?.map((link, index) => {
                return (
                    <UserLinks link={link} key={index} deleteHandle={deleteHandle}/>
                )
            })}
            <Form />
        </div>
    )
}
