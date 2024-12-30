export default class GameBoardLogic {
    grid;
    isGameOver;
    currentPlayer;
    player1ShipsSunk;
    player2ShipsSunk;
    ships;

    constructor() {
        this.grid = new Array.fill(0).map(() => new Array(10).fill("empty")); // 10x10 grid initialized to "empty"
        this.isGameOver = false;
        this.currentPlayer = 1;
        this.player1ShipsSunk = 0;
        this.player2ShipsSunk = 0;
        this.ships = {
            carrier: {length: 5, numberOfHits: 0, isSunk: false, coords: [], orientation: "horizontal"},
            battleship: {length: 4, numberOfHits: 0, isSunk: false, coords: [], orientation: "horizontal"},
            cruiser: {length: 3, numberOfHits: 0, isSunk: false, coords: [], orientation: "horizontal"},
            submarine: {length: 3, numberOfHits: 0, isSunk: false, coords: [], orientation: "horizontal"},
            destroyer: {length: 2, numberOfHits: 0, isSunk: false, coords: [], orientation: "horizontal"}
        };

        this.assignCellIds();
    }

    assignCellIds() {
        document.querySelectorAll(".row").forEach((row) => {
            const rowId = row.id.split("-")[1];
            row.querySelectorAll(".cell").forEach((cell, index) => {
                cell.id = `${rowId}${index + 1}`;
            });
        });
    }

}