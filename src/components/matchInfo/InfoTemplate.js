import React from 'react'
import './style.css'

function InfoTemplate(props) {
  return (
    <div className="card">
  <div className="match-info">
    <h2 className="match-name">{props.matchData.matchName}</h2>
    <div className="teams">
      <div className="team">
        <img src={props.matchData.sourceA} alt="teamA" />
        <h3>{props.matchData.teamA}</h3>
        <p className="score">{props.matchData.scoreA}</p>
      </div>
      <div className="team">
        <img src={props.matchData.sourceB} alt="teamB" />
        <h3>{props.matchData.teamB}</h3>
        <p className="score">{props.matchData.scoreB}</p>
      </div>
    </div>
    <p className="result">{props.matchData.result}</p>
    <p className="match-details">{props.matchData.dateTime} |{props.matchData.venue}</p>
  </div>
</div>

  )
}

export default InfoTemplate
