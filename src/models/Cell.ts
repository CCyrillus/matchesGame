import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./Figure";

export class Cell {
    cells: Cell[][] = [];
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


    takenMatch(figure: Figure) {
        if (this.board.isPlayerMove) {
            this.board.playerMatches.push(figure);
        } else {
            this.board.aiMatches.push(figure);
        }

        this.board.limitMatch.push(figure);

        if (this.board.limitMatch.length === 3) {
            // this.board.isPlayerMove = false;
            // this.board.limitMatch = [];
            this.board.finishTurn();
            console.log('this.board: ', this.board);
        }
    }

    moveFigure(target: Cell) {
        if (this.figure) {
            target.figure = this.figure;
            this.takenMatch(target.figure);
            this.figure = null;
        }
    }
    getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    // aiTakenMatch(figure: Figure) {
    //     this.board.aiMatches.push(figure);
    // }

    // AiMoveFigure() {
    //     if (this.board.limitMatch.length > 2) {
    //         for (let x = 0; x < 5; x++) {
    //             for (let y = 0; y < 5; y++) {
    //                 if (this.board.cells[x][y].figure) {
    //                     this.board.cells[x][y].figure = null
    //                     return
    //                 }
    //             }
    //         }
    //     }
    // }


}
