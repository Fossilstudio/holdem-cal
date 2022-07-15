/*
 * @Date: 2022-06-29 13:57:46
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-15 09:35:18
 * @FilePath: \holdem-cal\src\compoents\CardBack.js
 */
import React from "react";
import {DropTarget} from "react-drag-drop-container"

class CardBack extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      pickedRank: '-88px',
      pickedSuit: '-256px',
    }
    this.handleDrop = this.handleDrop.bind(this)
  }
  render(){
    const state = this.state
    return(
      <div className="boardCard">
        <DropTarget
          targetKey = {'card'}
          onHit={this.handleDrop}
          dropData = {{name:'target'}}
        >
          <img
            src={'./images/card-trans.png'} 
            alt={'card back'}
            style = {{
              background: `${'url(./images/poker-cards.jpg )'+state.pickedRank+' '+state.pickedSuit}`
            }}
          />
        </DropTarget>
      </div>
    )
  }

  handleDrop(e) {
    e.stopPropagation()
    const rank = (e.dragData.rank-1)*(-44)+'px'
    let suit = '0px'

    
    switch (e.dragData.suit) {
      case 'd': suit = '-64px'
      break;
      case 'h': suit = '-128px'
      break;
      case 's': suit  ='-192px'
      break;
      default: suit = '0px'
    }
    e.containerElem.style.visibility="hidden";
    e.containerElem.picked = true
    
    this.setState(()=>({
      pickedRank:rank,
      pickedSuit:suit
    }))

    if (this.props.name === 'board') {
      this.props.boardGetCardInfo(e.dragData.rank,e.dragData.suit,this.props.index)
    } else if (this.props.name === 'computer') {
      this.props.computerGetCardInfo(e.dragData.rank,e.dragData.suit,this.props.index)
    } else if (this.props.name === 'player') {
      this.props.playerGetCardInfo(e.dragData.rank,e.dragData.suit,this.props.index)
    } else { console.log('error')}

  }
}

export default CardBack