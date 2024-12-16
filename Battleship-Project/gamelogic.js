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

//Asigns IDs to each cell
function assignCellIds() {
    document.querySelectorAll(".row").forEach((row) => {
        const rowId = row.id.split("-")[1];
        row.querySelectorAll(".cell").forEach((cell, index) => {
            cell.id = `${rowId}${index + 1}`;
        });
    });
}
assignCellIds();

//Changing the cell background color when clicked
let isRed = false;

function changeCellColor() {
    const cells = document.querySelectorAll(".cell");
  
    cells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (cell.style.backgroundColor === "red") {
          cell.style.backgroundColor = "";
        } else {
          cell.style.backgroundColor = "red";
        }
      });
    });
  }
  changeCellColor();

  //Visualizing the ship placement when hovering over a cell
  function visualizeShipPlacement(cell, ship) {
    const shipLength = ships[ship].length; // Get the length of the ship
    
    cell.addEventListener("mouseover", () => {
      //Highlight the cells that the ship will take up
      for (let i = 0; i < shipLength; i++) {
        const nextCell = getNextCell(cell, ship);

        if (nextCell) {
          nextCell.style.backgroundColor = "green";
        } else {
          break;
        } cell = nextCell;
      }
    });

    cell.addEventListener("mouseout", () => {
      //Revert the cells back to their original color
      for (let i = 0; i < shipLength; i++) {
        cell.style.backgroundColor = "";
        cell = getNextCell(cell, ship, false);
      }
    });
  }

  //Initializing the orientation of the ship
  let currentOrientation = "vertical";

  //Toggles the orientation of the ship
  function toggleOrientation() {
    if (currentOrientation === "vertical") {
      currentOrientation = "horizontal";
    } else {
      currentOrientation = "vertical";
    }
  }

  //Helper function to get the next cell in the current orientation
  function getNextCell(cell, ship, isHover = true) {
    const [letter, number] = cell.id.split(""); // Get the letter and number of the cell
    const letterCode = letter.charCodeAt(0); // Get the ASCII code of the letter
    const numberInt = parseInt(number); // Explicitly convert the number to an integer
  
    if (currentOrientation === "vertical") {
      // If the orientation is horizontal, move to the next cell to the right
      const nextLetter = String.fromCharCode(letterCode + 1);
      const nextCell = document.getElementById(`${nextLetter}${number}`);
      return nextCell;
    } else {
      // If the orientation is vertical, move to the next cell below
      const nextNumber = numberInt + 1;
      const nextCell = document.getElementById(`${letter}${nextNumber}`);
      return nextCell;
    }
  }

  function placeShips() {
    const firstShip = Object.keys(ships)[0];
    let initialCell = document.getElementById("A1");
    visualizeShipPlacement(initialCell, firstShip);
  }
placeShips();