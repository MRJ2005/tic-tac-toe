import Player from "./components/player"

function App() {
  return (
    <menu>
      <div id="game-container">
        <ol id="players">
          <Player initialName="player 1" symbol="X" />
          <Player initialName="player 2" symbol="O" />

        </ol>

      </div>
    </menu>
  )
}

export default App
