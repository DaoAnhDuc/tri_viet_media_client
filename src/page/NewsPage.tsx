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
        id="news-page-section"
        style={{ padding: '40px 0' }}
      >
        <div className="container">
          <div
            style={{ display: 'flex', flexWrap: 'wrap' }}
            className="card-container"
          >
            <div style={{ display: 'flex', gap: 40 }}>
              <div style={{ flex: 1 }} className="row justify-content-center">
                {Array.from(Array(9).keys()).map((i, index) => (
                  <div
                    key={i}
                    style={{ display: 'flex', gap: 20 }}
                    className="col-lg-4 col-md-6 col-12 mb-3"
                  >
                    {' '}
                    <Link to={'/tin-tuc-chi-tiet'}>
                      <div
                        className="new-item"
                        style={{
                          display: 'flex',
                          flexDirection:
                            index % 3 === 1 ? 'column-reverse' : 'column',
                        }}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: 356,
                            overflow: 'hidden',
                            borderRadius: 10,
                          }}
                          className="wrapper-image"
                        >
                          <div
                            className="image"
                            style={{
                              width: '100%',
                              height: 356,
                              backgroundImage: `url('https://mvvsnp.com.vn/wp-content/uploads/2019/01/QG-cover-720x500.jpg')`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              borderRadius: 10,
                            }}
                          />
                        </div>

                        <div className='text-content' style={{ padding: '30px', height: 356 }}>
                          <div
                            style={{
                              color: '#edb52a',
                              fontWeight: 'bold',
                              fontSize: 14,
                            }}
                          >
                            MAKETING
                          </div>
                          <h6 style={{ lineHeight: '32px' }}>
                            Scent marketing- Hương vị ngọt ngào mang đến sự
                            thành công cho thương hiệu
                          </h6>
                          <p style={{ color: '#ACACAC', fontSize: 14 }}>
                            02/11/2023
                          </p>
                        </div>
                      </div>
                    </Link>
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
