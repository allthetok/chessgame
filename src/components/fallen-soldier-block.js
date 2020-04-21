import React, { Component } from "react";
import "../index.css";
import Square from "./square.js";

export default class FallenSoldierBlock extends Component {
  constructor(props) {
    super(props);
  }
  renderSquare = (square, i, squareShade) => {
    return <Square piece={square} style={square.style} />;
  };
  render() {
    return (
      <div>
        <div className="board-row">
          {this.props.whiteFallenSoldiers.map((ws, index) =>
            this.renderSquare(ws, index)
          )}
        </div>
        <div className="board-row">
          {this.props.blackFallenSoldiers.map((bs, index) =>
            this.renderSquare(bs, index)
          )}
        </div>
      </div>
    );
  }
}
