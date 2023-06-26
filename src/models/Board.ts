import { Cell } from "./Cell"

export class Board {
    cells: Cell[][] = []

    public initCells() {
        for (let x = 0; x < 5; x++) {
            const row: Cell[] = [];
            for (let y = 0; y < 5; y++) {
                if ((x + y) % 2 !== 0) {
                    row.push(new Cell(this, y, x, null)) //Четные ячейки
                } else {
                    row.push(new Cell(this, y, x, null)) //нечет ячейки
                }
            }
            this.cells.push(row)
        }
    }
};