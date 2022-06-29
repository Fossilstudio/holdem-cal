/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-29 14:10:47
 * @FilePath: \holdem-cal\src\Board.js
 */
import React from "react";
import CardBack from "./compoents/CardBack";

class Board extends React.Component{
  render(){
    return(
      <div className="board">
        <div>Here is the board</div>
        <div className="boardBackground" style={{
          background: 'url(./images/board.png)'
        }}>
          <div className="dealer">
            <CardBack />
            <CardBack />
            <CardBack />
            <CardBack />
            <CardBack />
          </div>
        </div>
      </div>
    )
  }
}

export default Board