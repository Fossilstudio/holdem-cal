/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-11 13:10:32
 * @FilePath: \holdem-cal\src\Deck.js
 */
import React from "react";
import Card from "./compoents/Card";

class Deck extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      dragCardRank: 0,
      dragCardSuit: 'c',
      dragCardShow: 'none',
      dragCardPositionStyle:'relative'
    }
    this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this)
    this.getSelectedCardInfoTouch = this.getSelectedCardInfoTouch.bind(this)
  }
  render(){
    const cardSuits = ['c','d','h','s']
    let rowCards =[] // store cards 
    const allCards = []

    cardSuits.map((suit)=>{
      for (let index = 1; index < 14; index++) {
       rowCards.push(
        <Card key={index + ' ' + suit} 
              suit = {suit} 
              rank = {index} 
              display = {'block'}
              isCopy = {'original'}
              getSelectedCardInfo={this.getSelectedCardInfo}
              getSelectedCardInfoTouch = {this.getSelectedCardInfoTouch}
              draggable = {true}
        />)      
      }
      allCards.push(<div key={suit} className={suit + ' rowCards'}>{rowCards}</div>)
      rowCards=[]
      return null
    })

    let dragCardRow= '0px'
    switch (this.state.dragCardSuit) {
      case 'd': dragCardRow = '-64px'
        break;
      case 'h': dragCardRow = '-128px'
        break;
      case 's': dragCardRow = '-192px'
        break;
      default: 
        break;
    }
    const dragCardRank = (this.state.dragCardRank-1)*(-44)+'px' 

    return(
      <div className="Deck">
        {allCards}
        <div>
          <img
            src={'./images/card-trans.png'}
            alt={'dargCard'}
            style={{
              background: `${'url(./images/poker-cards.jpg)'+ dragCardRank +' '+ dragCardRow}`,
              display:this.state.dragCardShow,
            }}
          />
        </div>
      </div>
    )
  }

  getSelectedCardInfo(rank, suit, card){
    this.props.getSelectedCard(rank, suit, card)
  }

  getSelectedCardInfoTouch(rank, suit, card){
    this.props.getSelectedCard(rank, suit, card)
    this.setState(()=>({
      dragCardRank:rank,
      dragCardSuit:suit,
      dragCardShow:'block',
      dragCardPositionStyle:'absolute',
    }),()=>{console.log(this.state)})
  }
  
}

export default Deck