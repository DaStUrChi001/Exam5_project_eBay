import React from "react";
import "./Header.scss"
import { Link, useLocation } from "react-router-dom";
import { FaAngleDown, FaRegBell } from "react-icons/fa"
import { BsCart2 } from "react-icons/bs"
import Container from "../../utils/Container";
import { useSelector } from "react-redux";

const Header = () => {
    const {email} = useSelector(data => data)
    const location = useLocation()
    return location.pathname.includes("/login") || location.pathname.includes("/register") ? <></> : (
        <header>
            <Container>
                <div className="account">
                    <div>
                        <span>Hi! <Link className="link" to="/login">{`${email ? email : "Sign_in" }`}</Link> or <Link className="link" to="/register"> {`${email ? email : "Login" }`}</Link></span>
                        <p>Daily Deals</p>
                        <p>Brand Outlet</p>
                        <p>Help & Contact</p>
                    </div>
                    <ul>
                        <li>Sell</li>
                        <li>Watchlist <FaAngleDown className="icon" /></li>
                        <li>My eBay <FaAngleDown className="icon" /></li>
                        <li><FaRegBell className="icon" /></li>
                        <li><BsCart2 className="icon" /></li>
                    </ul>
                </div>
            </Container>
        </header>
    )
}

export default Header