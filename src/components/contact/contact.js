import React from 'react';
import './contact.css';
import Github from "../assets/github.png"
import Kaggle from "../assets/kaggle.png"
import Gmail from "../assets/gmail.png"
import medium from "../assets/medium.png"
import insta from "../assets/insta.png"
import Twitter from "../assets/twiiter.png"
import Linkedin from "../assets/ld.png"

function contact() {
  return (
    <section id='contact'>
       <span className='contactTitle'>Contact Me</span>

       <div className="contactBar">

        
        <div className="contactBars">
        <a href="https://www.linkedin.com/in/ayushmehraa/" rel="noreferrer" target='_blank'>
        <img src={Linkedin} alt="python" className="contactBarImg" />
        </a>
        </div>

        <div className="contactBars">
        <a href="https://github.com/ayushmehraa" rel="noreferrer" target='_blank'>
        <img src={Github} alt="python" className="contactBarImg" />
        </a>
        </div>

        
        <div className="contactBars">
        <a href="mailto: mehrayush762@gmail.com" rel="noreferrer" target='_blank'>
        <img src={Gmail} alt="python" className="contactBarImg" />
        </a>
        </div>

        
        <div className="contactBars">
        <a href="https://www.kaggle.com/ayushmehraa" rel="noreferrer" target='_blank'>
        <img src={Kaggle} alt="python" className="contactBarImg" />
        </a>
        </div>

        
        <div className="contactBars">
        <a href="https://medium.com/@ayushmerhaa" rel="noreferrer" target='_blank'>
        <img src={medium} alt="python" className="contactBarImg" />
        </a>
        </div>

        <div className="contactBars">
        <a href="https://www.instagram.com/ayushmehraa/" rel="noreferrer" target='_blank'>
        <img src={insta} alt="python" className="contactBarImg" />
        </a>
        </div>

        <div className="contactBars">
        <a href="https://twitter.com/ayushmehraa" rel="noreferrer" target='_blank'>
        <img src={Twitter} alt="python" className="contactBarImg" />
        </a>
        </div>

       </div>
    </section>
  )
}

export default contact