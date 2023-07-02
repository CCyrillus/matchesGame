import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./Figure";
import { Player } from "./Player";

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


    takenMatch(figure: Figure, currentPlayer: Player | null) {
        if (currentPlayer?.type === 'Player') {
            this.board.playerMatches.push(figure);
        } else {
            this.board.aiMatches.push(figure);
        }
        
        this.board.limitMatch.push(figure);
    }
    
    moveFigure(target: Cell, currentPlayer: Player | null) {
        if (this.figure) {
            target.figure = this.figure;
            this.takenMatch(target.figure, currentPlayer);
            this.figure = null;
        }
    }

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
