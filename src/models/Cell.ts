import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    figure: Figure | null;
    color: Colors;
    board: Board;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.board = board;
        this.id = Math.random();
    }
}