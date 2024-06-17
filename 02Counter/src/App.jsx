import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // how to use useState
  // it is done for dom
  const [counter,setCounter]=useState(10)//it needs a value (don't give function)
  // any name in the array eg. loggedin, setLoggedin just a naming convention

  // let counter = 1;
  const addValue=()=>{
    // counter++
    console.log(Math.random());
    // counter = counter + 1; // If wanna use this gotta update the const to let in above useState variable.
    //setCounter(counter + 1) // works fine with const var too!

    // assignment
    if (counter<20) {
      setCounter(counter+1)
    };//else {setCounter(counter=20)}

    console.log("Clicked",counter);

  };



  // const removeValue=()=>{
  //   if (counter>0)
  //   {setCounter(counter-1)};
  // }

  const removeValue= () => {
    setCounter(counter<=0?0:counter-1)
  }
  // using ternary operator! :D

  return (
    <>
    <h1>Hello React!</h1>
    <h2>Counter Value : {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    <p>Footer : {counter}</p>
    </>
  )
}

/**
 * Here after having the counter value updated via the function in the log it does gets updated but not in frontend part ie on the page. To solve this problem we will use hooks.
 * 
 * Hooks are imported from {useState} 'react' import above line 1.
 * 
 * Assignment - Add value cap at 20
 * Remove value cap at 0 
 * Counter value should not be negative.
 * 
 */

export default App
