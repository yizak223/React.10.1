import React, { useEffect } from 'react'
import Cardcurrency from '../../components/CurrencyList/Cardcurrency';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

function Currency(props) {
  const [currencyDataArray, setcurrencyDataArray] = useState([])
  
  const fetchFinance = async () => {
    fetch(`https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?sort=-record_date`)
      .then(res => res.json())
      .then((currency) => {
        console.log(currency);
        const dataArray = currency.data.map((element) => ({
          country: element.country,
          currency: element.currency,
          exchange_rate: element.exchange_rate,
          date: element.record_date,
        }));
        setcurrencyDataArray(dataArray);
        console.log(currencyDataArray);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchFinance()
  }, [])
  // console.log(currency);
  // currency.data.forEach((element,i) => {
  //   if(i<20){
  // console.log(1);
  //   fetch(`https://restcountries.com/v3.1/name/${currency.data[80].country}`)
  // .then(res => { return res.json() })
  // .then(country => {
  //    console.log(country)

  //  currencyData.country=currency.data[i].country
  //  currencyData.currency=currency.data[i].currency
  //  currencyData.rate=currency.data[i].exchange_rate
  //  currencyData.date=currency.data[i].record_date
  //  })
  //  setcurrencyDataArray([...currencyDataArray],{...currencyData})
  //  console.log(currencyDataArray);
  // .catch(err => console.error(err))
  // }
  // console.log(currencyDataArray);});
  const auth = getAuth()
  const mysignOut = () => {
    signOut(auth)
      .then(() => {
        alert('Your account has been signed out')
        props.setIsLoggedIn(!props.isLoggedIn)
        location.reload()
      }).catch((error) => {
        console.log(error);
      });
  }


  return (
    <>
      <div>
        {props.isLoggedIn ?
          <button onClick={mysignOut}>Log-out</button> :
          <Link
            onClick={() => props.setcounter(2)}
            className={props.counter === 2 ? 'nav-link active' : 'nav-link'}
            to='/Authntication'><button>LogIn</button></Link>}
        <h1>Wellcome {props.name ? props.name : null} to our finance web</h1>
      </div>
      <div className='listCard'>
        {currencyDataArray.map((currencyData, index) => {
          return (
            <Cardcurrency userId={props.userId} setuserId={props.setuserId}
              isLoggedIn={props.isLoggedIn} currencyData={currencyData} key={index} />
          )
        })}
      </div>
    </>
  )
}

export default Currency