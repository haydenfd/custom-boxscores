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
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: '100%'}} aria-label="simple table">
        <TableHead>
          <TableRow>
          {columns.map((col) => {
            return (
              <TableCell align='center'>{col}</TableCell>
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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" align="center" scope="row">
                  {player.name}
                </TableCell>
                <TableCell align="center">{player.statistics.points}</TableCell>
                <TableCell align="center">{player.statistics.minutes}</TableCell>
                <TableCell align="center">{player.statistics.assists}</TableCell>
                <TableCell align="center">{player.statistics.reboundsTotal}</TableCell>
                <TableCell align="center">{player.statistics.steals}</TableCell>
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