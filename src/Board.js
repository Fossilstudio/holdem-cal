/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-16 01:09:25
 * @FilePath: \holdem-cal\src\Board.js
 */
import { Typography } from "@mui/material";
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
    this.changeCardName = this.changeCardName.bind(this)
  }
  componentDidUpdate(){
    const boardCards = this.state.boardCards.filter(n=>n)
    this.props.getAllHandCards(boardCards,this.state.computerCards,this.state.playerCards)
  }
  render(){
    // setup 5 board cards
    let boardCardsList = []
    for (let index = 0; index < 5; index++) {
      boardCardsList.push(
        <CardBack boardGetCardInfo={this.boardGetCardInfo} 
                  computerGetCardInfo = {this.computerGetCardInfo}
                  playerGetCardInfo = {this.playerGetCardInfo}
                  name = {'board'}
                  index={index} key={'board'+index}
                  tempCard={this.props.tempCard}
                  changeCardName={this.changeCardName}
                  screen = {this.props.screen}
                  />
      )
    }

    let boardSize = {width:360,height:160}
    
    if (!this.props.screen.isMobile) {
      boardSize.width = 760
      boardSize.height = 340
    }

    return(
      <div className="board">
        <div className="boardBackground" style={{
          background: 'url(./images/board.png)',
          backgroundSize: 'cover',
          backgroundPosition:'center center',
          backgroundRepeat:'no-repeat',
          minWidth:boardSize.width+'px',
          minHeight:boardSize.height+'px',
        }}>
          <div className="computer">
          <Typography 
            variant= {this.props.screen.isMobile?'body2':'h7'} 
            sx={{color:'#398CEC', mb:'10px'}}>COMPUTER</Typography>
            <div className="computerHands">
            <CardBack boardGetCardInfo={this.boardGetCardInfo} 
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'computer'}
                      index={0} key={'computer'+0}
                      tempCard={this.props.tempCard}
                      changeCardName={this.changeCardName}
                      screen = {this.props.screen}
                      />
            <CardBack boardGetCardInfo={this.boardGetCardInfo}
                      computerGetCardInfo = {this.computerGetCardInfo}
                      playerGetCardInfo = {this.playerGetCardInfo}
                      name = {'computer'}
                      index={1} key={'computer'+1}
                      tempCard={this.props.tempCard}
                      changeCardName={this.changeCardName}
                      screen = {this.props.screen}
                      />
            </div>
          </div>
          <div className="dealer">
            {boardCardsList}
          </div>
          <div className="player">
            <div className="playerHands">
              <CardBack boardGetCardInfo={this.boardGetCardInfo} 
                        computerGetCardInfo = {this.computerGetCardInfo}
                        playerGetCardInfo = {this.playerGetCardInfo}
                        name = {'player'}
                        index={0} key={'player'+0}
                        tempCard={this.props.tempCard}
                        changeCardName={this.changeCardName}
                        screen = {this.props.screen}
                        />
              <CardBack boardGetCardInfo={this.boardGetCardInfo}
                        computerGetCardInfo = {this.computerGetCardInfo}
                        playerGetCardInfo = {this.playerGetCardInfo}
                        name = {'player'}
                        index={1} key={'player'+1}
                        tempCard={this.props.tempCard}
                        changeCardName={this.changeCardName}
                        screen = {this.props.screen}
                        />
            </div>
            <Typography
              variant= {this.props.screen.isMobile?'body2':'h7'} 
              sx={{color:'#fff'}}>PLAYER</Typography>
          </div>
        </div>
      </div>
    )
  }

  // get the card's info which put on the board
  boardGetCardInfo(rank,suit,index){
    let cards = [...this.state.boardCards]
    rank = this.changeCardName(rank)
    cards[index] = rank+suit
    this.setState(()=>({
      boardCards:cards
    }),()=>{console.log(this.state.boardCards)})
  }

  computerGetCardInfo(rank,suit,index){
    let cards = [...this.state.computerCards]
    rank = this.changeCardName(rank)
    cards[index] = rank+suit
    this.setState(()=>({
      computerCards:cards
    }))
  }

  playerGetCardInfo(rank,suit,index){
    let cards = [...this.state.playerCards]
    rank = this.changeCardName(rank)
    cards[index] = rank+suit
    this.setState(()=>({
      playerCards:cards
    }))
  }
  
  changeCardName(rank) {
    if (rank===1) {
      return 'A'
    } else if (rank === 11) {
      return 'J'
    }else if (rank === 12) {
      return 'Q'
    }else if (rank === 13) {
      return 'K'
    }else if (rank === 10) {
      return 'T'
    } else return rank
  }
}

export default Board