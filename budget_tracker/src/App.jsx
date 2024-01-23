import { useEffect, useState } from 'react'
import './App.css'
// import BudgetCard from './components/BudgetCard'
import BudgetTracker from './pages/BudgetTracker'
import Home from './pages/Home'
import Auth  from './pages/Auth'
import NavBar from './components/NavBar/navBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { dB, auth } from "./config/fireBaseConfig"
import { onAuthStateChanged, signOut  } from 'firebase/auth'
// import './firebase'; // Add this line prevent firebase not loading error
// import { getFirestore, addDoc, collection, getDocs, onSnapshot } from "firebase/firestore";

function App() {
  const [counter, setcounter] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [name, setName] = useState('null')
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log(user);
        if (user) {
          const uid = user.uid;
          console.log(user.email.substring(0,user.email.indexOf('@')));
          setName(user.email);
          console.log(isLoggedIn);
          setIsLoggedIn(true)
        } else {
          console.log(isLoggedIn);
            setIsLoggedIn(false)
        }
      });
}
,[])
  return (
    <BrowserRouter>
      <NavBar counter={counter} setcounter={setcounter} />
      <Routes>
        <Route path='/Home' element={<Home 
        signOut={signOut} name={name} isLoggedIn={isLoggedIn} setcounter={setcounter} counter={counter}/>}  />
        <Route path='/BudgetTracker' element={
        <BudgetTracker 
        dB={dB}
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
        counter={counter} setcounter={setcounter} 
        name={name}
        />} />
        <Route path='/LogIn' element={<Auth 
        isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} 
        setName={setName} name={name} 
        auth={auth}
        />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;

// import './firebase'; // Add this line prevent firebase not loading error
// import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";

// function App() {
//   const [inputValue1, setInputValue1] = useState('');
//   const [inputValue2, setInputValue2] = useState('');
//   let [storedValues, setStoredValues] = useState([]);

//   const db = getFirestore();

//   const saveDataToFirestore = async () => {
//     const docRef = await addDoc(collection(db, "myCollection"), {
//       field1: inputValue1,
//       field2: inputValue2,
//     });
//     alert("Document written to Database");
//   };

//   const fetchDataFromFirestore = async () => {
//     const querySnapshot = await getDocs(collection(db, "myCollection"));
//     const temporaryArr = [];
//     querySnapshot.forEach((doc) => {
//       temporaryArr.push(doc.data());
//     });
//     setStoredValues([...temporaryArr]);
//   };
//   return (
//     <div className="App">
//       <h1>Save Data to Firebase Firestore</h1>
//       <input
//         type="text"
//         value={inputValue1}
//         onChange={(e) => setInputValue1(e.target.value)}
//       />
//       <input
//         type="text"
//         value={inputValue2}
//         onChange={(e) => setInputValue2(e.target.value)}
//       />
//       <button onClick={saveDataToFirestore}>Save to Firestore</button><br />

//       <button onClick={fetchDataFromFirestore}>Fetch from Firestore</button>  <section>
//       <h2>Stored Values</h2>
//       	<ul>
//         	{storedValues.map((value, index) => (
//           		<li key={index}>
//             			Field1: {value.field1}, Field2: {value.field2}
//           		</li>
//         	))}
//       	</ul>
//       </section>
//     </div>
//   );
// }

    // InputTitle={InputTitle} setInputTitle={setInputTitle}
    // InputCategory={InputCategory} setInputCategory={setInputCategory}
    // InputAmount={InputAmount} setInputAmount={setInputAmount}
    // InputType={InputType} setInputType={setInputType} 
    // saveDataToFirestore={saveDataToFirestore}

  // const [InputTitle, setInputTitle] = useState('');
  // const [InputCategory, setInputCategory] = useState('');
  // const [InputAmount, setInputAmount] = useState('');
  // const [InputType, setInputType] = useState('');
  // let [storedValues, setStoredValues] = useState([]);

  // const saveDataToFirestore = async (e,expanses) => {
  //   const docRef = await addDoc(collection(dB, "Expanses"), {
  //       Title: expanses[e.target.title],
  //       Category: expanses[e.target.category],
  //       Amount: expanses[e.target.amount],
  //       Type: expanses[e.target.type],
  //       // budgetTracker[e.target.name] : e.target.value
  //   });
  //   alert("Document written to Database");
  // }
