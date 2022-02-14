/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";
import worksData from "../../data/sections/works.json";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Tilt from 'react-parallax-tilt';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Works3 = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/ionicons.min.css" />
      </Head>
      <section className="work-carousel2 metro section-padding">
      

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 no-padding">
              <div className="swiper-container">
                <Swiper
                  className="swiper-wrapper"
                  slidesPerView={2}
                  centeredSlides={true}
                  autoPlay={true}
                  loop={true}
                  navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      swiper.params.navigation.prevEl =
                        navigationPrevRef.current;
                      swiper.params.navigation.nextEl =
                        navigationNextRef.current;

                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    });
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={1000}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                    },
                    767: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      centeredSlides: false,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                  }}
                >
                  <SwiperSlide className="swiper-slide">
                    <div className="content"><Tilt>
                      <div className="img">
                    <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          
                          <img src="/img/portfolio/print3d.jpg" alt="" />
                        </span>
                      </div></Tilt>
                      <div className="cont">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            Print 3d
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            Concretizarea conceptului
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content"><Tilt>
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          <img src="/img/portfolio/creatie.jpg" alt="" />
                        </span>
                      </div></Tilt>
                      <div className="cont">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                           Creație &amp; grafică
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            Inspirație și cercetare
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content"><Tilt>
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          <img src="/img/portfolio/prod.jpg" alt="" />
                        </span>
                      </div></Tilt>
                      <div className="cont">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            Producție publicitară
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            Livrarea mesajului tău
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content"><Tilt>
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          <img src="/img/portfolio/promotionale.jpg" alt="" />
                        </span>
                      </div></Tilt>
                      <div className="cont">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            Materiale promoționale
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            Pentru cei aproape de tine
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="content"><Tilt>
                      <div className="img">
                        <span className="imgio">
                          <div className="wow cimgio" data-delay="500"></div>
                          <img src="/img/portfolio/webd.jpg" alt="" />
                        </span>
                      </div></Tilt>
                      <div className="cont">
                        <h6>
                          <Link href="/project-details2/project-details2-dark">
                            Web design
                          </Link>
                        </h6>
                        <h4>
                          <Link href="/project-details2/project-details2-dark">
                            Spațiul tău virtual
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                  
                </Swiper>

                <div
                  ref={navigationNextRef}
                  className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-right"></i>
                </div>
                <div
                  ref={navigationPrevRef}
                  className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
                >
                  <i className="ion-ios-arrow-left"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works3;
