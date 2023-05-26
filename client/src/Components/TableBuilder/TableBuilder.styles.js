export let themeProviderTheme = {
    typography: {
      fontSize: 18,
      fontFamily: [
        'Avenir',
        'sans-serif'
      ].join(','),
    },
}

export let tableContainerTheme = 
{
    marginTop: '30px',
    marginBottom: '100px',
}

export let tableTheme = {
    width: '100%',
}

export let tableHeadTheme = {
    border:'3px solid black'
}

export let tableHeadCellTheme = {
    borderRight: '3px solid black', 
    color:'white',
    fontWeight: '800',
    fontSize: 20
}


export let tablePlayerNamesTheme = (hex) => {
    return {
        borderRight: '3px solid black',  
        borderLeft: '3px solid black', 
        fontWeight: '800',
        fontSize: 18,
        borderBottom: `2px solid black`
    }
} 

export let tableStatsCellTheme = (hex) => {
  return { 
    borderRight: '3px solid black',
    borderBottom: '2px solid black'
   }
}


