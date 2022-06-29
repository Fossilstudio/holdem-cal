/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-29 15:06:48
 * @FilePath: \holdem-cal\src\Deck.js
 */
import React from "react";
import Card from "./compoents/Card";

class Deck extends React.Component{
  render(){
    const cardSuits = ['club','diamond','heart','spade']
    let rowCards =[] // store cards 
    const allCards = []

    cardSuits.map((suit)=>{
      for (let index = 1; index < 14; index++) {
       rowCards.push(<Card key={index + ' ' + suit} suit = {suit} rank = {index}/>)      
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