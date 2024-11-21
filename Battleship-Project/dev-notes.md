# When setting up the BattleShip project what are some immediate things we need?

- We need something to represent our primary game board and our tracking board
- We need something to represent our ships
- We need a way to place our ships on the board
- We need a function the determines if the player has won/lost
- We need a function that determines if a ship has been hit
- We need a function that determines if a ship has been sunk
- Look into AGGrid

## Primary & Tracking Boards

- Primary Board
    - Explicitly declaring the size of the board through a 2d array could work well
    - I could also use a nested for loop to create the board
        - This will allow for dynamic board size
    - Using a hash map could allow me to have coordinate names