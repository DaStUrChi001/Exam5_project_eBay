import React from "react";
import "./ItemsList.scss"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ItemsList = () => {
    const randomNumber = Math.round(Math.random()*5)
    const categoryId = randomNumber === 0 ? randomNumber+1 : randomNumber;
    const data = useFetchData(`/categories/${categoryId}/products?offset=0&limit=50`)
    return (
        <section className="items-list">
            <div>
                <div className="items-title">
                    <h2>Today's Deals – All With Free Shipping</h2>
                    <Link to={`/categories/${categoryId}/products`} className="items-link">See all <FaArrowRight /></Link>
                </div>
                <div className="items-wrapper">
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
                            slidesPerView: 5.5,
                            slidesPerGroup: 5,
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
                            data.map(item =>
                                <SwiperSlide  key={item.id}>
                                    <a className="link" href={`/product/${item.id}`}>
                                        <img src={item.images?.at(0)} alt="" />
                                        <div className="items-cost">
                                            <h3>${item.price * 0.3}</h3>
                                            <s>${item.price}</s> <span>· -72% OFF</span>
                                        </div>
                                    </a>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default ItemsList