import Player from "./Components/Player";
import Gameboard from "./Components/GameBoard";
import { useState } from "react";
import Log from "./Components/Log";
import { WINNING_COMBINATIONS } from "./Components/WinningCombinstions";
import GameOver from "./Components/GameOver";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = 'X';
  if (gameTurn.length > 0 && gameTurn[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

const initialGame = [
  [null, null, null],
  [null, null, null],
  [null, null, null]

];

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGame.map(array=>[...array])]
  for (const turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSquare = gameBoard[combination[1].row][combination[1].column]
    const thirdSquare = gameBoard[combination[2].row][combination[2].column]
    if (firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare) {
      winner = firstSquare

    }
  }
  let hasDraw= gameTurn.length === 9 &&!winner

  function handleSelect(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });

  }
  function onRestart (){
    setGameTurn([])
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player player="Player1" symbol="X" isActive={activePlayer === "X"} />
          <Player player="Player2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={onRestart}/>}

        <Gameboard onSelect={handleSelect} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>
  );
}

export default App;
