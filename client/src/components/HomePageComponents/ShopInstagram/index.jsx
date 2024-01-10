import "./index.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";

const ShopInstagram = () => {
  return (
    <section id="shop-instagram">
      <div className="logo-content">
        <div className="logo">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="52.625px"
            height="53.042px"
            viewBox="0 0 52.625 53.042"
            enable-background="new 0 0 52.625 53.042"
            xml:space="preserve"
          >
            <g>
              <path
                d="M46.215,52.62H6.405c-3.39,0-6.147-2.758-6.147-6.148V6.574c0-3.392,2.758-6.152,6.147-6.152h39.81
                       c3.393,0,6.152,2.76,6.152,6.152v39.897C52.367,49.862,49.607,52.62,46.215,52.62z M6.405,2.531c-2.227,0-4.038,1.813-4.038,4.043
                       v39.897c0,2.228,1.812,4.039,4.038,4.039h39.81c2.229,0,4.043-1.812,4.043-4.039V6.574c0-2.229-1.813-4.043-4.043-4.043H6.405z"
              ></path>
            </g>
            <g>
              <g>
                <path
                  d="M26.186,40.759c-7.563,0-13.716-6.153-13.716-13.716c0-7.56,6.153-13.711,13.716-13.711
                         c7.561,0,13.711,6.151,13.711,13.711C39.896,34.605,33.746,40.759,26.186,40.759z M26.186,15.441
                         c-6.4,0-11.606,5.204-11.606,11.602c0,6.4,5.207,11.606,11.606,11.606c6.397,0,11.602-5.206,11.602-11.606
                         C37.787,20.646,32.583,15.441,26.186,15.441z"
                ></path>
              </g>
            </g>
            <g>
              <g>
                <path
                  d="M41.752,15.744c-2.337,0-4.238-1.899-4.238-4.233c0-2.337,1.901-4.238,4.238-4.238c2.334,0,4.232,1.901,4.232,4.238
                         C45.984,13.845,44.086,15.744,41.752,15.744z M41.752,9.382c-1.174,0-2.129,0.955-2.129,2.129c0,1.171,0.955,2.124,2.129,2.124
                         c1.171,0,2.123-0.953,2.123-2.124C43.875,10.337,42.923,9.382,41.752,9.382z"
                ></path>
              </g>
            </g>
          </svg>
          <h3>Shop INSTAGRAM</h3>
        </div>
        <p>News & updates from TopBike. No spam, we promise.</p>
      </div>
      <div className="posts-slider">
        <Swiper
          freeMode={true}
          slidesPerView= 'auto'
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="post">
              <img
                src="https://topbike-store-demo.myshopify.com/cdn/shop/files/instagram2.jpg?v=1783007436335889357"
                alt=""
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopInstagram;
