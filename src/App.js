/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-07 11:13:47
 * @FilePath: \holdem-cal\src\App.js
 */
import React from 'react';
import './App.css';
import Board from './Board';
import Deck from './Deck';
import Rank from './Rank';
import Score from './Score';

class App extends React.Component{ 
  constructor(props){
    super(props)
    this.state= {
      selectedCardRank:'',
      selectedCardSuit:'',
      tempHand:null,
      tempCom:null,
      tempBoard:[],
      isSelected: false,
      playerWinRate : 0,
      playerTieRate : 0,
      computerWinRate: 0,
      computerTieRate:0,
      tempCard:null,
      calculatorLock:false,
    }
    this.getSelectedCard = this.getSelectedCard.bind(this)
    this.getAllHandCards = this.getAllHandCards.bind(this)
    this.calculator = this.calculator.bind(this)
  }
  
  render(){
    return (
      <div className="App">
        <div className='LeftArea'>
          <Board setRank={this.state.selectedCardRank} 
                 setSuit={this.state.selectedCardSuit}
                 isSelected = {this.cardSeclected} 
                 getAllHandCards={this.getAllHandCards} 
                 tempCard={this.state.tempCard}/>
          <Deck getSelectedCard={this.getSelectedCard}/>
        </div>
        <div>
          <Score playerWinRate={this.state.playerWinRate}
                 playerTieRate={this.state.playerTieRate}
                 computerWinRate={this.state.computerWinRate}
                 computerTieRate={this.state.computerTieRate}
          />
          <Rank />
        </div>
      </div>
    )
  }

  getSelectedCard(rank, suit, card){
    this.setState({
      selectedCardRank:rank,
      selectedCardSuit:suit,
      tempCard: card,
    })
  }

  getAllHandCards(board,computer,player) {
    const boardChage = (board.toString() !== this.state.tempBoard.toString())
    if(computer.length === 2 && player.length ===2) {
      if(player !== this.state.tempHand || computer !== this.state.tempCom || boardChage){
        this.calculator(board.toString(),computer.toString(),player.toString())
        this.setState(()=>({
          tempHand:player,
          tempCom:computer,
          tempBoard:board,
        }))       
      }
    }
  }

  calculator(board,computer,player){
    const Calculator = require('poker-odds-machine').Calculator
    const input = {
      hands:[player,computer],
      numPlayer:2,
      board: board,
      boardSize:5,
      handSize:2,
      numDecks:1,
      returnHandStats:true,
      returnTieHandStats:true,
      iterations:1000000,

    }
    const c = new Calculator(input)
    const s = c.simulate()
    const props = Object.keys(s)
    const computerResult = props[1]
    const playerResult = props[0]
    console.log(s[computerResult])
    console.log(s[playerResult])
    const playerWinPercent = s[playerResult].winPercent
    const computerWinPercent = s[computerResult].winPercent
    const playerTiePercent = s[playerResult].tiePercent
    const computerTiePercent = s[computerResult].tiePercent

    this.setState(()=>({
      playerWinRate: Math.round(playerWinPercent),
      playerTieRate: Math.round(playerTiePercent),
      computerWinRate: Math.round(computerWinPercent),
      computerTieRate: Math.round(computerTiePercent),
    }))
  }

}

export default App;
