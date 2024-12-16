# When setting up the BattleShip project what are some immediate things we need?

- We need something to represent our primary game board and our tracking board
- We need something to represent our ships
- We need a way to place our ships on the board
- We need a function the determines if the player has won/lost
- We need a function that determines if a ship has been hit
- We need a function that determines if a ship has been sunk
- Look into AGGrid for later implementation

## Primary & Tracking Boards

- Primary Board
    - Explicitly declaring the size of the board through a 2d array could work well
    - I could also use a nested for loop to create the board
        - This will allow for dynamic board size
    - Using a hash map could allow me to have coordinate names

## Marking Board Coordinates

- After transitioning from using a table to using a series of divs to represent the board:
    - We needed a way to dynamically give IDs to each cell
        - This was done by creating a function called assignCellIds where each cell was given an id based on its location on the board
- Now that we have this, we can now move on to setting up the logic to mark the board
    - This logic can be used to add/remove ships from the board as well as determine if a ship has been hit
    - the use of the function changeCellColor in conjunction with the isRed boolean flag can be used to change the color of the cell and revert it back

## Ship Placement
- 12/3 Today we will work on setting up the ship placement logic
- The player should be able to place their ships horizontally or vertically
    - All ships will be placed vertically by default. Hitting the spacebar will toggle between vertical and horizontal
        - We need to make sure that ships cannot be placed out of bounds
    - For now, we will prevent players from overlapping ships 
    - When a player hovers over a cell, the cell should be highlighted according to the ship's length