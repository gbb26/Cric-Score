import React from 'react'
import '../../stylesheets/template.css'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Template = (props) => {
  return (
    <div className="card" style={{backgroundColor:'#fbefef'}}>
        <div className="card-header">
    <h4 className="card-title">{props.name?props.name:''}</h4>
  </div>
  <div className="card-body">
    <div className="row">
      <div className="col-6">
        <h5 className="text-truncate">{props.teamA}</h5>
        <p className="mb-0">Score: <strong>{props.scoreA?props.scoreA:'NA'}</strong></p>
      </div>
      <div className="col-6">
        <h5 className="text-truncate">{props.teamB}</h5>
        <p className="mb-0">Score: <strong>{props.scoreB?props.scoreB:'NA'}</strong></p>
      </div>
    </div>
    <Link to='/matchInfo' state={props.id}><Button>Match Info...</Button></Link>
    <hr/>
    <h5 className="mb-0">Result: <strong>{props.result}</strong></h5>
  </div>
</div>

  )
}

export default Template
