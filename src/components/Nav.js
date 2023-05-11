import React from 'react'
import '../stylesheets/nav.css'
import { Link } from 'react-router-dom'
import { TbCricket} from 'react-icons/tb';
const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-dark" id='navbar'>
  <div className="container-fluid">
    <Link className="navbar-brand" href="/">Cric-Score <TbCricket/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/">Live Score</Link>
        <Link className="nav-link" to="/series">Series</Link>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
