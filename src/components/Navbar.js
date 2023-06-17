import React from 'react'
import propTypes from 'prop-types'
// import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="/">{props.title}</a> ye jo tag he isse new page load ho rha hen..to one page application nhi ban rha to hum niche vala link tag use karenge */}
      {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link>  */}
            <a className="nav-link active" aria-current="page" href="#">Home</a> 
            
          </li>
          <li className="nav-item">
            {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
            {/* <a className="nav-link" href="#">{props.aboutText}</a> */}
          </li>
          
         
        </ul>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >DarkMode</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title: propTypes.string.isRequired,
                    aboutText : propTypes.string};


Navbar.defaultProps = {
  title : 'set title here ',
  aboutText : 'About Text here'
} 
