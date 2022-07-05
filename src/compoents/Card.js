/*
 * @Date: 2022-06-29 10:53:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-30 16:53:35
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
  }

  render(){
    let row = '0px'
    switch (this.state.suit) {
      case 'diamond': row = '-64px'
        break;
      case 'heart': row = '-128px'
        break;
      case 'spade': row = '-192px'
        break;
      default: 
        break;
    }
    const rank = (this.state.rank-1)*(-44)+'px' 
    return(
      <div className="card"
        id={this.state.rank+this.state.suit}
        draggable={true} 
        onDragStart = {this.onDragStart}
      >
        <img
          draggable={false} 
          src={'./images/card-trans.png'} 
          alt={'card '+this.state.rank+this.state.suit}
          style={{
            background: `${'url(./images/poker-cards.jpg) '+ rank +' '+row}`,
            cursor: 'grab',
          }}/>
      </div>
    )
  }

  onDragStart(e){
    e.dataTransfer.setData("text",e.target.id)
    this.props.getSelectedCardInfo(this.state.rank, this.state.suit)
  }

}

export default Card