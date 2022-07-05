/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-30 16:58:30
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
      selectedCardSuit:''
    }
    this.getSelectedCard = this.getSelectedCard.bind(this)
  }
  render(){
    return (
      <div className="App">
        <div className='LeftArea'>
          <Board setRank={this.state.selectedCardRank} setSuit={this.state.selectedCardSuit}/>
          <Deck getSelectedCard={this.getSelectedCard}/>
        </div>
        <div>
          <Score />
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
}

export default App;
