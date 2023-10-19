import React from 'react';
import "./skills.css";

import Python from "../../components/assets/python.png";
import Excel from "../../components/assets/excel.png";
import Azure from "../../components/assets/Azure.png";
import Html from "../../components/assets/html.png";
import Js from "../../components/assets/js.png";
import Css from "../../components/assets/css.png";
import Dl from "../../components/assets/dl.png";
import Ml from "../../components/assets/ml.png";
import Tf from "../../components/assets/tf.png";
import Powerbi from "../../components/assets/powerbi.png";
import Flask from "../../components/assets/flask.png";
import Git from "../../components/assets/git.png";
import Jupyter from "../../components/assets/jupyter.png";
import Kaggle from "../../components/assets/kaggle.png";
import Mongodb from "../../components/assets/mongodb.png";
import psql from "../../components/assets/postgresql.png";
import sql from "../../components/assets/sql.png";
import Stats from "../../components/assets/stats.png";

function Skills() {
  return (
  <section id='skills'>
     <span className='skillTitle'>About me</span>
     <span className='skillDesc'> I am a data science enthusiast on a relentless quest for knowledge and innovation. Currently, I am pursuing my master's degree in data science, and my portfolio reflects my unwavering dedication to this dynamic field. Through a combination of self-learning and academic rigor, I am constantly honing my skills to tackle complex data challenges and contribute to data-driven solutions. Join me on this exciting journey through my projects and discoveries in the realm of data science.</span>

     <div className="skillTitle">
        skills
     </div>

     <div className="skillBars">
        
        <div className="skillbar">
            <img src={Python} alt="python" className="skillbarImg" />
            <div className='skillbarDesc'>Python</div>
        </div>

        <div className="skillbar">
            <img src={Powerbi} alt="Powerbi" className="skillbarImg" />
            <div className='skillbarDesc'>PowerBI</div>
        </div>

        
        <div className="skillbar">
            <img src={Excel} alt="excel" className="skillbarImg" />
            <div className='skillbarDesc'>Excel</div>
        </div>

        
        <div className="skillbar">
            <img src={Azure} alt="Azure" className="skillbarImg" />
            <div className='skillbarDesc'>Azure</div>
        </div>

        
        <div className="skillbar">
            <img src={Html} alt="html" className="skillbarImg" />
            <div className='skillbarDesc'>html</div>
        </div>

        
        <div className="skillbar">
            <img src={Css} alt="css" className="skillbarImg" />
            <div className='skillbarDesc'>CSS</div>
        </div>

        
        <div className="skillbar">
            <img src={Js} alt="js" className="skillbarImg" />
            <div className='skillbarDesc'>JavaScript</div>
        </div>

        
        <div className="skillbar">
            <img src={Dl} alt="dl" className="skillbarImg" />
            <div className='skillbarDesc'>Deep learning</div>
        </div>

        
        <div className="skillbar">
            <img src={Ml} alt="ml" className="skillbarImg" />
            <div className='skillbarDesc'>Machine learning</div>
        </div>

        
        <div className="skillbar">
            <img src={Tf} alt="tf" className="skillbarImg" />
            <div className='skillbarDesc'>Tensorflow</div>
        </div>

        
        <div className="skillbar">
            <img src={Flask} alt="Flask" className="skillbarImg" />
            <div className='skillbarDesc'>Flask</div>
        </div>

        
        <div className="skillbar">
            <img src={Git} alt="Git" className="skillbarImg" />
            <div className='skillbarDesc'>Git</div>
        </div>

        
        <div className="skillbar">
            <img src={Jupyter} alt="Jupyter" className="skillbarImg" />
            <div className='skillbarDesc'>Jupyter</div>
        </div>

        
        <div className="skillbar">
            <img src={Kaggle} alt="Kaggle" className="skillbarImg" />
            <div className='skillbarDesc'>Kaggle</div>
        </div>

        
        <div className="skillbar">
            <img src={Mongodb} alt="Mongodb" className="skillbarImg" />
            <div className='skillbarDesc'>Mongodb</div>
        </div>

        
        <div className="skillbar">
            <img src={sql} alt="sql" className="skillbarImg" />
            <div className='skillbarDesc'>SQL</div>
        </div>

        
        <div className="skillbar">
            <img src={psql} alt="psql" className="skillbarImg" />
            <div className='skillbarDesc'>PostgreSql</div>
        </div>

        <div className="skillbar">
            <img src={Stats} alt="statics" className="skillbarImg" />
            <div className='skillbarDesc'>Statistics and probability intuation</div>
        </div>

     </div>
  </section>
  )
}

export default Skills