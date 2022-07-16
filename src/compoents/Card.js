/*
 * @Date: 2022-06-29 10:53:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-15 16:26:46
 * @FilePath: \holdem-cal\src\compoents\Card.js
 */
import React from "react";
import {DragDropContainer} from "react-drag-drop-container"

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rank : this.props.rank,
      suit : this.props.suit,
      isSelected: false,
    }
    this.changeCardName = this.changeCardName.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
  }


  render(){
    
    let cardSize = 2
    let url = 'url(./images/poker-cards.jpg)'
    let tempRank = this.changeCardName(this.state.rank)
    if(this.props.screen.isMobile) {
      cardSize=1
      url = 'url(./images/poker-cards-mobile.jpg)'
    }
    const rank = (this.state.rank-1)*(-cardSize*22)+'px' 
    let row = '0px'
    switch (this.state.suit) {
      case 'd': row = -cardSize*32+'px'
        break;
      case 'h': row = -cardSize*64+'px'
        break;
      case 's': row = -cardSize*96+'px'
        break;
      default: 
        break;
    }
    return(
      <div id={this.props.rank+this.props.suit}
        style={{
          display:'inline-block',
          width:`${cardSize*22}px`,
          height:'100%',
        }}
      >
        <DragDropContainer
          targetKey = {'card'}
          dragData = {{rank:this.props.rank,suit:this.props.suit}}
          dragClone={this.props.dragClone || false}
          dragHandleClassName = 'grabber'
          onDragEnd={this.onDragEnd}
          onDragStart = {this.onDragStart}
        >
          <img
            className="grabber"
            id={tempRank+this.state.suit}
            src={'./images/card-trans.png'} 
            alt={'card '+tempRank+this.state.suit}
            style={{
              background: `${url+ rank +' '+row}`,
              width:`${cardSize*22}px`,
            }}/>
        </DragDropContainer>
      </div>
    )
  }

  changeCardName(rank) {
    if (rank===1) {
      return 'A'
    } else if (rank === 11) {
      return 'J'
    }else if (rank === 12) {
      return 'Q'
    }else if (rank === 13) {
      return 'K'
    }else if (rank === 10) {
      return 'T'
    } else return rank
  }

  onDragEnd(dragData,currentTarget,x,y) {
    const targetName = currentTarget.className
    if(targetName!=='dropPlace') {
      const $card = document.getElementById(this.state.rank+this.state.suit)
      const $ghost = $card.querySelector('.ddcontainerghost')
      $ghost.style.display = 'none'
    }
  }

  onDragStart(){
    const $card = document.getElementById(this.state.rank+this.state.suit)
    const $ghost = $card.querySelector('.ddcontainerghost')
    $ghost.style.display = 'block'
}
}

export default Card