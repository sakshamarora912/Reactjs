import { useEffect, useState } from "react";

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const TIMER =3000;
  const [timeRemaining,setTimeRemaining]=useState(TIMER)

  useEffect(()=>{
    setInterval(()=>{
      setTimeRemaining(prevTime=>prevTime-10)
    },10)
  },[])
  
  useEffect(()=>{
    const timer = setTimeout(()=>{
      onCancel()
    },TIMER);
    
    return()=>{
      clearTimeout(timer)
    }
  },[onCancel])
  
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">No</button>
        <button onClick={onConfirm} className="button">Yes</button>
      </div>
      <progress value={timeRemaining} max={TIMER}/>
    </div>
  );
}
