/*
 * @Date: 2022-06-29 13:57:46
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-29 15:08:16
 * @FilePath: \holdem-cal\src\compoents\CardBack.js
 */
import React from "react";

class CardBack extends React.Component{
  render(){
    return(
      <div className="card">
        <img
          src={'./images/card-trans.png'} 
          alt={'card back'}
          style = {{
            background: 'url(./images/poker-cards.jpg) -88px -256px'
          }}
        />
      </div>
    )
  }
}

export default CardBack