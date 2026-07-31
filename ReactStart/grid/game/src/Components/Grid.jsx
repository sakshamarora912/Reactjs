import React, { useState } from 'react';
import './Grid.css';

const Grid = () => {
    const [intervalId,setIntervalId] = useState(null)
    const [board, setBoard] = useState(() => {
    const initialBoard = Array.from({ length: 30 }, () => Array.from({ length: 30 }, () => 'dead'));
    return initialBoard;
  });

  const handleCellClick = (row, col) => {
    const newBoard = [...board];
    newBoard[row][col] = newBoard[row][col] === 'dead' ? 'live' : 'dead';
    setBoard(newBoard);
  };

  const checkAllliveCells = () => {
    let newBoard = board.map(row => [...row]);
  
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const liveNeighbors = countLiveNeighbors(rowIndex, colIndex);
        if (cell === 'dead' && liveNeighbors === 3) 
          newBoard[rowIndex][colIndex] = 'live';
        else if (cell === 'live' && (liveNeighbors < 2 || liveNeighbors > 3)) 
          newBoard[rowIndex][colIndex] = 'dead';
      });
    });
    setBoard(newBoard);
    const interval = setInterval(checkAllliveCells,2000)
    setIntervalId(interval)
  };

  const countLiveNeighbors = (row, col) => {
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    let count = 0;

    directions.forEach(([x, y]) => {
      if (isValidCell(row + x, col + y) && board[row + x][col + y] === 'live') 
        count++;
    });
    return count;
  };
  const isValidCell = (row, col) => row >= 0 && col >= 0 && row < 30 && col < 30;

  return (
    <>
      <div className="game-board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell}`}
                onClick={() => handleCellClick(rowIndex, colIndex)}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div>
        <button onClick={checkAllliveCells}>start</button>
        <button onClick={()=>clearInterval(intervalId)}>stop</button>
      </div>
    </>
  );
};

export default Grid;
