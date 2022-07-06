/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-06 13:34:59
 * @FilePath: \holdem-cal\src\Deck.js
 */
import React from "react";
import Card from "./compoents/Card";

class Deck extends React.Component{
  constructor(props){
    super(props)
    this.getSelectedCardInfo = this.getSelectedCardInfo.bind(this)
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
              getSelectedCardInfo={this.getSelectedCardInfo}
        />)      
      }
      allCards.push(<div key={suit} className={suit + ' rowCards'}>{rowCards}</div>)
      rowCards=[]
      return null
    })

    return(
      <div className="Deck">
        {allCards}
      </div>
    )
  }

  getSelectedCardInfo(rank, suit, isSelected, card){
    this.props.getSelectedCard(rank, suit, isSelected, card)
  }
}

export default Deck