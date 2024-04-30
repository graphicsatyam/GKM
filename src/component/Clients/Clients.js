import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Clients.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function Clients() {
  return (
    <div className='clients_css'>
    <div className='heading' id='clients'> AUTHORIZED DISTRIBUTOR </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> <img src="images/cl1.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="images/cl2.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="images/cl3.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="images/cl4.jpg" alt="" /> </SwiperSlide>
        <SwiperSlide> <img src="images/cl5.jpg" alt="" /> </SwiperSlide>
      </Swiper>
    </div>
  );
}
