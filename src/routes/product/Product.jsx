import React from "react";
import "./Product.scss";
import vector from "./Vector.svg"
import { FaChevronLeft, FaCaretRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Container from "../../utils/Container"
import Search from "../../components/search/Search";
import TechHobbies from "./techhobbies/TechHobbies";
import Footer from "./footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = () => {
    const productIdData = useParams();
    const data = useFetchData(`/products/${productIdData.id}`)
    const categoryData = useFetchData(`/categories/${Math.ceil(Math.random() * 5)}/products?offset=0&limit=42`)
    function trimDeskription(str) {
        return str.split(" ").splice(0, 10).join(" ") + "..."
    }
    return (
        <>
            <Container>
                <Search />
                <section className="single-product">
                    <div className="single-product-wrapper">
                        <div className="links">
                            <ul>
                                <Link className="icon" to="/"><FaChevronLeft /></Link>
                                <li>Back to home page</li>
                                <li>| Listed in category: </li>
                                <li>Electronics </li>
                                <li><img src={vector} alt="" /> Cell Phones & Accessories </li>
                                <li><img src={vector} alt="" /> Cell Phones & Smartphones</li>
                            </ul>
                            <div>
                                <p>Share</p>|<p>Add to Watchlist</p>
                            </div>
                        </div>
                        <div>
                            <p>EXTRA <span>$10</span> OFF 3+ ITEMS WITH CODE <span>10OFF2023TECH</span></p>
                            <a href="/">See all eligible items and terms <FaCaretRight /></a>
                        </div>
                        <div className="product-wrapper">
                            <div className="product-items">
                                <div className="product-image">
                                    <img src={data.images?.at(0)} alt="" />
                                </div>
                                <div className="product-info">
                                    <h1>{data.title}</h1>
                                    <p>Description: <span>{data.description}</span></p>
                                    <div className="wrapper">
                                        <p>Category: <input placeholder={data.category?.name} disabled /></p>
                                        <p>Id: <input placeholder={data.id} disabled /></p>
                                        <p>Remains only: <input placeholder={`${data.price * 5}`} disabled /></p>
                                        <p>Title: <input placeholder={data.title} disabled /></p>
                                        <p>Discount: <input placeholder={`${Math.round(Math.random() * 60)}%`} disabled /></p>
                                        <p>CreationAt: <input placeholder={data.creationAt} disabled /></p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="btns">
                                        <div className="price-wrapper">
                                            <p>Price: <span>US ${data.price}</span></p>
                                            <p>No Interest if paid in full in 6 mo on $99+*</p>
                                        </div>
                                        <div className="btn-wrapper">
                                            <button>Buy It Now</button>
                                            <button>Add to cart</button>
                                            <button>Add to Watchlist</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="other-products">
                        <div className="title">
                            <h3>Sponsored items customers also bought</h3>
                            <p>Feedback on our suggestions</p>
                        </div>
                        <div className="carousel-wrapper">
                            <Swiper
                                slidesPerView={1}
                                centeredSlides={false}
                                slidesPerGroupSkip={0}
                                grabCursor={true}
                                keyboard={{
                                    enabled: true,
                                }}
                                breakpoints={{
                                    769: {
                                        slidesPerView: 4.5,
                                        slidesPerGroup: 4,
                                    },
                                }}
                                rewind={true}
                                navigation={true}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                                className="mySwiper"
                            >
                                {
                                    categoryData.map(products =>
                                        <SwiperSlide key={products.id}>
                                            <a className="card" href={`/product/${products.id}`}>
                                                <img src={products.images?.at(0)} alt="" />
                                                <h4>{products.title}</h4>
                                                <p>{trimDeskription(products.description)}</p>
                                                <span>Pre-owned</span>
                                                <p>${products.price}</p>
                                                <span>Free Shipping</span>
                                                <p>{`${Math.round(Math.random() * 1000)}`} sold</p>
                                            </a>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        </div>
                    </div>
                </section>
                <TechHobbies />
                <Footer />
            </Container>
        </>
    )
}

export default Product