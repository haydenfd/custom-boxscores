import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useEffect } from 'react'
import { processRawMinutes } from '../../utils';
import {
  tableHeadCellTheme,
  themeProviderTheme,
  tableContainerTheme,
  tableTheme,
  tableHeadTheme,
  tablePlayerNamesTheme,
  tableStatsCellTheme,
} from './TableBuilder.styles'

const theme = createTheme(themeProviderTheme)

export const TableBuilder = ({columns,data, tricode}) => 
{

  return (
    <>
    {
      data && (
    <ThemeProvider theme={theme}>
      <TableContainer sx={tableContainerTheme}>
        <Table sx={tableTheme} aria-label="simple table">
          <TableHead sx={tableHeadTheme}>
            <TableRow sx={{bgcolor:`${tricode}`}}>
            {columns.map((col) => {
              return (
                <TableCell align='center' sx={tableHeadCellTheme}>{col}</TableCell>
              )
            })}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((player) => {
                return (
                <TableRow
                  key={player.name}
                >
                  <TableCell component="th" align="center" scope="row" sx={tablePlayerNamesTheme(tricode)}>
                    {player.name}
                  </TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{processRawMinutes(player.statistics.minutes)}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.points}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.assists}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.reboundsTotal}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.reboundsOffensive}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.reboundsDefensive}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.steals}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.blocks}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.turnovers}</TableCell>
                  <TableCell align="center" sx={tableStatsCellTheme(tricode)}>{player.statistics.plusMinusPoints}</TableCell>
                  {/* <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.fieldGoalsMade}-{player.statistics.fieldGoalsAttempted}</TableCell>
                  <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.freeThrowsMade}-{player.statistics.freeThrowsAttempted}</TableCell>
                  <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.threePointersMade}-{player.statistics.threePointersAttempted}</TableCell> */}
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
    </>
  // <ThemeProvider theme={theme}>
  //   <TableContainer sx={tableContainerTheme}>
  //     <Table sx={tableTheme} aria-label="simple table">
  //       <TableHead sx={tableHeadTheme}>
  //         <TableRow sx={{bgcolor:`${tricode}`}}>
  //         {columns.map((col) => {
  //           return (
  //             <TableCell align='center' sx={tableHeadCellTheme}>{col}</TableCell>
  //           )
  //         })}
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>

  //         {
  //           data && data.map((player) => {
  //             return (
  //             <TableRow
  //               key={player.name}
  //             >
  //               <TableCell component="th" align="center" scope="row" sx={{borderRight: `3px solid black`,  borderLeft: '3px solid black', fontWeight: '800'}}>
  //                 {player.name}
  //               </TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{processRawMinutes(player.statistics.minutes)}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.points}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.assists}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsTotal}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsOffensive}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.reboundsDefensive}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.steals}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.blocks}</TableCell>
  //               {/* <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.turnovers}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.plusMinusPoints}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.fieldGoalsMade}-{player.statistics.fieldGoalsAttempted}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.freeThrowsMade}-{player.statistics.freeThrowsAttempted}</TableCell>
  //               <TableCell align="center" sx={{borderRight: '3px solid black'}}>{player.statistics.threePointersMade}-{player.statistics.threePointersAttempted}</TableCell> */}
  //             </TableRow>
  //             )
  //           })
  //         }
  //       </TableBody>
  //     </Table>  
  //   </TableContainer>
  // </ThemeProvider>
  )
}

