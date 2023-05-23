import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: [
      'Avenir',
      'sans-serif'
    ].join(','),
  },
});

const TableBuilder = ({columns,data}) => {

  useEffect(() =>{

  },[])

  return (
  <ThemeProvider theme={theme}>
    <TableContainer component={Paper} sx={{marginTop: '30px'}}>
      <Table sx={{ maxWidth: '100%'}} aria-label="simple table">
        <TableHead sx={{border:'3px solid black'}}>
          <TableRow sx={{bgcolor:'dodgerblue'}}>
          {columns.map((col) => {
            return (
              <TableCell align='center' sx={{borderRight: '3px solid black'}}>{col}</TableCell>
            )
          })}
          </TableRow>
        </TableHead>
        <TableBody>
          {
            data && data.map((player) => {
              return (
              <TableRow
                key={player.name}
              >
                <TableCell component="th" align="center" scope="row" sx={{borderRight: '3px solid black',  borderLeft: '3px solid black'}}>
                  {player.name}
                </TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.minutes}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.points}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.assists}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsTotal}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsOffensive}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsDefensive}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.steals}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.blocks}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.turnovers}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.plusMinusPoints}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.fieldGoalsMade}-{player.statistics.fieldGoalsAttempted}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.freeThrowsMade}-{player.statistics.freeThrowsAttempted}</TableCell>
                <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.threePointersMade}-{player.statistics.threePointersAttempted}</TableCell>
              </TableRow>
              )
            })
          }
        </TableBody>
      </Table>  
    </TableContainer>
  </ThemeProvider>
  )
}

export default TableBuilder