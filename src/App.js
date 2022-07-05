/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-05 14:27:35
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
      winRate : 0,
      tieRate : 0,
    }
    this.getSelectedCard = this.getSelectedCard.bind(this)
    this.getAllHandCards = this.getAllHandCards.bind(this)
  }
  render(){
    return (
      <div className="App">
        <div className='LeftArea'>
          <Board setRank={this.state.selectedCardRank} setSuit={this.state.selectedCardSuit} getAllHandCards={this.getAllHandCards}/>
          <Deck getSelectedCard={this.getSelectedCard}/>
        </div>
        <div>
          <Score winRate={this.state.winRate} tieRate={this.state.tieRate}/>
          <Rank />
        </div>
      </div>
    )
  }

  getSelectedCard(rank, suit){
    this.setState({
      selectedCardRank:rank,
      selectedCardSuit:suit,
    })
  }

  getAllHandCards(state) {
    const board = state.boardCards
    const computer = state.computer
    const player = state.player
    console.log(board,computer,player)
  }

}

export default App;
