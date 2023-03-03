import React from "react";
import "./Footer.scss"
import { FaFacebookSquare, FaTwitterSquare } from "react-icons/fa"
import { AiOutlineExclamationCircle } from "react-icons/ai"
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation()
    return location.pathname.includes("/login") || location.pathname.includes("/register") || location.pathname.includes("/product") ? <></> : (
        <footer className="site-footer">
            <div className="line"></div>
            <div className="footer-wrapper">
                <div className="buy">
                    <h5>Buy</h5>
                    <ul>
                        <li>Registration</li>
                        <li>eBay Money Back Guarantee</li>
                        <li>Bidding & buying help</li>
                        <li>Stores</li>
                        <li>eBay for Charity</li>
                        <li>Charity Shop</li>
                        <li>Seasonal Sales and events</li>
                    </ul>
                </div>
                <div className="sell-wrapper">
                    <div className="sell">
                        <h5>Sell</h5>
                        <ul>
                            <li>Start selling</li>
                            <li>How to sell</li>
                            <li>Business sellers</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>
                    <div className="tools">
                        <h5>Tools & apps</h5>
                        <ul>
                            <li>Developers</li>
                            <li>Security center</li>
                            <li>Site map</li>
                        </ul>
                    </div>
                </div>
                <div className="connect">
                    <h5>Stay connected</h5>
                    <ul>
                        <li><FaFacebookSquare />Facebook</li>
                        <li><FaTwitterSquare />Twitter</li>
                    </ul>
                </div>
                <div className="about">
                    <h5>About eBay</h5>
                    <ul>
                        <li>Company info</li>
                        <li>News</li>
                        <li>Investors</li>
                        <li>Careers</li>
                        <li>Diversity & Inclusion</li>
                        <li>Global Impact</li>
                        <li>Government relations</li>
                        <li>Advertise with us</li>
                        <li>Policies</li>
                        <li>Verified Rights Owner (VeRO) Program</li>
                        <li>eCl Licenses</li>
                    </ul>
                </div>
                <div className="more-info">
                    <div className="help">
                        <h5>Help & Contact</h5>
                        <ul>
                            <li>Seller Center</li>
                            <li>Contact Us</li>
                            <li>eBay Returns</li>
                        </ul>
                    </div>
                    <div className="community">
                        <h5>Community</h5>
                        <ul>
                            <li>Announcements</li>
                            <li>eBay Community</li>
                            <li>eBay for Business Podcast</li>
                        </ul>
                    </div>
                    <div className="sites">
                        <h5>eBay Sites</h5>
                        <select>
                            <option value="US">United States</option>
                            <option value="GB">Great Britian</option>
                            <option value="RU">Russian</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="links">
                <p>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</p>
                <span>Accessibility</span>,
                <span>User Agreement</span>,
                <span>Privacy</span>,
                <span>Payments Terms of Use</span>,
                <span>Cookies</span>,
                <span>Your Privacy Choices</span> and
                <span>AdChoice</span>
                <AiOutlineExclamationCircle />
            </div>
        </footer>
    )
}

export default Footer