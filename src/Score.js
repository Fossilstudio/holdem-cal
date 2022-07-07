/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-06 23:30:16
 * @FilePath: \holdem-cal\src\Score.js
 */
import React from "react";

class Score extends React.Component{
  render(){
    return(
      <div className="Score">
        <div className="player">Player</div>
        <div className="computer">Computer</div>
        <div className="winRateP">{this.props.playerWinRate}%</div>
        <div className="win">Win</div>
        <div className="winRateC">{this.props.computerWinRate}%</div>
        <div className="tieRateP">{this.props.playerTieRate}%</div>
        <div className="tie">Tie</div>
        <div className="tieRateC">{this.props.computerTieRate}%</div>
      </div>
    )
  }
}

export default Score