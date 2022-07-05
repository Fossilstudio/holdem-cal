/*
 * @Date: 2022-06-30 10:04:27
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-30 15:56:17
 * @FilePath: \holdem-cal\src\Test.js
 */
import React from "react";

class Test extends React.Component{
  constructor(props){
    super(props)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
  }

  render(){
    return(
      <div>
        <div id='div1'
          // onDrop={this.onDrop}
          // onDragOver = {this.onDragOver}
          style={{
            width:'44px',
            height:'64px',
            border:'1px solid black'
          }}
        />
        <br></br>
        <div id='div2'
          draggable={true}
          // onDragStart={this.onDragStart}
          style={{
            width:'100px',
            height:'50px',
            border:'1px solid red'
          }}
        />
        <br></br>
        <div className="card"
        id={'testCard'}
        draggable={true}
        style={{
          width:'44px',
          height:'64px',
          border:'1px solid red'
        }} 
      >
        <img
          draggable={false} 
          src={'./images/card-trans.png'} 
          alt={'card'}
          style={{
            background: 'url(./images/poker-cards.jpg) 44px 128px'
          }}/>
        </div>
      </div>
    )
  }

  onDragStart(e){
    e.dataTransfer.setData('text',e.target.id)
  }

  onDrop(e){
    e.preventDefault()
    const data = e.dataTransfer.getData('text')
    e.target.appendChild(document.getElementById(data))
  }

  onDragOver(e){
    e.preventDefault()
  }
}

export default Test