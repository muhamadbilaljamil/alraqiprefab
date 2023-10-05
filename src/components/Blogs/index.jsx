import React, { useEffect, useState, useLayoutEffect } from "react";
import "./Blogs.css";
import { getUserData } from "../../api/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const Blogs = () => {
  const [postList, setPostList] = useState([]);
  const [size, setSize] = useState(3);
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 950 && window.innerHeight > 670) {
        setSize(2);
        setPostList(postList);
        console.log(window.innerWidth, 2);
      }
      if (window.innerWidth < 670) {
        {
          setSize(1);
          setPostList(postList);
          return console.log(window.innerWidth, 1);
        }
      }
      if (window.innerWidth > 949) {
        setSize(3);
        setPostList(postList);
        console.log(window.innerWidth, 3);
      }
    }

    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const getMediumUser = async () => {
      const user = await getUserData();
      return setPostList(user);
    };
    getMediumUser();
  }, []);

  return (
    <div className="blogs-wrapper" id="blogs">
      <div className="container-wrapper">
        <div className="blogs-content">
          <div className="bg-layer"></div>
          <div className="content">
            <div className="title">
              <h3> Blogs </h3>
              <div className="blogs-title-b-border"></div>
            </div>
            <div className="blog-post-wrapper">
              <div className="main-content">
                <div className="cards-list">
                  <Swiper
                    // className="slide-swiper"
                    modules={[Autoplay, Navigation, Pagination]}
                    // spaceBetween={50}
                    slidesPerView={size}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                    navigation={true}
                    pagination={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                    loopPreventsSliding={true}
                  >
                    {postList.map((post, index) => {
                      return (
                        <SwiperSlide key={index}>
                          <a href={post.link} target="_blank">
                            <div className="card">
                              <div className="icon">
                                <img src={post.coverPhoto} alt="Payment logo" />
                              </div>
                              <div className="card-info">
                                <div className="headings">
                                  <div className="card-title">{post.title}</div>
                                  <div className="card-description"></div>
                                </div>
                                <div className="published-info">
                                  <div className="publish-by">
                                    By: {post.author}
                                  </div>
                                  <div className="divider"></div>
                                  <div className="publish-at">
                                    On: {post.publishAt}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </a>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
                <div className="gradient-border"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
