import React from 'react'
import '../../stylesheets/upcoming.css'

const Upcoming = (props) => {
  return (
    <div className="match-card">
      <div className="teams">
        <span className="team-1 bold"
        style={{display:props.name === "not found"?'':'none'}}
        >{props.teamA}</span>
        <span className="vs bold" >{props.name === "not found"?'vs':props.name}</span>
        <span className="team-2 bold" 
        style={{display:props.name === "not found"?'':'none'}}
        >{props.teamB}</span>
      </div>
      <div className="details bold">
        <span className="date bold">{props.date}</span>
        <span className="time bold">{props.time}</span>
        <em>
          <h5 className="result">{props.result}</h5></em>
      </div>
    </div>
  )
}
Upcoming.defaultProps = {
  name: "not found"
}
export default Upcoming
