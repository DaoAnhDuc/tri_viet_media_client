import { useEffect } from 'react';
// import Swiper core and required modules
import { Autoplay, Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {};

const SlideShow = ({}: Props) => {
  const data = [
    { src: './images/b1.jpg' },
    {
      src: './images/b2.jpg',
    },
    {
      src: './images/b3.jpg',
    },
  ];
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      loop={true}
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: true }}
      onSwiper={(swiper: any) => console.log(swiper)}
      onSlideChange={() => {}}
    >
      {data.map((i) => (
        <SwiperSlide key={i.src}>
          <section
            className="hero-section d-flex justify-content-center align-items-center"
            id="section_1"
            style={{
              backgroundImage: `url('${i.src}')`,
              backgroundSize: 'cover',
            }}
          >
            {/* <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-12 mx-auto">
                  <h1>Trí Việt Media</h1>

                  <p className="text-white mb-4 pb-lg-2">
                    your <em>favourite</em> coffee daily lives.
                  </p>

                  <a
                    className="btn custom-btn custom-border-btn smoothscroll me-3"
                    href="#section_2"
                  >
                    Our Story
                  </a>

                  <a
                    className="btn custom-btn 
                          smoothscroll me-2 mb-2"
                    href="#section_3"
                  >
                    <strong>Check Menu</strong>
                  </a>
                </div>
              </div>
            </div>
            <div className="hero-slides" /> */}
          </section>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
