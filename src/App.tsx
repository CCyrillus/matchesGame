import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent';
import TakenFigures from './components/TakenFigures';
import { Board } from './models/Board';
import { Player } from './models/Player';

import './App.css';

function App() {

  const [board, setBoard] = useState(new Board());
  const [player, setPlayer] = useState(new Player());
  const [oponentAi, setoponentAi] = useState(new Player());

  useEffect(() => {
    restart()
  }, []);

  useEffect(() => {
    console.log('Board: ', board);
  }, [board]);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard)
  }

  function click() {
    board.finishTurn();
  }

  return (
    <div className="app">
      <div className="buttonsWrapper">
        <button className="restart" onClick={() => restart()}>New Game</button>
        <button className="pass" onClick={() => click()}>Pass the move</button>
      </div>
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
