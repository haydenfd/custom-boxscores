import React, {useState} from "react";
import './PreferencesForm.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const theme = createTheme({
    typography: {
      fontFamily: [
        'Avenir',
        'sans-serif'
      ].join(','),
    }
  });
  

const PreferencesForm = () => {

    return (
    <>
        <h1>
            Your Preferences
        </h1>
        <ThemeProvider theme={theme}>
        <FormGroup>
            <FormControlLabel control={<Checkbox color="secondary"/>} label="MINS" sx={{ '& .MuiSvgIcon-root': { fontSize: 34} }}/>
            <FormControlLabel control={<Checkbox color="secondary"/>} label="PTS" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
            <FormControlLabel control={<Checkbox color="secondary"/>} label="AST" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
        </FormGroup>
        </ThemeProvider>
        
    </>
    )

}

export default PreferencesForm;