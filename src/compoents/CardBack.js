/*
 * @Date: 2022-06-29 13:57:46
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-07 10:28:04
 * @FilePath: \holdem-cal\src\compoents\CardBack.js
 */
import React from "react";

class CardBack extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      rank: '-88px',
      suit: '-256px',
      previewCardId:null
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
    let tempRank = this.props.changeCardName(this.props.setRank)

    const previewCard = document.getElementById(this.state.previewCardId)
    if(previewCard!==null){
      previewCard.style.background= `${'url(./images/poker-cards.jpg) '+this.state.rank+' '+this.state.suit}`
      previewCard.style.cursor= 'grab'
      previewCard.draggable = true
    }

    switch (this.props.setSuit) {
      case 'd': row = '-64px'
        break;
      case 'h': row = '-128px'
        break;
      case 's': row = '-192px'
        break;
      default: 
        break;
    }
    this.setState( ()=> {
      return{
        rank:rank,
        suit:row,
        previewCardId:tempRank+this.props.setSuit
      }
    })
    if (this.props.name === 'board') {
      this.props.boardGetCardInfo(this.props.setRank,this.props.setSuit,this.props.index)
    } else if (this.props.name === 'computer') {
      this.props.computerGetCardInfo(this.props.setRank,this.props.setSuit,this.props.index)
    } else if (this.props.name === 'player') {
      this.props.playerGetCardInfo(this.props.setRank,this.props.setSuit,this.props.index)
    } else { console.log('error')}

    this.props.tempCard.draggable = false
    const selectedCardImg = document.getElementById(tempRank+this.props.setSuit)
    selectedCardImg.style.background= `${'url(./images/poker-cards-disable.jpg) -88px -256px'}`
    selectedCardImg.style.cursor = 'default'


  }
}

export default CardBack