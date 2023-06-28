import React, { useEffect, useState } from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import TakenFigures from './components/TakenFigures';
import { Board } from './models/Board';
import { Player } from './models/Player';

function App() {

  const [board, setBoard] = useState(new Board());
  const [player, setPlayer] = useState(new Player());
  const [oponentAi, setoponentAi] = useState(new Player());

  useEffect(() => {
    restart()
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard)
  }

  return (
    <div className="app">
      <button className="restart" onClick={() => restart()}>New Game</button>
      <BoardComponent
        board={board}
        setBoard={setBoard}
      />
      <TakenFigures
        title={"Your Matches:"}
        figures={board.playerMatches}
      />
      <TakenFigures
        title={"Ai Matches:"}
        figures={board.aiMatches}
      />

      
    </div>
  );
}

export default App;
