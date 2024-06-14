import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react";
import GameOver from './components/GaveOver'
import WINNING_COMBINATIONS from './winning-combinations';

const initialGameBoard=[[null,null,null],[null,null,null],[null,null,null]]

function initialActivePlayer(gameTurns){
  let currentPlayer='X';
  if(gameTurns.length > 0 && gameTurns[0].player==='X'){
    currentPlayer='O';
  }return currentPlayer;
}

function deriveGameBoard(gameTurns){
  let gameBoard = [...initialGameBoard.map(array=>[...array])]
  for(const turn of gameTurns){
      const {square,player}=turn;
      const {row,col}=square;
      gameBoard[row][col]=player;
  }return gameBoard;
}

function derivedWinner(gameBoard,players){
  let winner=null;
  for (const combination of WINNING_COMBINATIONS){
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol && firstSquareSymbol ===secondSquareSymbol && firstSquareSymbol===thirdSquareSymbol){
        winner=players[firstSquareSymbol];
    }
  }return winner;
}

function App() {
  const [players,setPlayers]=useState({X:'Player 1',O:'Player 2'})
  const [gameTurns,setGameTurns]=useState([]);
  const activePlayer=initialActivePlayer(gameTurns);
  const gameBoard=deriveGameBoard(gameTurns);
  const winner=derivedWinner(gameBoard,players);
  const hasDraw=gameTurns.length===9 && !winner;
  
  function HandlePlayer(rowIndex, colIndex){
    setGameTurns((prevTurns)=>{
      const currentPlayer=initialActivePlayer(prevTurns);
      const updatedTurns=[
        {square:{row:rowIndex,col:colIndex},player:currentPlayer},
        ...prevTurns,
      ];
      return updatedTurns;
    })
  } 
  
  function handleRestart(){
    setGameTurns([]);
  }
  function HandlePlayerNameChange(symbol,newName){
    setPlayers(prevPlayers=>{
      return{...prevPlayers,[symbol]:newName}
    })
  }
  return (
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player initialName="player_1" symbol ="X" isActive={activePlayer==='X'} onChangeName={HandlePlayerNameChange}/>
            <Player initialName="player_2" symbol ="O" isActive={activePlayer==='O'} onChangeName={HandlePlayerNameChange}/>
          </ol>
          {(winner||hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
          <GameBoard onSelectPlayer={HandlePlayer} board={gameBoard}/>
        </div>
        <Log turns={gameTurns}/>
      </main>  
  )
}

export default App
