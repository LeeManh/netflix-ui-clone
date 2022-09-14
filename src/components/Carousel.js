import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carousel() {
  const [swiper, setSwiper] = useState();

  const prevRef = useRef();
  const nextRef = useRef();

  useEffect(() => {
    if (swiper && Object.keys(swiper).length !== 1) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  return (
    <div className="wrapper group relative">
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        // loop={true}
        navigation={{
          prevEl: prevRef?.current,
          nextEl: nextRef?.current,
        }}
        onSwiper={setSwiper}
        breakpoints={{
          640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        className="!overflow-visible"
      >
        {Array.from(Array(20)).map((_, index) => {
          return (
            <SwiperSlide key={index}>
              <MovieItem />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <button className="btn-slide group left-0" ref={prevRef}>
        <FaChevronLeft className="arrow-slide" />
      </button>
      <button className="btn-slide group right-0" ref={nextRef}>
        <FaChevronRight className="arrow-slide" />
      </button>
    </div>
  );
}
