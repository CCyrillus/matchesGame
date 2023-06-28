import React from "react";
import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell
  selected: boolean
  click: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
  return (
    <div
      className={["cell", cell.color, selected ? "selected" : ""].join(' ')}
      onClick={() => click(cell)}
    >
      {cell.figure?.match && <img height={20} src={cell.figure.match} alt="" />}
    </div>
  );
}

export default CellComponent;