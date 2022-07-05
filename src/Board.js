/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-30 16:44:17
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
            <CardBack setRank={this.props.setRank} setSuit={this.props.setSuit}/>
            <CardBack setRank={this.props.setRank} setSuit={this.props.setSuit}/>
            <CardBack setRank={this.props.setRank} setSuit={this.props.setSuit}/>
            <CardBack setRank={this.props.setRank} setSuit={this.props.setSuit}/>
            <CardBack setRank={this.props.setRank} setSuit={this.props.setSuit}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Board