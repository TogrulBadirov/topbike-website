import React from "react";
import Product from "../../Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";

const NewArrivals = () => {
    const sliderStyles = {
        transition: "transform 3s ease",
      };
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        autoplay: true,
        speed: 400,
        autoplaySpeed: 4000,
        swipeToSlide: true,
        centerMode: true,
        centerPadding: '30px',
        touchThreshold: 100,
        prevArrow: <button className="fa fa-angle-left slick-prev-custom"></button>,
        nextArrow: <button className="fa fa-angle-right slick-next-custom"></button>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3,
                }
              },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
      };

  return (
    <section id="new-arrivals">
      <Slider {...settings} style={sliderStyles}>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
        <div>
          <Product />
        </div>
      </Slider>
    </section>
  );
};

export default NewArrivals;
