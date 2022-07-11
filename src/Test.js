/*
 * @Date: 2022-06-30 10:04:27
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-11 10:00:30
 * @FilePath: \holdem-cal\src\Test.js
 */
import React from "react";
import Card from "./compoents/Card";

class Test extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      rank:1,
      suit:'d'
    }
    this.getSelectedCardInfoTouch = this.getSelectedCardInfoTouch.bind(this)
  }

  render(){
    return(
      <div>
        <Card suit = {this.state.suit} 
          rank = {this.state.rank} 
          display = {'block'}
          isCopy = {'original'}
          getSelectedCardInfo={this.getSelectedCardInfo}
          getSelectedCardInfoTouch = {this.getSelectedCardInfoTouch}
          draggable = {true}
        />
      </div>
    )
  }

  getSelectedCardInfoTouch(){
    this.setState(preState=>{
      return{
        ...preState,
        rank:preState.rank+1
      }
    },console.log(this.state.rank))
  }
}

export default Test