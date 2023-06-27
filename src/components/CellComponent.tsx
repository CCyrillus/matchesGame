import React from "react";
import { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
  cell: Cell
}

const CellComponent: FC<CellProps> = ({ cell }) => {
  return (
    <div className={["cell", cell.color].join(' ')}>
      {cell.figure?.match && <img src={cell.figure.match} alt=""/>}
    </div>
  );
}

export default CellComponent;