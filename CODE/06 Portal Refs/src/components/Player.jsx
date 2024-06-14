import { useState,useRef} from "react";

export default function Player() {
  const playerName=useRef();
  const [player,setPlayer]=useState('')
  
  // const [isclicked,setIsClicked]=useState(false);
  // const handlePlayer=(e)=>{
  //       setIsClicked(false);
  //       setPlayer(e.target.value);
  // }
  const handleClick=()=>{
    setPlayer(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      {/* <h2>welcome, {isclicked?player:'unknown entity'}</h2> */}
      <h2>welcome, {player===''?'unknown entity':player}</h2>
      <p>
        {/* <input type="text" onChange={handlePlayer} value={player}/> */}
        <input type="text" ref={playerName}/>
        <button onClick={handleClick} >Set Name</button>
      </p>
    </section>
  );
}
