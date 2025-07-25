import React from "react";
import './testimonial.css'
import AVTR1 from '../../asset/avatar1.jpg'
import AVTR2 from '../../asset/avatar2.jpg'
import AVTR3 from '../../asset/avatar3.jpg'
import AVTR4 from '../../asset/avatar4.jpg'
import USERICON from '../../asset/user-icon.png'
// import Swiper core and required modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


const Testimonial = () => {


  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonial</h2>

      <Swiper className="container  testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {/* {
           data.map(({ img1, name , review}) =>{
            return (
                <SwiperSlide className="testimonial">
             <div className="client__avatar">
               <img src= {img1} alt="" />
             </div>
             <h5 className="clent__name">{name}</h5>
               <small className="client__review">
                {review}
               </small>
          </SwiperSlide>
            )
           } )
        } */}
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={USERICON} alt="" />
          </div>
          <h5 className="clent__name">Prveen Patel</h5>
          <small className="client__review">
            ARM App is user-friendly and efficient — it made managing my tasks so much easier.
          </small>
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={USERICON} alt="" />
          </div>
          <h5 className="clent__name">Ashok Khichi</h5>
          <small className="client__review">
            Reliable and efficient, the S3 library client simplifies file storage and retrieval with seamless AWS integration.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={USERICON} alt="" />
          </div>
          <h5 className="clent__name">Ashok kumar</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolore!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={USERICON} alt="" />
          </div>
          <h5 className="clent__name">Elien monk</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, dolore!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )

}
export default Testimonial;