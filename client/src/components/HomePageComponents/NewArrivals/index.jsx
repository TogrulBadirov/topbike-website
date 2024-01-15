import React, { useEffect, useState } from "react";
import Product from "../../Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
import axios from "axios";

const NewArrivals = () => {
  const [bicycles, setBicycles] = useState(null);
  const getAllBicycles = async () => {
    const resp = await axios("http://localhost:5234/bicycle");
    setBicycles(resp.data);
  };
  useEffect(() => {
    getAllBicycles();
  }, []);

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
    centerPadding: "30px",
    touchThreshold: 100,
    prevArrow: <button className="fa fa-angle-left slick-prev-custom"></button>,
    nextArrow: (
      <button className="fa fa-angle-right slick-next-custom"></button>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="new-arrivals">
      <Slider {...settings} style={sliderStyles}>
        {bicycles &&
          bicycles.map((item) => (
            <div key={item._id}>
              <Product item={item}/>
            </div>
          ))}

        
      </Slider>
    </section>
  );
};

export default NewArrivals;
