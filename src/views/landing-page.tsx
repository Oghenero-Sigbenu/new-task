import React, { useState } from "react";
import "../styles/landing-page.css"

// import components
import ErrorCard from "../components/error-card";

function LandingPage () {
    const [activeTab, setActiveTab] = useState("section__tab__btn-1")

return (
<div className="container">
<h2 className="container__text">Main metrics</h2>
<div className="section">
     <ul className="section__tab">
        <ul className={activeTab === "section__tab__btn-1" ? "active" : ""} onClick={() => setActiveTab("section__tab__btn-1")}>Last hour</ul>
        <ul className={activeTab === "section__tab__btn-2" ? "active" : ""} onClick={() => setActiveTab("section__tab__btn-2")}>Today</ul>
        <ul className={activeTab === "section__tab__btn-3" ? "active" : ""} onClick={() => setActiveTab("section__tab__btn-3")}>YesterDay</ul>
        <ul className={activeTab === "section__tab__btn-4" ? "active" : ""} onClick={() => setActiveTab("section__tab__btn-4")}>Last 3 days</ul>
     </ul>
     <div>
          {activeTab === "section__tab__btn-1" ?  
        <div className="section__tab__content">
            <div className="section__tab__content__item">
                <ErrorCard/>
                <ErrorCard/>
                <ErrorCard/>
            </div>
            <div className="section__tab__content__line-indicator">
                <div className="section__tab__content__line-indicator__status"></div>
                <div className="section__tab__content__line-indicator__status"></div>
                <div className="section__tab__content__line-indicator__status"></div>
                <div className="section__tab__content__line-indicator__status"></div>
            </div>
            <div className="section__tab__content__error-type">
            <div className="section__tab__content__error-type__item">
              <div className="section__tab__content__error-type__status"></div>
              <p>Error 500: 1 256</p>
            </div>
            <div className="section__tab__content__error-type__item">
              <div className="section__tab__content__error-type__status"></div>
              <p>Error 500: 1 256</p>
            </div>
            <div className="section__tab__content__error-type__item">
              <div className="section__tab__content__error-type__status"></div>
              <p>Error 500: 1 256</p>
            </div>
            <div className="section__tab__content__error-type__item">
              <div className="section__tab__content__error-type__status"></div>
              <p>Error 500: 1 256</p>
            </div>
            </div>
            
        </div> : 
        ""}
        {activeTab === "section__tab__btn-2" ?  
        <h2>2</h2> : ""}
        {activeTab === "section__tab__btn-3" ?  
        <h2>3</h2> : ""}
         {activeTab === "section__tab__btn-4" ?  
        <h2>4</h2> : ""}
        
      </div>
</div>
</div>
);
}

export default LandingPage;