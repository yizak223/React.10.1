import React, { useState } from 'react'
import Axios from 'axios'
export default function Form() {
  const url='http://localhost:3100/api/v1/links'
  const [data, setData] = useState({
    title: '',
    link: '',
    description: '',
    idUser:''
  })
  const handleChange = (e) => {
    const newData = {...data}
    newData[e.target.name] = e.target.value
    setData(newData)
    console.log(newData);
  }
  //Post data
  const SubmitHandle = async(e)=>{
    e.preventDefault()
    await Axios.post(url,{
      Title: data.title,
      Link: data.link,
      Description: data.description,
      UserId: data.idUser
    })
    
   .then(res => {
        console.log(res.data);
      })
  }
 

  return (
    <form onSubmit={SubmitHandle}>
      <input onChange={handleChange} name='title' type="text" placeholder='Title' />
      <input onChange={handleChange} name='link' type="text" placeholder='Link' />
      <input onChange={handleChange} name='description' type="text" placeholder='description' />
      <input onChange={handleChange} name='idUser' type="text" placeholder='idUser'/>
      <button>sent</button>
    </form>
  )
}
