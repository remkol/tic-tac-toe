import { useState } from "react";
import Board from "./components/Board";

function App() {
  const [currentMove, setCurrentMove] = useState(0);
  const [history, setHistory] = useState(
    Array<Array<string>>(Array(9).fill(""))
  );

  const xIsNext = currentMove % 2 === 0;

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => {
    let description, className;
    if (move > 0) {
      description = "Go to move #" + move;
      className = "btn btn-outline-success m-1";
    } else {
      description = "Go to start";
      className = "btn btn-outline-warning m-2";
    }
    return (
      <li key={move}>
        <button className={className} onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  const reset = () => {
    setCurrentMove(0);
    setHistory([...history.slice(0, 1)]);
  };

  return (
    <>
      <div className="game">
        <div className="game-board">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="game-info">
          <button className="btn btn-outline-danger m-2" onClick={reset}>
            Reset
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );
}

export default App;
