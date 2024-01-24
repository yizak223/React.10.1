import React from 'react'
import { dB } from '../../config/fireBaseConfig'
import { doc, deleteDoc } from 'firebase/firestore'

export default function FavouriteCard(props) {
  const removeCurrency = async(id)=>{
      const docRef = doc(dB, 'favuoriteCurrency', id)
      await deleteDoc(docRef)
  }
  return (
    <div className='card'>
    <section className="LittleCard">
      <section className="card-body">
        <h1 className='fieldData'>{props.currencyData.country}</h1>
        {/* className='fieldData'<img src={props.currencyData.countryImg} alt="" /> */}
        <h2 className='fieldData'>{props.currencyData.currency}</h2>
        <h3 className='fieldData'>{props.currencyData.record_date}</h3>
        <h3 className='fieldData'>{props.currencyData.exchange_rate}</h3>
        <button onClick={()=>{removeCurrency(props.currencyData.id)}} className='removeBtn'>remove</button>
      </section>
    </section>
</div>
  )
}
