/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-15 15:19:35
 * @FilePath: \holdem-cal\src\App.js
 */
import React, { Fragment } from 'react';
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
      playerResult:{
        flush: {count:0, percent:0},
        fullHouse: {count:0, percent:0},
        highCard: {count:0, percent:0},
        pair: {count:0, percent:0},
        quads: {count:0, percent:0},
        straight: {count:0, percent:0},
        straightFlush: {count:0, percent:0},
        trips: {count:0, percent:0},
        twoPair: {count:0, percent:0},
      },
      computerResult:{
        flush: {count:0, percent:0},
        fullHouse: {count:0, percent:0},
        highCard: {count:0, percent:0},
        pair: {count:0, percent:0},
        quads: {count:0, percent:0},
        straight: {count:0, percent:0},
        straightFlush: {count:0, percent:0},
        trips: {count:0, percent:0},
        twoPair: {count:0, percent:0},
      },
      tempCard:null,
      calculatorLock:false,
    }
    this.getAllHandCards = this.getAllHandCards.bind(this)
    this.calculator = this.calculator.bind(this)
  }
  
  render(){ 
    return (
      <Fragment>
        <div className="App" style={{
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          textAlign:'center',
        }}>
          <div className='LeftArea'>
            <Board setRank={this.state.selectedCardRank} 
                  setSuit={this.state.selectedCardSuit}
                  isSelected = {this.cardSeclected} 
                  getAllHandCards={this.getAllHandCards} 
                  tempCard={this.state.tempCard}
                  cardSize = {'100%'}
            />
            <Deck />
          </div>
          <div className='ScoreArea'>
            <Score playerWinRate={this.state.playerWinRate}
                  playerTieRate={this.state.playerTieRate}
                  computerWinRate={this.state.computerWinRate}
                  computerTieRate={this.state.computerTieRate}
            />
            <Rank playerResult={this.state.playerResult}
                  computerResult={this.state.computerResult}
            />
          </div>
        </div>
        <div className='copyright'>
          <p>Author: Ke Ren</p>
          <p>Github: <a href='https://github.com/Fossilstudio/holdem-cal' target={'_blank'} rel="noreferrer">https://github.com/Fossilstudio/holdem-cal</a></p>
        </div>
      </Fragment>
    )
  }

  getAllHandCards(board,computer,player) {
    const boardChage = (board.toString() !== this.state.tempBoard.toString())
    if(computer.length === 2 && player.length ===2 && (typeof player[0] !== 'undefined') && (typeof computer[0]!=='undefined')) {
      if(player !== this.state.tempHand || computer !== this.state.tempCom || boardChage){
        console.log((player[0] !== "undefined"))
        console.log('cal:' + board.toString()+' '+computer.toString()+' '+player.toString() )
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
      iterations:10000,

    }
    const c = new Calculator(input)
    const s = c.simulate()
    const props = Object.keys(s)
    const computerResult = props[1]
    const playerResult = props[0]
    const playerWinPercent = s[playerResult].winPercent
    const computerWinPercent = s[computerResult].winPercent
    const playerTiePercent = s[playerResult].tiePercent
    const computerTiePercent = s[computerResult].tiePercent

    this.setState(()=>({
      playerWinRate: Math.round(playerWinPercent),
      playerTieRate: Math.round(playerTiePercent),
      computerWinRate: Math.round(computerWinPercent),
      computerTieRate: Math.round(computerTiePercent),
      playerResult:s[playerResult].handStats,
      computerResult:s[computerResult].handStats,
    }))
  }

}

export default App;
