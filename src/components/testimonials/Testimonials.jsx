import React from "react";
import "./testimonials.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { data } from "./testim";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Do People Say</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, comp, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Img1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-light)",
                  marginBottom: "0.8rem",
                }}
              >
                {comp}
              </p>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
