/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-16 01:12:43
 * @FilePath: \holdem-cal\src\Test.js
 */
import React, { Fragment, useState } from 'react';
import './App.css';
import Board from './Board';
import Deck from './Deck';
import Rank from './Rank';
import Score from './Score';
import { useMediaQuery } from 'react-responsive'

const App =() => {
  const [selectedCardRank, setSelectedCardRank] = useState('')
  const [selectedCardSuit, setSelectedCardSuit] = useState('')
  const [tempHand, setTempHand] = useState(null)
  const [tempCom, setTempCom] = useState(null)
  const [tempBoard, setTempBoard] = useState([])
  const [isSelected, setIsSelected] = useState(false)
  const [playerWinRate,setPlayerWinRate] = useState(0)
  const [playerTieRate,setPlayerTieRate] = useState(0)
  const [computerWinRate,setComputerWinRate] = useState(0)
  const [computerTieRate,setComputerTieRate] = useState(0)
  const [playerResult, setPlayerResult] = useState({
    flush: {count:0, percent:0},
        fullHouse: {count:0, percent:0},
        highCard: {count:0, percent:0},
        pair: {count:0, percent:0},
        quads: {count:0, percent:0},
        straight: {count:0, percent:0},
        straightFlush: {count:0, percent:0},
        trips: {count:0, percent:0},
        twoPair: {count:0, percent:0},
  })
  const [computerResult, setComputerResult] = useState({
    flush: {count:0, percent:0},
        fullHouse: {count:0, percent:0},
        highCard: {count:0, percent:0},
        pair: {count:0, percent:0},
        quads: {count:0, percent:0},
        straight: {count:0, percent:0},
        straightFlush: {count:0, percent:0},
        trips: {count:0, percent:0},
        twoPair: {count:0, percent:0},
  })

  const isDesktop= useMediaQuery({ query: '(min-width: 1224px)' })
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' })
  const screen = {isMobile,isTablet,isDesktop,isPortrait}

  let appFlexJustifyContent = (isDesktop)?'space-evenly':'center'
  return(
    <Fragment>
      <div className="App" style={{
        display:'flex',
        flexDirection:isPortrait?'column':'row',
        justifyContent:appFlexJustifyContent,
        textAlign:'center',
      }}>
        <div className='LeftArea'>
          <Board setRank={selectedCardRank} 
                setSuit={selectedCardSuit}
                isSelected = {isSelected} 
                getAllHandCards={getAllHandCards} 
                screen = {screen}
          />
          <Deck screen={screen}/>
        </div>
        <div className='ScoreArea'>
          <Score playerWinRate={playerWinRate}
                playerTieRate={playerTieRate}
                computerWinRate={computerWinRate}
                computerTieRate={computerTieRate}
                screen= {screen}
          />
          <Rank playerResult={playerResult}
                computerResult={computerResult}
                screen= {screen}
          />
        </div>
      </div>
      <div className='copyright'>
        <p>Author: Ke Ren</p>
        <p>Github: 
          <a href='https://github.com/Fossilstudio/holdem-cal' 
             target={'_blank'} rel="noreferrer">https://github.com/Fossilstudio/holdem-cal
          </a>
        </p>
        <p><a href='https://www.kyleren.com'>www.kyleren.com</a></p>
      </div>
    </Fragment>
  )

  function getAllHandCards(board,computer,player) {
    const boardChage = (board.toString() !== tempBoard.toString())
    if(computer.length === 2 && player.length ===2 && (typeof player[0] !== 'undefined') && (typeof computer[0]!=='undefined')) {
      if(player !== tempHand || computer !== tempCom || boardChage){
        console.log((player[0] !== "undefined"))
        console.log('cal:' + board.toString()+' '+computer.toString()+' '+player.toString() )
        calculator(board.toString(),computer.toString(),player.toString())

        setTempHand(player)
        setTempBoard(board)
        setTempCom(computer)
      }
    }
  }

  function calculator(board,computer,player){
    const Calculator = require('poker-odds-machine').Calculator
    const input = {
      hands:[player,computer],
      numPlayer:2,
      board: board,
      boardSize:5,
      handSize:2,
      numDecks:1,
      returnHandStats:true,
      returnTieHandStats:true,
      iterations:10000,

    }
    const c = new Calculator(input)
    const s = c.simulate()
    const props = Object.keys(s)
    const cResult = props[1]
    const pResult = props[0]
    const playerWinPercent = s[pResult].winPercent
    const computerWinPercent = s[cResult].winPercent
    const playerTiePercent = s[pResult].tiePercent
    const computerTiePercent = s[cResult].tiePercent

    setPlayerWinRate(Math.round(playerWinPercent))
    setPlayerTieRate(Math.round(playerTiePercent))
    setComputerWinRate(Math.round(computerWinPercent))
    setComputerTieRate(Math.round(computerTiePercent))
    setPlayerResult(s[pResult].handStats)
    setComputerResult(s[cResult].handStats)
  }

}

export default App;
