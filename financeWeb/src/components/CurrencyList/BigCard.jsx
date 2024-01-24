import React from 'react'
import Cardcurrency from './Cardcurrency'
import { Link, useParams } from 'react-router-dom'

export default function BigCard() {
  const { CurrencyID } = useParams()
  return (
    <>
      <div>BigCard</div>
      <h1>{CurrencyID}</h1>
      <Link to='/CurrencyList'>Back to list</Link>
    </>
  )
}
