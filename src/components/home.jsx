import React from 'react'
import './home.css'
import olx from '../ui/olx.png'

class Home extends React.Component{
constructor(){
    super()
}
render(){
    return(
        <div>
            
<div>
<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={olx} width="70" height="30" alt="" loading="lazy"/>
  </a>
  <ul className="navbar-nav mr-auto"> 
      <li className="nav-item">
      <select id="inputState" className="form-control s1">
        <option selected><i className="fas fa-search"></i>Choose...</option>
        <option>...</option>
      </select>
      </li>
      <li className="nav-item">
      <select id="inputState" className="form-control s2">
        <option selected>Find Cars,Mobile Phones and more...</option>
        <option>...</option>
      </select>
      </li>
      </ul>
</nav>
</div>

        </div>
    )
}
}

export default Home; 