import React, { useState, useRef } from 'react';
import './Grid.css';

const Grid = () => {
  const [interval, setIntervalState] = useState(null);
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
    setBoard(prevBoard => {
      let newBoard = prevBoard.map(row => [...row]);  
      prevBoard.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const liveNeighbors = countLiveNeighbors(rowIndex, colIndex, prevBoard);

          if (cell === 'dead' && liveNeighbors === 3) 
            newBoard[rowIndex][colIndex] = 'live';
          else if (cell === 'live' && (liveNeighbors < 2 || liveNeighbors > 3)) 
            newBoard[rowIndex][colIndex] = 'dead';
        });
      });
      return newBoard;
    });
  };

  const runInfinite = () => {
    checkAllliveCells();
    setIntervalState(setInterval(()=> checkAllliveCells(),1000));
  }

  const cancelInfinite = () => {
    clearInterval(interval);
    setIntervalState(null);
  }

  const countLiveNeighbors = (row, col, theBoard) => {
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
    let count = 0;

    directions.forEach(([x, y]) => {
      if (isValidCell(row + x, col + y) && theBoard[row + x][col + y] === 'live') 
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
        <button onClick={checkAllliveCells}>Try Once</button>
        <button onClick={() => interval ? cancelInfinite() : runInfinite()}>{interval ? "Stop" : "Start"}</button>
      </div>
    </>
  );
};

export default Grid;
