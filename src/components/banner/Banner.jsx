import React from "react";
import "./Banner.scss"
import { FiHeart } from "react-icons/fi";
import bannerImg from "./bannerImg.svg"
import ad from "./Ad.svg"

const Banner = () => {
  return (
    <section>
        <div className="banner-wrapper">
            <ul>
                <li>Home</li>
                <li><FiHeart/> Saved</li>
                <li>Motors</li>
                <li>Electronics</li>
                <li>Collectibles</li>
                <li>Home & Garden</li>
                <li>Fashion</li>
                <li>Toys</li>
                <li>Sporting Goods</li>
                <li>Business & Industrial</li>
                <li>Jewelry & Watches</li>
                <li>eBay Live</li>
                <li>Refurbished</li>
            </ul>
            <img className="banner-img" src={bannerImg} alt="" />
            <img className="ad" src={ad} alt="" />
        </div>
    </section>
  )
}

export default Banner