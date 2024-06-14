import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const ResultModal = forwardRef(({ result, targetTime,timeRemaining,onReset }, ref) =>{
  const dialog=useRef();
  
  const UserLost=timeRemaining<=0;
  const formatTimeRemaining=(timeRemaining/1000).toFixed(2);
  const score = Math.round((1-timeRemaining/(targetTime*1000))*100)

  useImperativeHandle(ref,()=>{
    return{
      open(){
        dialog.current.showModal();
      }
    }
  })
  return (
    createPortal( 
      <dialog ref={dialog} className="result-modal">
      {UserLost && <h2>You {result}</h2>}
      {!UserLost && <h2>Your Score:{score}</h2>}
<<<<<<< HEAD
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
=======
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
>>>>>>> da0d305d9099cf0fe5009c3c7683bf25fa46f048
      <p>
        You stopped the timer with <strong>{formatTimeRemaining}seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
    )
   
  );
})

export default ResultModal;