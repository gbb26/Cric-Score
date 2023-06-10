import React, { useEffect, useState } from 'react'
import Template from '../../liveMatches/Template'
import Upcoming from '../../liveMatches/Upcoming'
import { useLocation } from 'react-router-dom'

const FetchSeriesMatches = () => {
  const [data,setData] = useState([])
  const location = useLocation();
  const id = location.state;
  useEffect(()=>{
    const getData = async () =>{
      const d = await fetch(`https://api.cricapi.com/v1/series_info?apikey=${process.env.REACT_APP_KEY}&id=${id}`)
      const da = await d.json()
      setData(da.data.matchList)
    }
    getData()
  },[id])
  return (
    <>
        {
        data.map((items)=>{
           return  <div key={items.id}>
            {items.status === "Match not started"?
          <Upcoming 
          name = {items.name}
          date = {items.date?items.date:''}
          time = {items.dateTimeGMT?items.dateTimeGMT.slice(11,19)+' GMT':''}
          result = {items.venue}
          />:
          <Template
          teamA = {items.teams[0]}
          teamB = {items.teams[1]}
          name = {items.name}
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
export default FetchSeriesMatches