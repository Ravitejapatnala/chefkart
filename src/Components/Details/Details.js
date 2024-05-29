import React from "react";
import "./details.css";
import left from "./images/left-arrow.png";
import clock from "./images/clock.png";
import vegetables from "./images/veg_new.jpg";
import dropdown from "./images/drop-down-arrow.png";
import refrigerator from "./images/—Pngtree—hand-painted refrigerator grey refrigerator hand_3906127.png";

const Details=()=>{
    return(
        <div className="containerDetails">
            <div className="headerDetails">
                <img src={left} alt="left" height='20px'></img>

                <div className="hero-sectionDetails">
                    <div className="itemDetails">
                        <h1>Masala Muglai</h1>

                        <div className="ratingDetails">
                            <p className="rateDetails">4.2</p>
                            <span className="starDetails">&#9733;</span>
                        </div>
                    </div>

                    <div className="descriptionDetails">
                        <p>Mughlai Masala is a style of cookery developed in the indian subcontinent by<br/>the imperial kitchens of the Mughal Empire.</p>
                    </div>
                </div>

                <div className="delayDetails">
                    <img src={clock} alt="clock" height='20px'></img>
                    <h4>1 hour</h4>
                </div>

                <div className="vegetablesDetails">
                    <img src={vegetables} alt="veg" height='500px'></img>
                </div>

                <div className="circleDetails"></div>

                <div className="lineDetails"></div>
            </div>

            <div className="main">
                <div className="ingrediantsDetails">
                    <h2>Ingrediants</h2>
                    <p className="people">For 2 people</p>
                    <div className="bottomDetails"></div>
                </div>

                <div className="dropdownDetails">
                    <div className="dropdown">
                        <h1>Vegetables (05)</h1>
                        <img src={dropdown} alt="dropdown" height='20px'></img>
                    </div>
                </div>
                
                <div className="contentDetails">
                    <div className="content">
                        <p>Cauliflower</p>
                        <p>01pc</p>
                    </div>

                    <div className="content">
                        <p>Tomato</p>
                        <p>10pc</p>
                    </div>

                    <div className="content">
                        <p>Spinach</p>
                        <p>1/2kg</p>
                    </div>
                </div>

                <div className="dropdownDetails">
                    <div className="dropdown">
                        <h1>Spices (10)</h1>
                        <img src={dropdown} alt="dropdown" height='20px'></img>
                    </div>
                </div>

                <div className="contentDetails">
                    <div className="content">
                        <p>Coriander</p>
                        <p>100 gram</p>
                    </div>

                    <div className="content">
                        <p>Mustard Oil</p>
                        <p>1/2 litres</p>
                    </div>
                </div>
            </div>

            <div className="footer">
                <h1>Appliances</h1>
                <div className="applianceImages">
                    <div className="refrigerator">
                        <img src={refrigerator} alt="fridge" height='200px'></img>
                        <p>Refrigerator</p>
                    </div>

                    <div className="refrigerator">
                        <img src={refrigerator} alt="fridge" height='200px'></img>
                        <p>Refrigerator</p>
                    </div>

                    <div className="refrigerator">
                        <img src={refrigerator} alt="fridge" height='200px'></img>
                        <p>Refrigerator</p>
                    </div>
    
                </div>
            </div>
        </div>
    )
}

export default Details;