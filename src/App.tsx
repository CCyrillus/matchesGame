import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent/BoardComponent';
import TakenFigures from './components/TakenComponent/TakenFigures';
import { Board } from './models/Board';

import './App.css';

function App() {

  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart()
  }, []);

  useEffect(() => {
    console.log('BoardApp: ', board);
  }, [board]); //ERROR1 родительский компонент не сохраняет состояние свойств которые мы назначили в экземпляре

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
