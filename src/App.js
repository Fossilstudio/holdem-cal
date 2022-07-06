/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-06 14:06:19
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
      isSelected: false,
      winRate : 0,
      tieRate : 0,
      tempCard:null
    }
    this.getSelectedCard = this.getSelectedCard.bind(this)
    this.getAllHandCards = this.getAllHandCards.bind(this)
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
          <Score winRate={this.state.winRate} tieRate={this.state.tieRate}/>
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
    console.log(board,computer,player)
  }

}

export default App;
