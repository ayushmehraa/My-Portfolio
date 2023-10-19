import React from 'react';
import './intro.css';
import bg from"../../../src/profile.png"
import btnImg from"../../../src/hireme.png"
// import { Link } from 'react-scroll';

function intro() {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="IntroText">I'm<span className='introName'> Ayush Mehra </span><span><br/> a Data scientist </span> </span>
            <p className="introPara"><br /> Welcome to my data science portfolio!</p>

            <a className='hiremelink' href='mailto: mehrayush762@gmail.com'>
              <button className="btn"><img src={btnImg} alt="" className='btnImg' />Hire me</button>
            </a>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default intro