import React from 'react';
import "./project.css";
import P1 from "../assets/project1.png";
import P2 from "../assets/p1.png";
import P3 from "../assets/p3.png";
import P4 from "../assets/p4.png";
import P5 from "../assets/p5.png";
import P6 from "../assets/p6.png";
import P7 from "../assets/p7.png";

function projects() {
  return (
  <section id='Project'>
     <span className='projectTitle'>Projects</span>
     <span className='projectDesc'> Explore my data science journey through a curated selection of projects that demonstrate my skills and passion for data analysis. From predictive modeling to data visualization, these projects showcase my ability to extract meaningful insights and solve real-world problems using cutting-edge techniques. Dive in to discover the results of my dedication to the world of data science.</span>

     <div className="projectBars">
        

     <div className="projectbar">
        <a href="https://github.com/ayushmehraa/Kidney-Stone-Prediction" target='_blank' rel="noreferrer">
            <img src={P5} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Kidney Stone Prediction  </h1></div>
            <div className="projectbartxt">
            <p>This Project contains the code and resources for a machine learning project focused on predicting the likelihood of kidney stone formation based on urine analysis data. The dataset used in this project is the Kidney Stone Prediction based on Urine Analysis dataset sourced from Kaggle. The goal of this project is to develop a predictive model that can assist in identifying individuals who are at a higher risk of developing kidney stones based on their urine composition."</p></div>
        </a>
        </div>

        <div className="projectbar">
            <a href="https://github.com/ayushmehraa/Sales-data-analysis/tree/main" target='_blank' rel="noreferrer"> 
            <img src={P1} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Power BI Sales Dashboard</h1></div>
            <div className="projectbartxt">
            <p>The Power BI Sales Dashboard is designed to provide a comprehensive view of your sales data, enabling you to monitor key performance metrics and trends. This dashboard provides insights into sales, quantities, delivery times, returned orders, customer profitability, product performance, and regional distribution.</p></div>
            </a>
        </div>

        <div className="projectbar">
        <a href="https://github.com/ayushmehraa/Flight-Fare-Prediction" target='_blank' rel="noreferrer">
            <img src={P4} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Flight Fare Prediction </h1></div>
            <div className="projectbartxt">
            <p>This project focuses on predicting flight fares to help travelers make informed decisions when booking flights. Flight fares can be highly variable due to factors like airline, time of booking, route, and more. This predictive model utilizes machine learning techniques to forecast flight prices, enabling users to plan their travel budgets more effectively.".</p></div>
        </a>
        </div>

        <div className="projectbar">
        <a href="https://github.com/ayushmehraa/Student-Performance-Indicator" target='_blank' rel="noreferrer">
            <img src={P6} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Student Performance Indicator</h1></div>
            <div className="projectbartxt">
            <p>This project aims to predict student performance indicators based on various features such as gender, ethnicity, parental education, lunch type, and test preparation. The dataset used in this project is sourced from Kaggle and contains information on math, reading, and writing scores."</p></div>
        </a>
        </div>

        <div className="projectbar">
        <a href="https://github.com/ayushmehraa/Penguin-classification" target='_blank' rel="noreferrer">
            <img src={P7} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Penguin Classification</h1></div>
            <div className="projectbartxt">
            <p>This repository contains a machine learning project for classifying penguin species using their features. The project focuses on utilizing data, building a classification model, and deploying a Streamlit web application for easy interaction."</p></div>
        </a>
        </div>

        <div className="projectbar">
        <a href="https://github.com/ayushmehraa/HR-dashboard" target='_blank' rel="noreferrer">
            <img src={P2} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Power BI HR Dashboard</h1></div>
            <div className="projectbartxt">
            <p>This Power BI HR Dashboard is designed to provide insights into various HR-related metrics and actions that require attention. The dashboard is divided into three main pages: "Home," "Action," and "Details.".</p></div>
        </a>
        </div>


        <div className="projectbar">
        <a href="https://github.com/ayushmehraa/Sales-Dashboard" target='_blank' rel="noreferrer">
            <img src={P3} alt="python" className="projectbarImg" />
            <div className='projectbarH'> 
            <h1>Power BI Sales Report</h1></div>
            <div className="projectbartxt">
            <p>This Power BI Sales Dashboard is designed to provide a comprehensive view of our company's sales data, helping users make data-driven decisions. It presents key sales metrics, trends, and insights through interactive visualizations.".</p></div>
            </a>
        </div>
      
     </div>
     
     <a className='viewall' href="https://github.com/ayushmehraa?tab=repositories" rel="noreferrer">view all</a>
     
  </section>
  )
}

export default projects