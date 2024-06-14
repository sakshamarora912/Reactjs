const GameBoard = ({onSelectPlayer,board}) => {
  return (
    <ol id="game-board">
        {board.map((row,rowIndex)=>
            <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex)=> <li key={colIndex}>
                        <button onClick={()=>onSelectPlayer(rowIndex,colIndex)} disabled={playerSymbol!==null}>
                            {playerSymbol}
                        </button>
                    </li> )}
                </ol>
            </li> 
        )}
    </ol>
  )
}
export default GameBoard