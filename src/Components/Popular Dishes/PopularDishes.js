import React, { useState } from "react";
import "../../App.css";
import calendar from "./images/calendar.png";
import clock from "./images/circular-alarm-clock-tool.png";

const PopularDishes=()=>{

    return(
        <div className="food-items">
            <div className="black"></div>

            <div className="dateAndTime">
                <div className="date">
                    <img src={calendar} height='30px'></img>
                    <p className="dateText">21 May 2021</p>
                </div>
                <div className="line"></div>
                <div className="time">
                    <img src={clock} height='30px'></img>
                    <p className="timeText">10:30 Pm-12:30 Pm</p>
                </div>
            </div>

            <div className="types">
                <div className="cuisines selected">Italian</div>
                <div className="cuisines">Chinese</div>
                <div className="cuisines">Indian</div>
                <div className="cuisines">Mexican</div>
                <div className="cuisines">Japanese</div>
                <div className="cuisines">French</div>
                <div className="cuisines">Thai</div>
                <div className="cuisines">Greek</div>
            </div>

            <div className="dishes">
                <h3>Popular Dishes</h3>
                <div className="popular">
                    <div className="dish dish1">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                    <div className="dish">Biriyani</div>
                </div>

            </div>

            <div className="hr"></div>
        </div>
    )
}

export default PopularDishes;