import { useState } from 'react'
import './App.css'

function App() {

  // problem is UI updation

  let [counter, setCounter] = useState(0)
  // here set counter is basically a method/function which works on counter
  // and use state is basically a hook to solve the problem of UI updation

  const addValue = () => {
    // console.log("value Added",Math.random());
    // console.log("clicked",counter);
    if(counter<20){
      counter = counter + 1;
      setCounter(counter);
    }
    
  };

  const removeValue = () =>{
    if(counter>0){
      counter = counter - 1;
      setCounter(counter);
    }  
  }

  // let counter = 5

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>
      <button
      onClick={addValue}
      >Add Value </button>
      <br />
      <br />
      <button 
      onClick={removeValue}
      >Remove Value</button>
      {/* <p>footer : </p> */}
    </>
  );
}

export default App
