import React from 'react'
import './template.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const SeriesTemplate = (props) => {
  return (
    <div className="card"
    style={{    backgroundColor: "#fbefef"}}
    >
    <div className="card-header">
      <h3 className="card-title">{props.name}</h3>
    </div>
    <div className="card-body">
      <p className="series-dates">From {props.start} to {props.end}</p>
      <div className="series-matches">
        <div className="match-type">
          <h5>T20 Matches</h5>
          <p>{props.twenty}</p>
        </div>
        <div className="match-type">
          <h5>ODI Matches</h5>
          <p>{props.odi}</p>
        </div>
        <div className="match-type">
          <h5>Test Matches</h5>
          <p>{props.Test}</p>
        </div>
      </div>
      <Link to='/seriesMatches' state={props.id} ><Button>View Matches...</Button></Link>
    </div>
  </div>
  )
}

export default SeriesTemplate
