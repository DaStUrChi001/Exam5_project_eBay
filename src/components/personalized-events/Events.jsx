import React from "react";
import "./Events.scss";
import { FaArrowRight } from "react-icons/fa";
import useFetchData from "../../hooks/useFetchData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Events = () => {
    const randomNumber = Math.round(Math.random() * 5)
    const categoryId = randomNumber === 0 ? randomNumber + 1 : randomNumber;
    const data = useFetchData(`/categories/${categoryId}/products?offset=0&limit=50`)
    return (
        <section className="personalized-events">
            <div className="discount">
                <h2>Up to 60% off home must-haves</h2>
                <p>Shop mattresses, toppers, and more</p>
                <button>Shop Now <FaArrowRight /></button>
            </div>
            <div className="cards-wrapper">
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
                        data.map(product =>
                            <SwiperSlide key={product.id}>
                                <a className="link" href={`/product/${product.id}`}>
                                    <img src={product.images?.at(0)} alt="" />
                                    <div className="product-cost">
                                        <h3>${product.price * 0.4}</h3>
                                        <s>${product.price}</s> <span>· -60% OFF</span>
                                    </div>
                                </a>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Events