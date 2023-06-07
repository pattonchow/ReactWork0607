import React from "react";
import classNames from "classnames";

const Tile = ({ number, onClick, empty }) => {
  const tileClasses = classNames("tile", { empty });

  return (
    <div className={tileClasses} onClick={onClick}>
      {number !== 0 && number}
    </div>
  );
};

export default Tile;
