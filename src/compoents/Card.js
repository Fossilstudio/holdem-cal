/*
 * @Date: 2022-06-29 10:53:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-06 22:58:40
 * @FilePath: \holdem-cal\src\compoents\Card.js
 */
import React from "react";

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rank : this.props.rank,
      suit : this.props.suit,
      isSelected: false,
    }
    this.onDragStart = this.onDragStart.bind(this)
    this.changeCardName = this.changeCardName.bind(this)
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
      <div className="card"
        draggable={true} 
        onDragStart = {this.onDragStart}
      >
        <img
        id={tempRank+this.state.suit}
        draggable={false} 
          src={'./images/card-trans.png'} 
          alt={'card '+this.state.rank+this.state.suit}
          style={{
            background: `${'url(./images/poker-cards.jpg)'+ rank +' '+row}`,
            cursor: 'grab',
          }}/>
      </div>
    )
  }

  onDragStart(e){
    e.dataTransfer.setData("text",e.target.id)
    this.props.getSelectedCardInfo(this.state.rank, this.state.suit, e.target)
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
}

export default Card