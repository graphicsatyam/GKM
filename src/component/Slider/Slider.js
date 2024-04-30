import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';


const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src='images/banner1.jpg' alt= ""/> </SwiperSlide>
        <SwiperSlide> <img src='images/banner2.jpg' alt= ""/> </SwiperSlide>
        <SwiperSlide> <img src='images/banner3.jpg' alt= ""/> </SwiperSlide>
        <SwiperSlide> <img src='images/banner4.jpg' alt= ""/> </SwiperSlide>
        <SwiperSlide> <img src='images/banner5.jpg' alt= ""/> </SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Slider
