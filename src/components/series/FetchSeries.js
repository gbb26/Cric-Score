import React, { useEffect, useState } from 'react'
import SeriesTemplate from './SeriesTemplate'

function FetchSeries() {
  const [data,setData] = useState([])

  const getData = async () =>{
    const d = await fetch(`https://api.cricapi.com/v1/series?apikey=API_KEY&offset=0`)
    const da = await d.json()
    setData(da.data)
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      {
        data.map((items)=>{
          return <div key={items.id}>
            <SeriesTemplate
            name = {items.name}
            start = {items.startDate}
            end = {items.endDate}
            twenty = {items.t20}
            odi = {items.odi}
            Test = {items.test}
            id = {items.id}
            
            />
          </div>
        })
      }
    </div>
  )
}

export default FetchSeries
