import {} from 'react';
import Header from './HomeLayout/1.Header';

import Footer from './HomeLayout/11.Footer';
import LienHe from './HomeLayout/10.LienHe';
import { Link } from 'react-router-dom';
type Props = {};

const AboutUsPage = ({}: Props) => {
  return (
    <main id="about-page">
      <Header />
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
        style={{
          backgroundImage: `url('https://livestreamchuyennghiep.vn/wp-content/uploads/2021/03/Dich-Vu-Livestream-hoi-thao.jpg')`,
          backgroundSize: 'cover',
          position: 'relative',
          minHeight: '50vh',
          maxHeight: '50vh',
        }}
      ></section>
      <section className="about-section section-padding " id="section_2">
        <div className="section-overlay" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-12 mt-lg-0 mx-auto">
              {/* <em class="text-white">Barista.co</em> */}
              <h2 className="text-white mb-3">Về chúng tôi</h2>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                voluptas sed id, quibusdam sapiente magni rem quaerat optio,
                delectus quos quia quod sit minima cumque fugiat quo saepe animi
                expedita.
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                in et at temporibus ad vel alias nobis doloremque nulla
                veritatis sint debitis excepturi officia, dicta neque iusto
                facilis eaque. Voluptas. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Beatae deleniti dolorem atque earum pariatur
                quis obcaecati, sequi nihil? Harum a dolor enim in autem
                adipisci neque officia totam dignissimos maxime! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Saepe in et at
                temporibus ad vel alias nobis doloremque nulla veritatis sint
                debitis excepturi officia, dicta neque iusto facilis eaque.
                Voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Beatae deleniti dolorem atque earum pariatur quis
                obcaecati, sequi nihil? Harum a dolor enim in autem adipisci
                neque officia totam dignissimos maxime!
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                in et at temporibus ad vel alias nobis doloremque nulla
                veritatis sint debitis excepturi officia, dicta neque iusto
                facilis eaque. Voluptas. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Beatae deleniti dolorem atque earum pariatur
                quis obcaecati, sequi nihil? Harum a dolor enim in autem
                adipisci neque officia totam dignissimos maxime!
              </p>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe
                in et at temporibus ad vel alias nobis doloremque nulla
                veritatis sint debitis excepturi officia, dicta neque iusto
                facilis eaque. Voluptas. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Beatae deleniti dolorem atque earum pariatur
                quis obcaecati, sequi nihil? Harum a dolor enim in autem
                adipisci neque officia totam dignissimos maxime!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about-section section-padding"
        id="section_5"
        style={{ background: 'var(--section-bg-color)' }}
      >
        {/* <div className="section-overlay" /> */}
        <div className="container">
          <h2 className="text-white mb-6">Đội ngũ của chúng tôi</h2>
          <div className="row align-items-center mt-6">
            {Array.from(Array(6).keys()).map((i) => (
              <div className="col-lg-4 col-6 mt-lg-0 mb-4 " key={i}>
                <Link to={'/chi-tiet'}>
                  <div className="user-item" style={{ position: 'relative' }}>
                    <img
                      className="image-user"
                      style={{ width: '100%', height: 500, objectFit: 'cover' }}
                      src="https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_1280.jpg"
                      alt=""
                    />
                    <div
                      className="description"
                      style={{
                        fontSize: 16,
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        padding: 20,
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        opacity: 0,
                        background: '#4d382170',
                      }}
                    >
                      <div style={{ fontWeight: 'bold', fontSize: 20 }}>
                        Tên của giám đốc
                      </div>
                      <div style={{ fontSize: 20, marginBottom: 10 }}>
                        <i>Chức vụ</i>
                      </div>
                      <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quidem aut ea consequuntur laboriosam adipisci
                        temporibus ut cum, nulla accusamus corporis perspiciatis
                        obcaecati dicta quos, unde animi numquam molestiae autem
                        odio.
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <LienHe />
      <Footer />
    </main>
  );
};

export default AboutUsPage;
