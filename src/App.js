import "./styles.css";
import Board from "./Board";

export default function App() {
  const initialConfiguration = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    0
  ];

  const handleSolve = () => {
    console.log("Puzzle solved!");
  };

  return (
    <div className="App">
      <Board
        initialConfiguration={initialConfiguration}
        onSolveCallback={handleSolve}
      />
    </div>
  );
}
