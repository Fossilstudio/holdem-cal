/*
 * @Date: 2022-06-29 13:57:46
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-05 10:49:09
 * @FilePath: \holdem-cal\src\compoents\CardBack.js
 */
import React from "react";

class CardBack extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rank: '-88px',
      suit: '-256px'
    }
    this.onDragOver = this.onDragOver.bind(this)
    this.onDrop = this.onDrop.bind(this)
  }
  render(){
    return(
      <div className="card"
        onDragOver={this.onDragOver}
        onDrop = {this.onDrop}
      >
        <img
          src={'./images/card-trans.png'} 
          alt={'card back'}
          style = {{
            background: `${'url(./images/poker-cards.jpg )'+this.state.rank+' '+this.state.suit}`
          }}
        />
      </div>
    )
  }

  onDragOver(e){
    e.preventDefault()
  }

  onDrop(e){
    e.preventDefault()
    let rank = -(this.props.setRank-1)*44+'px'
    let row = '0px'
    switch (this.props.setSuit) {
      case 'diamond': row = '-64px'
        break;
      case 'heart': row = '-128px'
        break;
      case 'spade': row = '-192px'
        break;
      default: 
        break;
    }
    this.setState(function () {
      return{
        rank:rank,
        suit:row
      }
    })
    this.props.getCard(this.props.setRank,this.props.setSuit,this.props.index)
  }
}

export default CardBack