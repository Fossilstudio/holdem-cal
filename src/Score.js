/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-05 14:19:15
 * @FilePath: \holdem-cal\src\Score.js
 */
import React from "react";

class Score extends React.Component{
  render(){
    return(
      <div className="Score">
        <div className="player">Player</div>
        <div className="computer">Computer</div>
        <div className="winRateP">{this.props.winRate}%</div>
        <div className="win">Win</div>
        <div className="winRateC">{100-this.props.winRate}%</div>
        <div className="tieRateP">{this.props.tieRate}%</div>
        <div className="tie">Tie</div>
        <div className="tieRateC">{100-this.props.tieRate}%</div>
      </div>
    )
  }
}

export default Score