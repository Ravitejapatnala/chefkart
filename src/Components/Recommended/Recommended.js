import React from "react";
import "../../App.css";
import dropdown from "./images/drop-down-arrow.png";
import veg from "./images/veg_symbol.png";
import fridge from "./images/fridge.png";
import oven from "./images/microwave-oven.png";
import next from "./images/next.png";
import nonVeg from "./images/Non_veg_symbol.svg.png";
import menu from "./images/menu.png";
import right from "./images/right-arrow.png"
import { NavLink } from "react-router-dom";

const Recommended=()=>{
    return(
        <div className="scroll">
            <div className="recommended-items">
                <div className="dropdown">
                    <h1>Recommended</h1>
                    <img src={dropdown} alt="dropdown" height='20px'></img>
                </div>
                <button className="menu">Menu</button>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Masala Muglai</h2>
                        <img src={veg} alt="veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.2</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="fridge">
                                <img src={fridge} alt="fridge" height='20px'></img>
                                <p>Refrigerator</p>
                            </div>
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <NavLink className='active' to='/details'>View List</NavLink>
                                <img className="next" src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Chicken fried in deep tomato sauce with<br/>delicious spices</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-1"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Masala Paneer</h2>
                        <img src={veg} alt="veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.3</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <p>View List</p>
                                <img src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Paneer tossed in gravy</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-2"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Biryani</h2>
                        <img src={nonVeg} alt="non-veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.2</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <p>View List</p>
                                <img src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Fragrant rice and tender meat cooked with<br/> rich spices.</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-3"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Daal Batti</h2>
                        <img src={veg} alt="veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.2</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <p>View List</p>
                                <img src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Lentils, wheat rolls, Rajasthani specialty,<br/>aromatic</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-4"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Veg Korma</h2>
                        <img src={veg} alt="veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.2</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <p>View List</p>
                                <img src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Assorted vegetables in creamy, aromatic<br/>gravy</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-5"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="items">
                <div className="item-left">
                    <div className="item-details">
                        <h2 className="item-name">Chicken Korma</h2>
                        <img src={nonVeg} alt="non-veg-logo" height='20px'></img>
                        <div className="rating">
                            <p className="rate">4.2</p>
                            <span className="star">&#9733;</span>
                        </div>
                    </div>

                    <div className="equipment">
                        <div className="fridgeAndOven">
                            <div className="oven">
                                <img src={oven} alt="oven" height='20px'></img>
                                <p>Microwave</p>
                            </div>
                        </div>
                        <div className="vertical"></div>
                        <div className="ingrediants">
                            <p>Ingrediants</p>
                            <div className="view">
                                <p>View List</p>
                                <img src={next} alt="next" height='10px'></img>
                            </div>
                        </div>
                    </div>

                    <div className="description">
                        <p>Tender chicken in rich, fragrant creamy<br/>sauce</p>
                    </div>
                </div>
                <div className="item-right">
                    <div className="item-image-6"></div>
                    <div className="add">Add</div>
                </div>
            </div>

            <div className="cart">
                <div className="cart-left">
                    <img src={menu} alt="menu"></img>
                    <p>3 food items selected</p>
                </div>
                <div>
                    <img src={right} alt="right"></img>
                </div>
            </div>

            <div className="extra-space"></div>
        </div>
    )
}

export default Recommended;