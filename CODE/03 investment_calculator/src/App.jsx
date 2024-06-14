import Header from "./Components/Header"
import Result from "./Components/Result"
import UserInput from "./Components/UserInput"
import {useState} from 'react'
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
})

const inputIsValid=userInput.duration>=1;
function handleChange(input,newValue){
    setUserInput(prevValue=>{
        return {
            ...prevValue,[input]:+newValue
        };
    })
}
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onchangeInput={handleChange}/>
      {!inputIsValid && <p className="center">please enter duration greater then 0</p>}
      {inputIsValid && <Result input={userInput}/>}
    </>
  )
}

export default App
