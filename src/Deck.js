/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-14 16:28:01
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
              dragClone = {true} 
              display = {'block'}
              isCopy = {'original'}
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
}

export default Deck