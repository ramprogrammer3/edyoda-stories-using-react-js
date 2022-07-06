import React from 'react'
import style from './style.module.css'

function Header() {
  return (
    <header id = {style.header}>
        <div id= {style.leftpart}>
            <p id = {style.logo}>EDYODA <br /> <span>Stories</span></p>
            <p id= {style.category}>Explore Categories <i className='fa fa-angle-down' id= {style.angle}></i></p>
        </div>
        <div id= {style.rightpart}>
            <p>
            EdYoda is free learning and knowledge <br />
            sharing platform for techies
            </p>
            <button>
                Go To Main Website
            </button>
        </div>
    </header>
  )
}

export default Header