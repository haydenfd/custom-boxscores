import React, {useState} from "react";
import './PreferencesForm.css'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

const theme = createTheme({
    typography: {
      fontSize: 20,
      fontWeight: 700,
      fontFamily: [
        'Avenir',
        'sans-serif'
      ].join(','),
    },
    spacing: 1,
  });
  

export const PreferencesForm = () => 
{

    const boxSx={
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        width: '80vw',
        marginTop: 30,
        padding: 30,
        border: '4px solid black',
    }

    return (
        <>
        </>
    //     <>
    //     <ThemeProvider theme={theme}>
    //     <h1>Your Preferences</h1>
    //     <Box sx={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     backgroundColor: 'lightgrey',
    //     width: '80vw',
    //     marginTop: 30,
    //     padding: 30,
    //     border: '4px solid black',
    // }}>     
    //         <FormGroup>
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="mins"/>} 
    //                 label="Minutes" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="pts"/>} 
    //                 label="Points" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="fg"/>} 
    //                 label="Field Goals Made/Attempted" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />  
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="fg %"/>} 
    //                 label="Field Goal %" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />                                          
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="ast"/>} 
    //                 label="Assists" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />  
    //             <FormControlLabel
    //                 control={<Checkbox color="secondary" name="reb"/>} 
    //                 label="Rebounds" 
    //                 sx={{ '& .MuiSvgIcon-root': { fontSize: 28} }}
    //                 />                                                         
    //         </FormGroup>
    //     </Box>
    //     </ThemeProvider>
    //     </>
    )
}


// const PreferencesForm = () => {

//     const handleChange = (e) => 
//     {
//         const name = e.target.name
//         if (e.target.checked)
//         {
        
//         }

//         setList({
//             ...list,
//             [e.target.name]: e.target.checked,
//         })
//     }

//     const [list, setList] = useState({
//         "mins": false,
//         "pts": false,
//         "ast": false,
//     })

//     return (
//     <>
//         <h1>
//             Your Preferences
//         </h1>
//             <ThemeProvider theme={theme}>
//             <FormGroup>
                // <FormControlLabel
                // control={<Checkbox color="secondary" onChange={handleChange} name="mins"
                // />} 
                // label="MINS" 
                // sx={{ '& .MuiSvgIcon-root': { fontSize: 34} }}
                // />
//                 <FormControlLabel
//                  control={<Checkbox color="secondary" name="pts" onChange={handleChange}
//                  />} 
//                  label="PTS" 
//                  sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}
//                  />
//                 <FormControlLabel 
//                 control={<Checkbox color="secondary" onChange={handleChange} name="ast"/>} 
//                 label="AST" 
//                 sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}
//                 />
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="BLK" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="STL" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="3PT" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="FT" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="FT %" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="FG" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="FG %" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="OREB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="DREB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="REB" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="+/-" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="PF" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//                 <FormControlLabel control={<Checkbox color="secondary"/>} label="TOV" sx={{ '& .MuiSvgIcon-root': { fontSize: 34 } }}/>
//             </FormGroup>
//             </ThemeProvider>
//         </div>
        
//     </>
//     )

// }

// export default PreferencesForm;