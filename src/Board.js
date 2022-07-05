/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-05 14:26:24
 * @FilePath: \holdem-cal\src\Board.js
 */
import React from "react";
import CardBack from "./compoents/CardBack";

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      boardCards:[],
      computerCards:[],
      playerCards:[],
    }
    this.boardGetCardInfo = this.boardGetCardInfo.bind(this)
    this.computerGetCardInfo = this.computerGetCardInfo.bind(this)
    this.playerGetCardInfo = this.playerGetCardInfo.bind(this)
  }
  componentDidUpdate(){
    this.props.getAllHandCards(this.state)
  }
  render(){
    // setup 5 board cards
    let boardCardsList = []
    for (let index = 0; index < 5; index++) {
      boardCardsList.push(
        <CardBack setRank={this.props.setRank} 
                  setSuit={this.props.setSuit} 
                  boardGetCardInfo={this.boardGetCardInfo} 
                  computerGetCardInfo = {this.computerGetCardInfo}
                  playerGetCardInfo = {this.playerGetCardInfo}
                  name = {'board'}
                  index={index} key={'board'+index}/>
      )
    }
    return(
      <div className="board">
        <div>Here is the board</div>
        <div className="boardBackground" style={{
          background: 'url(./images/board.png)'
        }}>
          <div className="computer">
            <CardBack setRank={this.props.setRank} 
                      setSuit={this.props.setSuit} 
                      boardGetCardInfo={this.boardGetCardInfo} 
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'computer'}
                      index={0} key={'computer'+0}/>
            <CardBack setRank={this.props.setRank} 
                      setSuit={this.props.setSuit} 
                      boardGetCardInfo={this.boardGetCardInfo}
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'computer'}
                      index={1} key={'computer'+1}/>
          </div>
          <div className="dealer">
            {boardCardsList}
          </div>
          <div className="player">
            <CardBack setRank={this.props.setRank} 
                      setSuit={this.props.setSuit} 
                      boardGetCardInfo={this.boardGetCardInfo} 
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'player'}
                      index={0} key={'player'+0}/>
            <CardBack setRank={this.props.setRank} 
                      setSuit={this.props.setSuit} 
                      boardGetCardInfo={this.boardGetCardInfo}
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'player'}
                      index={1} key={'player'+1}/>
          </div>
        </div>
      </div>
    )
  }

  // get the card's info which put on the board
  boardGetCardInfo(rank,suit,index){
    let cards = [...this.state.boardCards]
    cards[index] = [rank,suit]
    this.setState(()=>({
      boardCards:cards
    }))
  }

  computerGetCardInfo(rank,suit,index){
    let cards = [...this.state.computerCards]
    cards[index] = [rank,suit]
    this.setState(()=>({
      computerCards:cards
    }))
  }

  playerGetCardInfo(rank,suit,index){
    let cards = [...this.state.playerCards]
    cards[index] = [rank,suit]
    this.setState(()=>({
      playerCards:cards
    }))
  }
}

export default Board