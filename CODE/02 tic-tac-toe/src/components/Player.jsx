import {useState} from 'react'

const Player = ({symbol,initialName,isActive,onChangeName}) => {
    const [playerName,setPlayerName]=useState(initialName);
    const [isEditing,setIsEditing]=useState(false);

    function handleClick(){
        setIsEditing(editing=>!editing);
        if(isEditing){
            onChangeName(symbol,playerName);
        }    
    }
    function handleChange(e){
        setPlayerName(e.target.value);
    }
    let editablePlayerName=<span className="player-name">{playerName}</span>
    if(isEditing){
        editablePlayerName=<input type='text' required value={playerName} onChange={handleChange}/>
    }
  return (
    <li className={isActive?'active':""}>
        <span className='player'>
            {editablePlayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
    </li>
  )
}

export default Player