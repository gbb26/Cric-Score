import React, { useEffect, useState } from 'react'
import Template from './Template'
import Upcoming from './Upcoming'

const FetchMatches = () => {
    const [matchData,setMatchData] = useState([])

    const getData = async () =>{
        const d = await fetch(`https://api.cricapi.com/v1/cricScore?apikey=API_KEY&offset=0`)
        const da = await d.json()
        setMatchData(da.data)
    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <>
    {
        matchData.map((items)=>{
           return  <div key={items.id}>
            {items.status === "Match not started"?
          <Upcoming 
          teamA = {items.t1}
          teamB = {items.t2}
          date = {items.dateTimeGMT?items.dateTimeGMT.slice(0,10):''}
          time = {items.dateTimeGMT?items.dateTimeGMT.slice(11,19)+' GMT':''}
          result = {items.status}
          />:
          <Template
          id = {items.id}
          teamA = {items.t1}
          teamB = {items.t2}
          matchType = {items.matchType}
          scoreA = {items.t1s}
          scoreB = {items.t2s}
          result = {items.status}
          />
          }
            </div>
        })
    }
    </>
  )
}

export default FetchMatches
