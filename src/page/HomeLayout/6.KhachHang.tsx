import {} from 'react';
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
type Props = {};

const KhachHang = ({}: Props) => {
  const logoUrls = [
    'https://storage.googleapis.com/f1-cms/2019/10/d0abb962-20200108_024344.jpg',
    ' https://storage.googleapis.com/f1-cms/2019/10/f6261a83-20200108_024635.jpg',
    ' https://storage.googleapis.com/f1-cms/2019/10/e4e65bee-20200108_024842.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/89668ff8-20200108_024905.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/1994237e-20200108_024930.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/fee9a69f-20200108_035705.jpg',
    ' https://storage.googleapis.com/f1-cms/2019/10/c6487eda-20200108_035729.jpg',
    ' https://storage.googleapis.com/f1-cms/2019/10/4a998273-20200108_035814.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/c138f8f6-20200108_035849.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/8be8474e-20200108_035932.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/59aa7469-20200108_035954.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/68bc832a-20200108_040050.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/b3616764-20200108_040116.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/5636dcde-20200108_040139.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/4467dcba-20200108_040213.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/30f2d71a-20200108_040238.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/c1587ab9-20200108_040303.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/5c15f177-20200108_040416.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/d17c2b49-20200108_040449.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/3c9ba34f-20200108_040513.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/d6db508a-20200108_040537.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/e2e633d1-20200108_040558.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/cfa06968-20200108_040622.jpg',
    'https://storage.googleapis.com/f1-cms/2019/10/b09264f7-20200108_040641.jpg',
  ];
  return (
    <section
      className="barista-section section-padding section-bg"
      id="section-6"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4">
            {/* <em class="text-white">Creative Baristas</em> */}

            <h2 className="text-white">Khách hàng của chúng tôi</h2>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={5}
            pagination={{ clickable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {logoUrls.map((i) => (
              <SwiperSlide>
                <img
                  src={i}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default KhachHang;
