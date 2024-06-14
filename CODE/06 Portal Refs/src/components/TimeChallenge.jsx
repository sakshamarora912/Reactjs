import { useState, useRef } from 'react';
import ResultModal from './ResultModal.jsx';

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining,setTimeRemaining]=useState(targetTime*1000);
  const timerActive=timeRemaining>0 &&timeRemaining<targetTime*1000
  const timer = useRef();
  const dialog = useRef();

<<<<<<< HEAD
  if(timeRemaining<=0){
    clearInterval(timer.current);    
=======

  if(timeRemaining<=0){
    clearInterval(timer.current);
    
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining=>prevTimeRemaining-10)
    },10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset(){
    setTimeRemaining(targetTime*1000)
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} timeRemaining={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? 'Stop' : 'Start'} Challenge
          </button>
        </p>
        <p className={timerActive ? 'active' : undefined}>
          {timerActive ? 'Time is running...' : 'Timer inactive'}
        </p>
      </section>
    </>
  );
}
