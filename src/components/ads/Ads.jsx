import React from "react";
import "./Ads.scss"
import adsImg from "./ads_combo.svg"

const Ads = () => {
    return (
        <div className="ads-img-wrapper">
            <img src={adsImg} alt="" />
        </div>
    )
}

export default Ads