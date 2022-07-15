/*
 * @Date: 2022-06-29 10:53:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-14 16:05:29
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
    let row = '0px'
    switch (this.state.suit) {
      case 'd': row = '-64px'
        break;
      case 'h': row = '-128px'
        break;
      case 's': row = '-192px'
        break;
      default: 
        break;
    }
    const rank = (this.state.rank-1)*(-44)+'px' 

    let tempRank = this.changeCardName(this.state.rank)
    return(
      <div id={this.props.rank+this.props.suit}
        style={{
          display:'inline-block',
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
              background: `${'url(./images/poker-cards.jpg)'+ rank +' '+row}`,
              cursor: 'grab',
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