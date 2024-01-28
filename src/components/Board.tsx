import Status from "./Alert";
import Square from "./Square";

interface Props {
  xIsNext: boolean;
  squares: string[];
  onPlay: (square: string[]) => void;
}

const Board = ({ xIsNext, squares, onPlay }: Props) => {
  function handleClick(idx: number) {
    if (squares[idx] || isWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  const isWinner = (squares: string[]): string => {
    const winSequence = [
      [3, 4, 5],
      [6, 7, 8],
      [0, 1, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const sequence of winSequence) {
      const player = squares[sequence[0]];

      if (
        player &&
        sequence.every((winPosition) => squares[winPosition] === player)
      ) {
        return player;
      }
    }
    return "";
  };

  const winner = isWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <Status>
        <span>{status}</span>
      </Status>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
