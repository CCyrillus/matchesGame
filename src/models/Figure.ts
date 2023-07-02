import match from "../assets/match_.svg";
import { Cell } from "./Cell";
import { Colors } from "./Colors";

export class Figure {
    
    color: Colors;
    match: typeof match | null;
    cell: Cell;
    id: number;

    constructor(color: Colors, cell: Cell) {
        this.color = color;
        this.cell = cell;
        this.cell.figure = this;
        this.match = match;
        this.id = Math.random();
    }
}