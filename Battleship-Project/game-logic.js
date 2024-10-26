//A 10x10 2-D array that represents the game board
const board = [
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty'],
    ['empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty', 'empty']
];

//A ships object that contains all of the ships and their string representations
const ships = {
    carrier: 'AAAAA',
    battleship: 'BBBB',
    crusier: 'CCC',
    submarine: 'SSS',
    destroyer: 'DD'
}

//Variables used in a loop to create board coordinates e.g. (A1, B2, etc.)
const boardMap = new Map();
const boardSize = 10;
const letters = 'ABCDEFGHIJ';

for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
        let coord = letters[i] + (j + 1);
        boardMap.set(coord, [i, j]);
    }
}
