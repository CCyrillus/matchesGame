import { Cell } from "./Cell"
import { Colors } from "./Colors";
import { Match } from "./Match";

export class Board {
    cells: Cell[][] = []

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

    public getCell(x: number, y: number) {
        return this.cells[y][x];
    }

    public addFigures() {
        new Match(Colors.even, this.getCell(0,0))
        new Match(Colors.even, this.getCell(0,1))
        new Match(Colors.even, this.getCell(0,2))
        new Match(Colors.even, this.getCell(0,3))
        new Match(Colors.even, this.getCell(0,4))

        new Match(Colors.even, this.getCell(1,0))
        new Match(Colors.even, this.getCell(1,1))
        new Match(Colors.even, this.getCell(1,2))
        new Match(Colors.even, this.getCell(1,3))
        new Match(Colors.even, this.getCell(1,4))

        new Match(Colors.even, this.getCell(2,0))
        new Match(Colors.even, this.getCell(2,1))
        new Match(Colors.even, this.getCell(2,2))
        new Match(Colors.even, this.getCell(2,3))
        new Match(Colors.even, this.getCell(2,4))

        new Match(Colors.even, this.getCell(3,0))
        new Match(Colors.even, this.getCell(3,1))
        new Match(Colors.even, this.getCell(3,2))
        new Match(Colors.even, this.getCell(3,3))
        new Match(Colors.even, this.getCell(3,4))

        new Match(Colors.even, this.getCell(4,0))
        new Match(Colors.even, this.getCell(4,1))
        new Match(Colors.even, this.getCell(4,2))
        new Match(Colors.even, this.getCell(4,3))
        new Match(Colors.even, this.getCell(4,4))
    }
};