/*
 * @Date: 2022-06-29 10:53:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-29 15:48:45
 * @FilePath: \holdem-cal\src\compoents\Card.js
 */
import React from "react";
import Draggable from "react-draggable";

class Card extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rank : this.props.rank,
      suit : this.props.suit,
      isSelected: false,
    }
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
      <Draggable className="card">
        <div>
          <img 
            src={'./images/card-trans.png'} 
            alt={'card '+this.state.rank+this.state.suit}
            style={{
              background: `${'url(./images/poker-cards.jpg) '+ rank +' '+row}`,
              cursor:'grab'
            }}/>
        </div>
      </Draggable>
    )
  }
}

export default Card