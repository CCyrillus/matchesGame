import { Board } from "./Board";
import { Figure } from "./Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly figure: Figure | null;
    board: Board;
    id: number;

    constructor(board: Board, x: number, y: number, figure: Figure | null) {
        this.x = x;
        this.y = y;
        this.figure = figure;
        this.board = board;
        this.id = Math.random();
    }
}