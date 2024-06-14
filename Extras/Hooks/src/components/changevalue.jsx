import React ,{useState,useRef}from 'react'

const ChangeValue = () => {
    const [inputValue,setInputValue]=useState('hello');
    const handleSubmit=()=>  setInputValue("saksham");

    const setvalue=useRef("hello");
    const handleSubmitRef=()=> setvalue.current="saksham";

  return (
    <div>
      <p>{inputValue}</p>
      <button onClick={handleSubmit}>Submit</button><br/><br/>

      <p>{setvalue.current}</p>
      <button onClick={handleSubmitRef}>Submit</button>
    </div>
  )
}

export default ChangeValue