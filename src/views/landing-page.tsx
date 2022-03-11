import React, { useState } from "react";
import "../styles/landing-page.css"
import { MdFilter, MdDashboard} from 'react-icons/md';

// import components
import ErrorCard from "../components/error-card";
import ErrorType from "../components/error-type";
import SearchCard from "../components/search-cards";

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
           <ErrorType error={500} type1={2} type2={20}/>
           <ErrorType error={501} type1={2} type2={20}/>
           <ErrorType error={502} type1={2} type2={20}/>
           <ErrorType error={504} type1={2} type2={20}/>
            </div>
            <div className="searches-section">
              <SearchCard 
              title={"Searches"}
              rate={5}
              searchFigureLastFriday={3200}
              searchFigureYesterday={27000}
              icon={<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8719 0.597C15.6836 0.22875 15.3178 0 14.9156 0H1.08284C0.68139 0 0.314845 0.22875 0.126481 0.597C-0.0633372 0.969 -0.0378827 1.4145 0.191936 1.76025L5.75266 10.1453C5.79484 10.209 5.81739 10.2825 5.81739 10.359V16.8757C5.81739 17.496 6.30684 18 6.9083 18C7.10394 18 7.29666 17.9445 7.46757 17.8388L9.65303 16.4865C9.97884 16.284 10.181 15.915 10.181 15.5235V10.359C10.181 10.2825 10.2036 10.209 10.2465 10.1445L15.8065 1.761C16.0363 1.41525 16.0618 0.969 15.8719 0.597Z" fill="white"/>
                </svg>
                }
                dataTitle={"Mobile traffic"}
                secDataTitle={"Web traffic"}
                secDataValue={100}
                dataValue={100}
                dataDetail={"You get 100% traffic on mobile and desktop devices"}
                features={"Searches, Presentation"}/>
            <SearchCard 
              title={"Sales"}
              rate={0}
              searchFigureLastFriday={24}
              searchFigureYesterday={24}
              icon={<svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8719 0.597C15.6836 0.22875 15.3178 0 14.9156 0H1.08284C0.68139 0 0.314845 0.22875 0.126481 0.597C-0.0633372 0.969 -0.0378827 1.4145 0.191936 1.76025L5.75266 10.1453C5.79484 10.209 5.81739 10.2825 5.81739 10.359V16.8757C5.81739 17.496 6.30684 18 6.9083 18C7.10394 18 7.29666 17.9445 7.46757 17.8388L9.65303 16.4865C9.97884 16.284 10.181 15.915 10.181 15.5235V10.359C10.181 10.2825 10.2036 10.209 10.2465 10.1445L15.8065 1.761C16.0363 1.41525 16.0618 0.969 15.8719 0.597Z" fill="white"/>
                </svg>
                }
                dataTitle={"STR"}
                secDataTitle={"Avg.Check"}
                secDataValue={6.2}
                dataValue={8903}
                dataDetail={"Conversion from cliks  to bookings on all devices."}
                features={"STR, Bookings, Avg. Check"}/>
            </div>
            <div className="searches-section">
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