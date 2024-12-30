import './GameBoard.css'

export default function GameBoard() {
    return (
        <>
        <div id="game-container">
            <div id="letter-coords">
                <div id="letter-a">A</div>
                <div id="letter-b">B</div>
                <div id="letter-c">C</div>
                <div id="letter-d">D</div>
                <div id="letter-e">E</div>
                <div id="letter-f">F</div>
                <div id="letter-g">G</div>
                <div id="letter-h">H</div>
                <div id="letter-i">I</div>
                <div id="letter-j">J</div>
            </div>
        <div id="board-and-nums">
        <div id="board">
                <div className="row" id="row-a">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-b">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-c">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-d">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-e">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-f">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-g">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-h">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-i">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
                <div className="row" id="row-j">
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                <div className="cell"></div>
                </div>
            </div>
            <div id="number-coords">
                    <div id="number-1">1</div>
                    <div id="number-2">2</div>
                    <div id="number-3">3</div>
                    <div id="number-4">4</div>
                    <div id="number-5">5</div>
                    <div id="number-6">6</div>
                    <div id="number-7">7</div>
                    <div id="number-8">8</div>
                    <div id="number-9">9</div>
                    <div id="number-10">10</div>
                </div>
        </div>
        </div>
        </>
    );
}