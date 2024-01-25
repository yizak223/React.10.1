import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function BigCard() {
  const { CurrencyID } = useParams()
  
    console.log(CurrencyID);
    // fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=record_date,country,currency,country_currency_desc,exchange_rate&country_currency_desc=Afghanistan`)
    //   .then(res => res.json())
    //   .then((currency) => {
    //     const dataArray = currency.data.map((element) => ({
    //       country: element.country,
    //       currency: element.currency,
    //       exchange_rate: element.exchange_rate,
    //       date: element.record_date,
    //     }));
    //     console.log(currency);
        // setcurrencyDataArray(dataArray);
        // console.log(currencyDataArray);
      // })
      // .catch((err) => console.error(err));
  
  
  return (
    <>
      <h1>{CurrencyID}</h1>
      {/* <h2 className='fieldData'>{props.currencyData.currency}</h2>
        <h3 className='fieldData'>{props.currencyData.date}</h3>
        <h3 className='fieldData'>{props.currencyData.exchange_rate}</h3> */}
      <Link to='/CurrencyList'>Back to list</Link>
    </>
  )
}
