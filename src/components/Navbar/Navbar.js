import React from 'react';
import "./Navbar.css";
import logo from "../../../src/logo.png";
import contactImg from "../../../src/contact.png";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className='logobox' >
        <img src={logo} alt="logo" className='logo' /><span className='logoName'>Ayush Mehra</span>
        </div>
        <div className="desktopMenu">

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='Project' spy={true} smooth={true} offset={-82} duration={500} className='desktopMenuListItem'>Projects</Link>
        
        </div>
        <button className='desktopMenuBtn' onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});}}>
            <img src={contactImg} alt="" className='desktopMenuImg'  /><span className='contactTxt'>Contact Me</span>
        </button>

       
        
      

    </nav>
  )
}

export default Navbar