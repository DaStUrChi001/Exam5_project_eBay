import React from "react";
import "./Footer.scss"
import { AiOutlineExclamationCircle } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="product-footer">
            <ul className="footer-nav">
                <li>About eBay</li>
                <li>Announcements</li>
                <li>Community</li>
                <li>Security Center</li>
                <li>Seller Centter</li>
                <li>Policies</li>
                <li>Affiliates</li>
                <li>Help & Contact</li>
                <li>Site Map</li>
            </ul>
            <div className="text">
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
        </div>
    )
}

export default Footer