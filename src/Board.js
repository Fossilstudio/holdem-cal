/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-05 11:01:37
 * @FilePath: \holdem-cal\src\Board.js
 */
import React from "react";
import CardBack from "./compoents/CardBack";

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      boardCards:[]
    }
    this.getCard = this.getCard.bind(this)
  }
  render(){
    // setup 5 board cards
    let boardCardsList = []
    for (let index = 0; index < 5; index++) {
      boardCardsList.push(<CardBack setRank={this.props.setRank} setSuit={this.props.setSuit} getCard={this.getCard} index={index} key={index}/>)
    }
    return(
      <div className="board">
        <div>Here is the board</div>
        <div className="boardBackground" style={{
          background: 'url(./images/board.png)'
        }}>
          <div className="dealer">
            {boardCardsList}
          </div>
        </div>
      </div>
    )
  }

  // get the card's info which put on the board
  getCard(rank,suit,key){
    let cards = [...this.state.boardCards]
    cards[key] = [rank,suit]
    this.setState(()=>({
      boardCards:cards
    }),()=>{console.log(this.state.boardCards)})
  }
}

export default Board