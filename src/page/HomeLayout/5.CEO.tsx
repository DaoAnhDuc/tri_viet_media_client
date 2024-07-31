import {} from 'react';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
type Props = {};

const CEO = ({}: Props) => {
  return (
    <section className="about-section section-padding" id="section_5">
      <div className="section-overlay" />
      <div className="container">
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          onSwiper={(swiper: any) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {[1, 2, 3, 4, 5].map((i) => (
            <SwiperSlide key={i}>
              <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                  <div className="ratio ratio-1x1">
                    <img
                      src="https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2024/4/15/tim-cook-1713150501776971731304-32-0-1079-2000-crop-1713151094556426942594.jpg"
                      className="ratio ratio-1x1"
                      alt=""
                    />
                    <div className="about-video-info d-flex flex-column">
                      <h4 className="mt-auto">We Started Since 2009.</h4>
                      <h4>Best in Media.</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mt-4 mt-lg-0 mx-auto">
                  <h2 className="text-white mb-3">CEO Đặng Ngọc Anh {i}</h2>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Velit voluptas sed id, quibusdam sapiente magni rem quaerat
                    optio, delectus quos quia quod sit minima cumque fugiat quo
                    saepe animi expedita.
                  </p>
                  <p className="text-white">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Saepe in et at temporibus ad vel alias nobis doloremque
                    nulla veritatis sint debitis excepturi officia, dicta neque
                    iusto facilis eaque. Voluptas.{' '}
                    <a
                      rel="nofollow"
                      href="https://www.tooplate.com"
                      target="_blank"
                    >
                      Tooplate
                    </a>
                    .
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CEO;
