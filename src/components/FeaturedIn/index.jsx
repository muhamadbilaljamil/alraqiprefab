import React from 'react';
import './FeaturedIn.css';
import featuredIN from '../../assets/images/featured-in-1.png'
import coinJournal from '../../assets/images/coin-journal.webp'

// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const FeaturedIn = () => {
    return (
        <div className="featured-in-wrapper">
            <div className="container-wrapper">
                <div className="featured-in-content">
                    <div className="bg-layer"></div>
                    <div className="content">
                        <div className="title">Featured In</div>
                        <div className="description-list">
                            <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                slidesPerView={2}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                autoplay={{delay: 5000}}
                                loop={true}
                                loopPreventsSliding={true}
                            >
                                <SwiperSlide className="slide">
                                    <div className="slide-image">
                                        <img src={featuredIN} alt="Featured in" className="the-crypto"/>
                                    </div>
                                    <h4 className="slide-title">THE CRYPTO BASIC</h4>
                                    <div className="slide-title-b-border"></div>
                                </SwiperSlide>
                                <SwiperSlide className="slide">
                                    <div className="slide-image">
                                        <img src={coinJournal} alt="Featured in" className="the-crypto"/>
                                    </div>
                                    <h4 className="slide-title">COIN JOURNAL</h4>
                                    <div className="slide-title-b-border"></div>
                                </SwiperSlide>
                                <SwiperSlide className="slide">
                                    <div className="slide-image">
                                        <img src={featuredIN} alt="Featured in" className="the-crypto"/>
                                    </div>
                                    <h4 className="slide-title">THE CRYPTO BASIC</h4>
                                    <div className="slide-title-b-border"></div>
                                </SwiperSlide>
                                <SwiperSlide className="slide">
                                    <div className="slide-image">
                                        <img src={coinJournal} alt="Featured in" className="the-crypto"/>
                                    </div>
                                    <h4 className="slide-title">COIN JOURNAL</h4>
                                    <div className="slide-title-b-border"></div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default FeaturedIn
