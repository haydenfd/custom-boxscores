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
    }


}

const LogoFormatter = ({tricode}) => {

    return (
        <>
            {mapTricodeToLogo(tricode)}
            <h2 style={{"textDecoration":'none'}}
            >{tricode}</h2>
        </>
    )
}


export default LogoFormatter;