import React from "react";
import leftArrow from "./images/leftArrow.png";
import "../../App.css";

const Header=()=>{
    return (
        <div className="headerContainer">
            <img src={leftArrow} alt="left-arrow" height='13px'></img>
            <p className="select">Select Dishes</p>
        </div>
    )
}

export default Header;