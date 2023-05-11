import React, { useEffect, useState } from 'react'
import InfoTemplate from './InfoTemplate'
import { useLocation } from 'react-router-dom';

const MatchInfo = () => {
    const [data,setData] = useState({
      name:'',
      sourceA:'',
      teamA:'',
      scoreA:'',
      sourceB:'',
      teamB:'',
      scoreB:'',
      result:'',
      date:'',
      venue:''
    })
    const location = useLocation();
const id = location.state;
    useEffect(()=>{
      const getData = async () =>{
        const d = await fetch(`https://api.cricapi.com/v1/match_info?apikey=API_KEY&id=${id}`)
        const da = await d.json()
        setData({
          name:da.data.name,
          sourceA:da.data.teamInfo[0].img,
          teamA:da.data.teamInfo[0].matchName,
          scoreA:`${da.data.score[0].r}/${da.data.score[0].w} (${da.data.score[0].o} Overs)`,
          sourceB:da.data.teamInfo[1].img,
          teamB:da.data.teamInfo[1].name,
          scoreB:`${da.data.score[1].r}/${da.data.score[1].w} (${da.data.score[1].o} Overs)`,
          result:da.data.status,
          dateTime:`${da.data.date}  ${da.data.dateTimeGMT.slice(11,19)} GMT}`,
          venue: da.data.venue
        })
    }
    getData()
    },[id])
  return (
    <div>
      <InfoTemplate
      matchData = {data}
      />
    </div>
  )
}

export default MatchInfo
