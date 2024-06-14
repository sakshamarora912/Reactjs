import React, { useRef, useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1)
    const decrement = () => (count>0) && setCount(count - 1)

    const countRef =useRef(0);
    const incrementRef = () => countRef.current+=1
    const decrementRef = () => (countRef.current>0) && (countRef.current-=1)

    return (
      <div>
        <span>Count: {count} </span>
        <span>UseState </span>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button><br/>

        <span>Count: {countRef.current} </span>
        <span>UseRef   </span>
        <button onClick={incrementRef}>+</button>
        <button onClick={decrementRef}>-</button> <br/>
      </div>
    );
  }


export default Counter