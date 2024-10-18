import React, {useState} from 'react';

function Square({value, onClick}) {
    return (
        <button className="square" onClick={onClick}>
            {value && value === 'X' ? '✅' : value === 'O' ? '0️⃣' : value}
        </button>
    );
}

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameStarted, setGameStarted] = useState(false);

    const handleClick = (i) => {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const newSquares = squares.slice();
        newSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(newSquares);
        setXIsNext(!xIsNext);
        setGameStarted(true);
    };

    const renderSquare = (i) => {
        return <Square value={squares[i]} onClick={() => handleClick(i)}/>;
    };

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else if (squares.every(square => square)) {
        status = 'Draw!';
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    const resetGame = () => {
        setSquares(Array(9).fill(null));
        setXIsNext(true);
        setGameStarted(false);
    };

    return (
        <div className="game-container">
            {!gameStarted && (
                <div className="welcome-screen">
                    <h1>Welcome to Tic-Tac-Toe!</h1>
                    <p>Click on any square to start the game.</p>
                </div>
            )}
            <div className="status">{gameStarted ? status : "Let's play!"}</div>
            <div className="board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            {gameStarted && (
                <button className="reset-button" onClick={resetGame}>Reset Game</button>
            )}
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

function App() {
    return (
        <div className="game">
            <Board/>
        </div>
    );
}

export default App;