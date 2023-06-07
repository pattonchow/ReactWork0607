import React, { useState, useEffect } from "react";
// import classNames from "classnames";
import Tile from "./Tile";

const Board = ({ initialConfiguration, onSolveCallback }) => {
  const [tiles, setTiles] = useState(initialConfiguration);
  const [puzzleSolved, setPuzzleSolved] = useState(false);

  useEffect(() => {
    // Check if the puzzle is solved on component mount
    checkSolved();
  }, []);

  useEffect(() => {
    if (puzzleSolved) {
      onSolveCallback();
    }
  }, [puzzleSolved, onSolveCallback]);

  const checkSolved = () => {
    const isSolved = tiles.every((tile, index) => tile === index);
    setPuzzleSolved(isSolved);
  };

  const handleClick = (index) => {
    if (tiles[index] === 0) {
      return; // Don't allow moving the empty tile
    }

    const emptyIndex = tiles.indexOf(0);
    const tileRow = Math.floor(emptyIndex / 4);
    const clickedRow = Math.floor(index / 4);
    const tileColumn = emptyIndex % 4;
    const clickedColumn = index % 4;

    if (
      (tileRow === clickedRow && Math.abs(tileColumn - clickedColumn) === 1) ||
      (tileColumn === clickedColumn && Math.abs(tileRow - clickedRow) === 1)
    ) {
      // Valid move, swap the tiles
      const newTiles = [...tiles];
      [newTiles[emptyIndex], newTiles[index]] = [
        newTiles[index],
        newTiles[emptyIndex]
      ];
      setTiles(newTiles);
      checkSolved();
    }
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          number={tile}
          onClick={() => handleClick(index)}
          empty={tile === 0}
        />
      ))}
      {puzzleSolved && <div className="message">You solved the puzzle!</div>}
    </div>
  );
};

export default Board;
