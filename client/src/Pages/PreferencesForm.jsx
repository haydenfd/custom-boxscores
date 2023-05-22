import React, {useEffect, useState} from "react";
import './PreferencesForm.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
    typography: {
      fontSize: 16,
      fontFamily: [
        'Avenir',
        'sans-serif'
      ].join(','),
    },
    spacing: 1,
  });
  

const PreferencesForm = () => {


    return (
    <>
        <h1>
            Your Preferences
        </h1>
        {/* <div className="form-wrapper"> */}
            <ThemeProvider theme={theme}>
            <FormGroup>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="MINS" sx={{ '& .MuiSvgIcon-root': { fontSize: 34} }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="PTS" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="AST" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="BLK" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="STL" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="3PT" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="FT" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="FT %" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="FG" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="FG %" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="OREB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="DREB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="REB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="+/-" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="PF" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
                <FormControlLabel control={<Checkbox color="secondary"/>} label="TOV" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
            </FormGroup>
            </ThemeProvider>
        {/* </div> */}
        
    </>
    )

}

export default PreferencesForm;