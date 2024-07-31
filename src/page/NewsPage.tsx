import {} from 'react';
import Header from './HomeLayout/1.Header';
import Footer from './HomeLayout/11.Footer';
import LienHe from './HomeLayout/10.LienHe';
import { Link } from 'react-router-dom';

type Props = {};

const NewsPage = ({}: Props) => {
  return (
    <main>
      <Header />
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
        style={{
          backgroundImage: `url('https://livestreamchuyennghiep.vn/wp-content/uploads/2021/03/Dich-Vu-Livestream-hoi-thao.jpg')`,
          backgroundSize: 'cover',
          position: 'relative',
          maxHeight: 300,
          minHeight: 300,
        }}
      />
      <section
        className="barista-section section-padding "
        id="section_4"
        style={{ padding: '40px 0' }}
      >
        <div className="container">
          <div
            style={{ display: 'flex', flexWrap: 'wrap' }}
            className="card-container"
          >
            <div style={{ display: 'flex', gap: 40 }}>
              <div style={{ flex: 1 }} className="row justify-content-center">
                {Array.from(Array(10).keys()).map((i) => (
                  <Link to={'/tin-tuc-chi-tiet'}>
                    <div
                      key={i}
                      style={{ display: 'flex', gap: 20 }}
                      className="col-lg-12 col-md-12 col-12 mb-3"
                    >
                      <img
                        style={{ width: 320, height: 180 }}
                        src="https://photo.znews.vn/w1000/Uploaded/mdf_uswreo/2024_07_31/adam_peatyDa_xac_minh_Theo_doiLuan_Don_1080w_1.jpg"
                        alt="Scent marketing"
                      />
                      <div>
                        <h5>Scent marketing - Hương vị ngọt ngào </h5>
                        <p style={{ textAlign: 'justify' }}>
                          Các hoạt động marketing có tác động đến các giác quan
                          không còn xa lạ Lorem ipsum dolor sit amet,
                          consectetur adipisicing elit. Maxime excepturi rerum
                          impedit eaque cum inventore. Explicabo provident
                          nostrum sint soluta vel atque deserunt exercitationem
                          excepturi totam, quaerat cum neque cupiditate.
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div
                style={{
                  width: 340,
                  // background: 'var(--section-bg-color)',
                  padding: 10,
                  height: 'fit-content',
                  border: '1px solid #dfdfdf',
                }}
              >
                <div
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    margin: '10px 0',
                    marginTop: 0,
                  }}
                >
                  Đọc nhiều
                </div>
                {Array.from(Array(5).keys()).map((i) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: 10 }}
                    className="col-lg-12 col-md-12 col-12 mb-2"
                  >
                    <img
                      style={{ width: 80, height: 80 }}
                      src="https://photo.znews.vn/w1000/Uploaded/mdf_uswreo/2024_07_31/adam_peatyDa_xac_minh_Theo_doiLuan_Don_1080w_1.jpg"
                      alt="Scent marketing"
                    />
                    <div style={{ fontSize: 16, fontWeight: 'bold' }}>
                      Scent marketing - Hương vị ngọt ngào
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <LienHe />
      <Footer />
    </main>
  );
};

export default NewsPage;
