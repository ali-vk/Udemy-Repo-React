



export default function GameBoard({onSelectSquare, board}) {

    // const [gameBoard, setGameBoard] = useState(initialGameBoard)

    // function handleSelect(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) => {   
    //         const updatedGameBoard = [...prevGameBoard.map(col => [...col])];
    //         updatedGameBoard[rowIndex][colIndex] = activeSymbol;
    //         return updatedGameBoard;
    //     });
    //     onSelectSquare();
    // }



  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                {/* <button onClick={() => handleSelect(rowIndex, colIndex)}>{playerSymbol}</button> */}
                <button onClick={() => onSelectSquare(rowIndex, colIndex) } disabled={playerSymbol}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
