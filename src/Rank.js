/*
 * @Date: 2022-06-29 10:33:49
 * @LastEditors: Ke Ren
 * @LastEditTime: 2022-07-07 15:50:21
 * @FilePath: \holdem-cal\src\Rank.js
 */
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class Rank extends React.Component{
  constructor(props){
    super(props)
    this.createData = this.createData.bind(this)
  }

  createData(name, player, computer){
    return {name, player,computer}
  }

  render(){
    const rankList = [
      this.createData('Straight Flush', this.props.playerResult.straightFlush, this.props.computerResult.straightFlush),
      this.createData('Quads', this.props.playerResult.quads, this.props.computerResult.quads),
      this.createData('Full House', this.props.playerResult.fullHouse, this.props.computerResult.fullHouse),
      this.createData('Flush', this.props.playerResult.flush, this.props.computerResult.flush),
      this.createData('Straight', this.props.playerResult.straight, this.props.computerResult.straight),
      this.createData('Trips', this.props.playerResult.trips, this.props.computerResult.trips),
      this.createData('Tow Pairs', this.props.playerResult.twoPair, this.props.computerResult.twoPair),
      this.createData('Pair', this.props.playerResult.pair, this.props.computerResult.pair),
      this.createData('High Card', this.props.playerResult.highCard, this.props.computerResult.highCard),
    ]
    console.log(this.props.playerResult.flush)
    return(
      <TableContainer>
        <Table aria-label="rank table">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Player</TableCell>
              <TableCell>Computer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rankList.map((row)=>(
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.player.percent}%</TableCell>
                <TableCell>{row.computer.percent}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }
}

export default Rank