/*
 * @Date: 2022-06-29 10:18:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-06-29 10:50:41
 * @FilePath: \holdem-cal\src\App.js
 */
import './App.css';
import Board from './Board';
import Deck from './Deck';
import Rank from './Rank';
import Score from './Score';

function App() {
  return (
    <div className="App">
      <div className='LeftArea'>
        <Board />
        <Deck />
      </div>
      <div>
        <Score />
        <Rank />
      </div>
    </div>
  );
}

export default App;
