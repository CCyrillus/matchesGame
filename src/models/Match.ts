import logoMatch from "../assets/match_.svg";
import { Cell } from "./Cell";
import { Colors } from "./Colors";
import { Figure } from "./Figure";

export class Match extends Figure {
    constructor(color:Colors, cell: Cell) {
        super(color, cell);
        this.match = logoMatch;
    }
}