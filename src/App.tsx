import React, { useEffect, useState } from 'react';
import BoardComponent from './components/BoardComponent/BoardComponent';
import TakenFigures from './components/TakenComponent/TakenFigures';
import { Board } from './models/Board';

import './App.css';
import { Player } from './models/Player';

function App() {

  const [board, setBoard] = useState(new Board());
  const [player, setPlayer] = useState(new Player('Player'));
  const [ai, setAi] = useState((new Player('Ai')));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart()
    setCurrentPlayer(player)
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard)
  }


  function swapPlayer() {
    if (board.limitMatch.length === 0) {
      alert("Треба взяти мінімум 1 сірник")
    }
    if (board.limitMatch.length > 0) {
      setCurrentPlayer(currentPlayer?.type === 'Player' ? ai : player)
      board.limitMatch.length = 0
    }
  }


  return (
    <div className="app">
      <div className="buttonsWrapper">
        <button className="restart" onClick={() => restart()}>New Game</button>

        <button className="secondPlay" onClick={() => swapPlayer()}>Pass the move</button>
      </div>
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
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
