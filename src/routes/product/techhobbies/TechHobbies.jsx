import React from "react";
import "./TechHobbies.scss"
import logo from "./a.svg"
import { AiFillPlusCircle } from "react-icons/ai"

const TechHobbies = () => {
    return (
        <div className="tech-hobbies">
            <div className="title">
                <div className="logo-wrapper">
                    <img src={logo} alt="" />
                    <div className="title-wrapper">
                        <h2>Tech Hobbies</h2>
                        <p>99.7% <span>Positive Feedback</span></p>
                        <p>21K <span>Items sold</span></p>
                    </div>
                </div>
                <div className="btn-wrapper">
                    <button>Visit store</button>
                    <button>Contact</button>
                </div>
            </div>
            <div className="text-wrapper">
                <div className="left">
                    <div className="detail">
                        <h3>Detailed seller ratings</h3>
                        <span>Average for the last 12 months</span>
                        <div className="info">
                            <div className="letters">
                                <p>Accurate description</p>
                                <p>Reasonable shipping cost</p>
                                <p>Shipping speed</p>
                                <p>Communication</p>
                            </div>
                            <div className="numbers">
                                <p>4.9</p>
                                <p>5.0</p>
                                <p>5.0</p>
                                <p>5.0</p>
                            </div>
                        </div>
                    </div>
                    <div className="categories">
                        <h3>Popular categories from this store <span>See all</span></h3>
                        <button>Cell Phones & Accessories</button>
                    </div>
                </div>
                <div className="right">
                    <h3>Seller feedback <span>(2,782)</span></h3>
                    <div className="item">
                        <p>This item (5)</p>
                        <p>All items (2,782)</p>
                    </div>
                    <ul className="right-items">
                        <li>
                            <div className="icon">
                                <AiFillPlusCircle />
                                <span>i***u (74)</span>
                                <span>Past month</span>
                            </div>
                            <p>is working well</p>
                            <div className="line"></div>
                        </li>
                        <li>
                            <div className="icon">
                                <AiFillPlusCircle />
                                <span>n***b (903)</span>
                                <span>Past month</span>
                            </div>
                            <p>Great seller</p>
                            <div className="line"></div>
                        </li>
                        <li>
                            <div className="icon">
                                <AiFillPlusCircle />
                                <span>v***o (916)</span>
                                <span>Past month</span>
                            </div>
                            <p>Phone looks great in promised excellent condition and I love the complimentary screen protector; appreciate the fast shipping too.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default TechHobbies