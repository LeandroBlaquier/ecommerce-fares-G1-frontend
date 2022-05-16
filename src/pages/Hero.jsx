import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/hero.css'
// import Catalogue from './Catalogue'

const Hero =  ()  => {
   return (
    <div className='Hero'>
      <div className='content'>
      <h1>Make Food</h1>
      <h2>For Me</h2>
      <h2>For You</h2>
      <h2>UwU</h2>
<div>
  {/* <button className='content' >Ordenar :3</button> */}
<Link to="/catalogue" className='content content-link'>Ordenar</Link>
</div>
      </div>
    </div>
  )
}

export default Hero