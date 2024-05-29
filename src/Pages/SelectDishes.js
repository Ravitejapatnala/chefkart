import React from "react";
import Header from "../Components/Header/Header";
import PopularDishes from "../Components/Popular Dishes/PopularDishes";
import Recommended from "../Components/Recommended/Recommended";

const SelectDishes=()=>{
    return(
        <div>
            <Header/>
            <PopularDishes/>
            <Recommended/>
        </div>
    )
}

export default SelectDishes;