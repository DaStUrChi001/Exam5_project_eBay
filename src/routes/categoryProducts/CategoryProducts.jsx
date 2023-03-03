import React from "react";
import "./CategoryProducts.scss"
import img from "./s-l1200.webp.svg"
import Search from "../../components/search/Search"
import { useParams } from "react-router-dom";
import Container from "../../utils/Container";
import useFetchData from "../../hooks/useFetchData";
import { HiBadgeCheck } from "react-icons/hi"
import Guarantee from "./guarantee/Guarantee";
import Footer from "./footer/Footer";

const CategoryProducts = () => {
    const id = useParams()
    const categoryId = id.id
    const data = useFetchData("/categories?offset=0&limit=5")
    const categoryProductsData = useFetchData(`/categories/${categoryId}/products?offset=0&limit=42`)

    function trimDeskription(str) {
        return str.split(" ").splice(0, 10).join(" ") + "..."
    }
    return (
        <Container>
            <Search />
            <section className="category-products">
                <div className="title">
                    <h1>Featured Event</h1>
                    <img src={img} alt="" />
                    <p>Up to 60% off Apple tech</p>
                    <span>Save on AirPods, iPhones, and more</span>
                </div>
                <div className="categories">
                    <h2>Shop by Category</h2>
                    <div className="categories-wrapper">
                        {
                            data.map(category =>
                                <a href={`/categories/${category.id}/products`} className="category-item" key={category.id}>
                                    <div className="category__image-wrapper">
                                        <img className="category-image" src={category.image} alt="" />
                                    </div>
                                    <h3>{category.name}</h3>
                                </a>
                            )
                        }
                    </div>
                </div>
                <div className="all-products">
                    {
                        categoryProductsData.length > 0 ?
                        categoryProductsData.map(product =>
                            <div className="product-item" key={product.id}>
                                <a href={`/product/${product.id}`}>
                                    <img className="product-item__image" src={product.images?.at(0)} alt="" />
                                    <h4>{product.title}</h4>
                                </a>
                                <div className="product-info-wrapper">
                                    <div className="product-info">
                                        <p>{trimDeskription(product.description)}</p>
                                        <strong>${product.price}</strong>
                                        <span>Was: <s>${product.price * 2}</s></span>
                                        <span>Free shipping</span>
                                        <span className="red">{Math.round(Math.random() * 10000)} sold</span>
                                        <p><HiBadgeCheck />eBay Refurbished</p>
                                    </div>
                                    <p>SPONSORED</p>
                                </div>
                            </div>
                        ) : <div style={{width: "900px", marginTop: "20%" ,color: "red", fontSize: "30px", textAlign: "center"}}>Sorry, there are currently no products in this category</div> 
                    }
                </div>
                <Guarantee/>
            </section>
            <Footer/>
        </Container>
    )
}

export default CategoryProducts