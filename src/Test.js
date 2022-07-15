/*
 * @Date: 2022-06-30 10:04:27
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-14 14:41:05
 * @FilePath: \holdem-cal\src\Test.js
 */
import React from "react";
import Card from "./compoents/Card";
import {DragDropContainer, DropTarget} from "react-drag-drop-container"

class Test extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      pickedRank:'-88px',
      pickedSuit:'-256px'
    }
    this.handleDrop = this.handleDrop.bind(this)
  }

  render(){
    const state = this.state
    const deck = []
    for(let i=1; i<14; i++) {
      deck.push(
        <Card key={'h'+i} suit={'h'} rank={i} targetKey={'card'} dragClone={true}/>
      )
    }
    return(
      <div>
        <div className="deck">
          {deck}
        </div>
        <DropTarget
          targetKey = {'card'}
          onHit={this.handleDrop}
          dropData = {{name:'target'}}
        >
          <div className="dropPlace" style={{
            width:'44px',
            height: '64px',
            border: 'none',
            background:`${'url(./images/poker-cards.jpg )'+state.pickedRank+' '+state.pickedSuit}`,
          }}>
            
          </div>
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
    default: return '0px'
    }

    e.containerElem.style.visibility="hidden";
    e.containerElem.picked = true
    this.setState(()=>({
      pickedRank: rank,
      pickedSuit: suit
    }))
  }
}

export default Test