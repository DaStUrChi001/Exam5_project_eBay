import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";

const Categories = () => {
    const randomNumber = Math.round(Math.random()*5)
    const categoryId = randomNumber === 0 ? randomNumber+1 : randomNumber;
    const data = useFetchData(`/categories?offset=0&limit=7`);
    return (
        <section className="categories">
            <div>
                <div className="category-title">
                    <h2>Explore Popular Categories</h2>
                    <Link to={`/categories/${categoryId}/products`} className="category-link">See all <FaArrowRight/></Link>
                </div>
                <div className="category-wrapper">
                    {
                        data.map(category =>
                            <a href={`/categories/${category.id}/products`} className="category-item" key={category.id}>
                                <div className="category__image-wrapper">
                                    <img className="category-image" src={category.image} alt="" />
                                </div>
                                <h4>{category.name}</h4>
                            </a>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Categories