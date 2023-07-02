import React, { useState } from "react";
import { FC } from "react";
import { Board } from "../../models/Board";
import { Cell } from "../../models/Cell";
import { Player } from "../../models/Player";
import CellComponent from "../CellComponent/CellComponent";

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard, currentPlayer, swapPlayer }) => {

  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);


  function click(cell: Cell) {
    if (cell.figure) {
      setSelectedCell(cell)
      cell.moveFigure(cell, currentPlayer)
      updateBoard()
    }
    if (board.limitMatch.length === 3) {
      swapPlayer()
    }
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setSelectedCell(null)
    setBoard(newBoard)
  }

  return (
    <div className="boardContainer">
      <div className="boardWrapper">

        <div className="boardTitle">
          <h3 className="title player">
            Хід {currentPlayer?.type}
          </h3>
        </div>

        <div className="board">
          {board.cells.map((row, index) =>
            <React.Fragment key={index}>
              {row.map(cell =>
                <CellComponent
                  click={click}
                  cell={cell}
                  key={cell.id}
                  selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                />
              )}

            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default BoardComponent;
