/*
 * @Date: 2022-06-29 13:57:46
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-16 00:56:03
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

  componentDidMount(){
    if(this.props.screen.isMobile) {
      this.setState(()=>({
        pickedRank: '-44px',
        pickedSuit: '-128px',
      }))
    }
  }

  render(){
    const state = this.state
    let cardSize = 2
    let margin = '12px'
    let url = 'url(./images/poker-cards.jpg)'
    if(this.props.screen.isMobile) {
      cardSize=1
      url = 'url(./images/poker-cards-mobile.jpg)'
      margin = '0 5px'
    }
    return(
      <div className="boardCard" style={{
        width:cardSize*22+'px',
        margin:margin
      }}>
        <DropTarget
          targetKey = {'card'}
          onHit={this.handleDrop}
          dropData = {{name:'target'}}
        >
          <img
            src={'./images/card-trans.png'} 
            alt={'card back'}
            style = {{
              background: `${url+state.pickedRank+' '+state.pickedSuit}`,
              width: cardSize*22+'px',
              height: 'auto',
            }}
          />
        </DropTarget>
      </div>
    )
  }

  handleDrop(e) {
    e.stopPropagation()
    const cardSize = (this.props.screen.isMobile)? 1:2
    const rank = (e.dragData.rank-1)*(-cardSize*22)+'px'
    let suit = '0px'
    
    switch (e.dragData.suit) {
      case 'd': suit = -cardSize*32+'px'
        break;
      case 'h': suit = -cardSize*64+'px'
        break;
      case 's': suit = -cardSize*96+'px'
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