import React from "react";
import "./DestinationsList.scss"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";

const DestinationsList = () => {
    const randomNumber = Math.round(Math.random() * 5)
    const categoryId = randomNumber === 0 ? randomNumber + 1 : randomNumber;
    const data = useFetchData(`/categories/${categoryId}/products?offset=0&limit=7`)
    return (
        <section className="destinations-list">
            <div>
                <div className="destination-title">
                    <h2>Extra 20% off for President's Day</h2>
                    <Link to={`/categories/${categoryId}/products`} className="destination-link">See all <FaArrowRight /></Link>
                </div>
                <div className="destination-wrapper">
                    {
                        data.map(destination =>
                            <a href={`/product/${destination.id}`} className="destination-item" key={destination.id}>
                                <div className="destination__image-wrapper">
                                    <img className="destination-image" src={destination.images?.at(0)} alt="" />
                                </div>
                                <h4>{destination.title}</h4>
                            </a>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default DestinationsList