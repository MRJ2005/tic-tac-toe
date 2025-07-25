import { useState } from "react"

import Player from "./components/player.jsx";
import GameBoard from "./components/GameBoard.jsx"
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function selectSquere(rowIndex, colIndex) {
    setActivePlayer((curPlayer) => curPlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <menu>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="player 2" symbol="O" isActive={activePlayer === 'O'} />

        </ol>
        <GameBoard
          onSelectSquare={selectSquere}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </menu>
  )
}

export default App
