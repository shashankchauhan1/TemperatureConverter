import 'bootstrap/dist/css/bootstrap.min.css';  // importing the bootstrap css
import { useState } from 'react'
import './App.css'

function App() {
  let [name,setName]=useState("");
  let [submitName,setSubmittedName]=useState("");
  let n;
  // val*1.8 + 32

  const inputHandler = (e) =>{
    n=Number(e.target.value);
    setName(n);
  }

  const displayData = () =>{
    submitName=name*1.8+32;
    setSubmittedName(submitName);
  }  

  return (
    <>
      <h1 className='topic hn'><u>Temperature Converter</u></h1>
    
      <div className='main'>
      <h3 className='hn'>Enter Temperature in Celcius: </h3> <br />
      <div><input type="text" placeholder='Enter Your Name: ' value={name} 
      onChange={inputHandler} style={{height:'5.5vh', marginRight:'10px'}}/>
      <button className='btn btn-primary submitButton' style={{ textAlign:'center', marginBottom:'5px'}} onClick={displayData} > Submit </button>
      </div>
      <br />
      <div className='hn' style={{display:'flex'}}><h4>Temperature in Fahrenheit: <span className='text-warning'><u>{submitName}</u></span> °F</h4></div>
      </div>
    </>
  )
}

export default App
