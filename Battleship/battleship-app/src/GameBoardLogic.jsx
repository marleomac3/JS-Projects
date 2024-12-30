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
            carrier: {length: 5, isSunk: false, coords: [], orientation: "horizontal"},
            battleship: {length: 4, isSunk: false, coords: [], orientation: "horizontal"},
            cruiser: {length: 3, isSunk: false, coords: [], orientation: "horizontal"},
            submarine: {length: 3, isSunk: false, coords: [], orientation: "horizontal"},
            destroyer: {length: 2, isSunk: false, coords: [], orientation: "horizontal"}
        };
    }

    

}