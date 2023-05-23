import React, {useState} from "react";
import * as Icons from 'react-nba-logos';


const mapTricodeToLogo = (tricode, size=86) => 
{

    switch(tricode) 
    {
        case "ATL":
            return <Icons.ATL size={size}/>
        case "BKN":
            return <Icons.BKN size={size}/>
        case "BOS":
            return <Icons.BOS size={size}/>
        case "CHA":
            return <Icons.CHA size={size}/>
        case "LAL":
            return <Icons.LAL size={size}/>
        case "MIA":
            return <Icons.MIA size={size}/>
        case "DEN":
            return <Icons.DEN size={size}/>
        case "LAC":
            return <Icons.LAC size={size} />
        case "CHI":
            return <Icons.CHI size={size} />
        case "CLE":
            return <Icons.CLE size={size} />
        case "DAL":
            return <Icons.DAL size={size} />
        case "DET":
            return <Icons.DET size={size} />
        case "GSW":
            return <Icons.GSW size={size} />
        case "HOU":
            return <Icons.HOU size={size} />
        case "MIL":
            return <Icons.MIL size={size} />        
        case "UTA":
            return <Icons.UTA size={size} />
        case "TOR":
            return <Icons.TOR size={size} />
        case "WAS":
            return <Icons.WAS size={size} />
        case "PHI":
            return <Icons.PHI size={size} />
        case "NYK":
            return <Icons.NYK size={size} />
        case "MIN":
            return <Icons.MIN size={size} /> 
        case "MEM":
            return <Icons.MEM size={size} />
        case "SAC":
            return <Icons.SAC size={size} />  
        case "SAS":
            return <Icons.SAS size={size} />
        case "PHX":
            return <Icons.PHX size={size} />
        case "NOP":
            return <Icons.NOP size={size} />
        case "OKC":
            return <Icons.OKC size={size} />
        case "IND":
            return <Icons.IND size={size} />
        case "ORL":
            return <Icons.ORL size={size} />
        case "POR":
            return <Icons.POR size={size} />                                             
    }


}

const LogoFormatter = ({tricode, size=86}) => {

    return (
        <>
            {mapTricodeToLogo(tricode, size)}
            {/* <h2 style={{"textDecoration":'none'}}
            >{tricode}</h2> */}
        </>
    )
}


export default LogoFormatter;