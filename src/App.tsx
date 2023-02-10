import React, { useState } from "react";
import "./App.css";
import { Chess } from "chess.js";
import Chessboard from "chessboardjsx";
import { Move } from "chess.js";

const App: React.FC = () => {
  const [chess] = useState<Chess>(
    new Chess("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")
  );

  const [fen, setFen] = useState(chess.fen());

  const handleMove = (move: Move) => {
    console.log(move);
    setTimeout(() => {
      const moves = chess.moves();
      console.log(moves);

      if (moves.length > 0) {
        const computerMove = moves[Math.floor(Math.random() * moves.length)];
        console.log(computerMove);
        chess.move(computerMove);
        setFen(chess.fen());
      }
    }, 300);

    console.log(chess.fen());

    setFen(chess.fen());
  };

  // window.setTimeout(handleMove, 500);

  return (
    <div className="flex-center">
      <h1>Random Chess</h1>
      <Chessboard
        width={400}
        position={fen}
      />
    </div>
  );
  // return <div></div>;
};

export default App;
