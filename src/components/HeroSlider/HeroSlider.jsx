import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.scss";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/src/assets/images/slider1.jpg",
      caption: "Modern Interior Design Studio",
    },
    {
      id: 2,
      image: "/src/assets/images/slider2.jpg",
      caption: "Premium Ceramic Collections",
    },
    {
      id: 3,
      image: "/src/assets/images/slider3.jpg",
      caption: "Redefining Elegance & Style",
    },
  ];

  return (
    <section className="hero-slider">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide-bg"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>
              {/* <div className="slide-content">
                <h1>{slide.caption}</h1>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
