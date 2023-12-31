import { Cell } from "./Cell"
import { Colors } from "./Colors";
import { Figure } from "./Figure";
// import { Match } from "./Match";

export class Board {

    cells: Cell[][] = [];

    limitMatch: Figure[] = [];

    playerMatches: Figure[] = [];

    aiMatches: Figure[] = [];

    public initCells() {
        for (let x = 0; x < 5; x++) {
            const row: Cell[] = [];
            for (let y = 0; y < 5; y++) {
                if ((x + y) % 2 !== 0) {
                    row.push(new Cell(this, y, x, Colors.even, null)) //Четные ячейки
                } else {
                    row.push(new Cell(this, y, x, Colors.odd, null)) //нечет ячейки
                }
            }
            this.cells.push(row)
        }
    }


    public getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        newBoard.playerMatches = this.playerMatches;
        newBoard.aiMatches = this.aiMatches;
        newBoard.limitMatch = this.limitMatch;
        
        return newBoard;
    }

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigures() {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                new Figure(Colors.even, this.getCell(x, y))
            }
        }
    }
}
