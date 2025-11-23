import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HeroSlider.scss";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/images/slider1.jpg",
      title: "Modern Interior Design Studio",
      description: "Crafting spaces that blend functionality with aesthetic perfection.",
      buttonText: "Explore Now",
    },
    {
      id: 2,
      image: "/assets/images/slider4.png",
      title: "Premium Ceramic Collections",
      description: "Discover our exclusive range of high-quality ceramic tiles.",
      buttonText: "Explore Now",
    },
    {
      id: 3,
      image: "/assets/images/slider2.png",
      title: "Redefining Elegance & Style",
      description: "Transform your home with our timeless and elegant designs.",
      buttonText: "Explore Now",
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
              <div className="container">
                <div className="slide-content">
                  <h1>{slide.title}</h1>
                  <p>{slide.description}</p>
                  <Link className="btn" to="/collections">{slide.buttonText}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSlider;
