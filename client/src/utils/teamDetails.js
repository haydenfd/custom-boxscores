
const teamDetails = 
[
    {
        name: 'Hawks',
        city:'Atlanta',
        tricode: 'ATL',
        hex:'#C8102E',
        activeClass: 'active-atl'
    },
    {
        name: 'Celtics',
        city:'Boston',
        tricode: 'BOS',
        hex:'#007A33',
        activeClass: 'active-bos'
    },
    {
        name: 'Nets',
        city:'Brooklyn',
        tricode: 'BKN',
        hex:'#000000',
        activeClass: 'active-bkn'
    },
    {
        name: 'Hornets',
        city:'Charlotte',
        tricode: 'CHA',
        hex:'#00788C',
        activeClass: 'active-cha'
    },
    {
        name: 'Bulls',
        city:'Chicago',
        tricode: 'CHI',
        hex:'#CE1141',
        activeClass: 'active-chi'
    },
    {
        name: 'Cavaliers',
        city:'Cleveland',
        tricode: 'CLE',
        // hex:'#041E42'
        hex: '#860038',
        activeClass: 'active-cle'
    },
    {
        name: 'Mavericks',
        city:'Dallas',
        tricode: 'DAL',
        hex:'#002B5E',
        activeClass: 'active-dal'
    },
    {
        name: 'Nuggets',
        city:'Denver',
        tricode: 'DEN',
        hex:'#0E2240',
        activeClass: 'active-den'
    },
    {
        name: 'Pistons',
        city:'Detroit',
        tricode: 'DET',
        // hex:'#BEC0C2'
        hex: "#C8102E",
        activeClass: 'active-det'
    },
    {
        name: 'Warriors',
        city:'Golden State',
        tricode: 'GSW',
        // hex:'#FFC72C'
        hex: "#1D428A",
        activeClass: 'active-gsw'
    },
    {
        name: 'Rockets',
        city:'Houston',
        tricode: 'HOU',
        // hex:'#C4CED4'
        hex: "#000000",
        activeClass: 'active-hou'
    },
    {
        name: 'Pacers',
        city:'Indiana',
        tricode: 'IND',
        hex:'#002D62',
        activeClass: 'active-ind'
    },
    {
        name: 'Lakers',
        city:'LA',
        tricode: 'LAL',
        hex:'#552583',
        activeClass: 'active-lal'
    },
    {
        name: 'Clippers',
        city:'LA',
        tricode: 'LAC',
        // hex:'#000000'
        hex: "#1D428A",
        // hex:"#C8102E"
        activeClass:'active-lac'
    },
    {
        name: 'Heat',
        city:'Miami',
        tricode: 'MIA',
        hex:'#98002E',
        activeClass: 'active-mia'
    },
    {
        name: 'Bucks',
        city:'Milwaukee',
        tricode: 'MIL',
        hex:'#00471B',
        activeClass: 'active-mil'
    },
    {
        name: 'Grizzlies',
        city:'Memphis',
        tricode: 'MEM',
        hex:'#12173F',
        activeClass:'active-mem'
    },
    {
        name: 'Timberwolves',
        city:'Minnesota',
        tricode: 'MIN',
        // hex:'#9EA2A2'
        hex: '#0C2340',
        activeClass: 'active-min'
        // hex: "#78BE20"
    },
    {
        name: 'Pelicans',
        city:'New Orleans',
        tricode: 'NOP',
        hex:'#0C2340',
        activeClass: 'active-nop'
        // hex: "#85714D"
        // hex:"#C8102E"
    },
    {
        name: 'Knicks',
        city:'New York',
        tricode: 'NYK',
        hex:'#006BB6',
        activeClass: 'active-nyk'
    },
    {
        name: 'Thunder',
        city:'Oklahoma City',
        tricode: 'OKC',
        // hex:'#007AC1'
        // hex:"#EF3B24"
        hex:"#002D62",
        activeClass: 'active-okc'
    },
    {
        name: 'Magic',
        city:'Orlando',
        tricode: 'ORL',
        hex:'#000000',
        activeClass: 'active-orl'
    },
    {
        name: '76ers',
        city:'Philadelphia',
        tricode: 'PHI',
        hex:'#C4CED4', //change maybe
        activeClass: 'active-phi'
    },
    {
        name: 'Suns',
        city:'Phoenix',
        tricode: 'PHX',
        hex:'#1D1160',
        activeClass: 'active-phx'
    },
    {
        name: 'Trail Blazers',
        city:'Portland',
        tricode: 'POR',
        hex:'#E03A3E',
        activeClass: 'active-por'
    },
    {
        name: 'Kings',
        city:'Sacramento',
        tricode: 'SAC',
        hex:'#5A2D81',
        activeClass: 'active-sac'
    },
    {
        name: 'Spurs',
        city:'San Antonio',
        tricode: 'SAS',
        hex:'#C4CED4',
        activeClass: 'active-sas'
    },
    {
        name: 'Raptors',
        city:'Toronto',
        tricode: 'TOR',
        // hex:'#B4975A'
        hex: "#000000",
        activeClass: 'active-tor'
    },
    {
        name: 'Jazz',
        city:'Utah',
        tricode: 'UTA',
        // hex:'#F9A01B'
        hex: "#002B5C",
        activeClass: 'active-uta'
    },
    {
        name: 'Wizards',
        city:'Washington',
        tricode: 'WAS',
        // hex:'#E31837'
        hex: "#002B5C",
        activeClass: 'active-was'
    },
]

export const retrieveTeamObject = (tricode) => 
{

    for (let team of teamDetails)
    {
        if (team.tricode === tricode)
        {
            return team
        }
    }
}
