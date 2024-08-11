import { useRef } from 'react';
import Header from './HomeLayout/1.Header';
import Footer from './HomeLayout/11.Footer';
import LienHe from './HomeLayout/10.LienHe';
import useSize from '../hook/useSize';

type Props = {};

const ServicePage = ({}: Props) => {
  const target = useRef(null);
  const size: any = useSize(target);

  return (
    <main ref={target}>
      <Header />
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
        style={{
          backgroundImage: `url('https://livestreamchuyennghiep.vn/wp-content/uploads/2021/03/Dich-Vu-Livestream-hoi-thao.jpg')`,
          backgroundSize: 'cover',
          position: 'relative',
          maxHeight: '50vh',
          minHeight: '50vh',
        }}
      >
        {size?.width > 1200 && (
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              minHeight: 200,
              background: '#000000ab',
              color: '#fff',
            }}
          >
            <div className="container">
              <div
                style={{ padding: '20px 0', fontSize: 20, textAlign: 'left' }}
              >
                At MVV SNP, we believe that you should be able to get all your
                marketing & communications needs in one place. That is why we
                are your one-stop-shop – where our key strength in strategy and
                planning informs all aspects of branding & marcom to ensure
                seamless, optimized immediate impact without compromising your
                business’s long-term vision. Whether you are an established
                corporation or a dynamic start-up, our multi-disciplinary
                services with the principle ‘International Expertise – Local
                Experience’ at heart will help you cut through the noise of an
                emerging yet fragmented market to not only reach your audience,
                but make them listen.
              </div>
            </div>
          </div>
        )}
      </section>
      <section className="barista-section section-padding " id="section_4">
        <div className="container">
          <div className="row justify-content-center">
            {Array.from(Array(15).keys()).map((i) => (
              <div className="col-lg-4 col-md-6 col-12 mb-4" key={i}>
                <div className="team-block-wrap">
                  <div className="team-block-info d-flex flex-column">
                    <div className="d-flex mt-auto mb-3">
                      <h4 className="text-white mb-0">SocialMedia {i}</h4>
                      <p className="badge ms-4">
                        <em>Senior {i}</em>
                      </p>
                    </div>
                    <p className="text-white mb-0">pr snd media.{i}</p>
                  </div>
                  <div className="team-block-image-wrap">
                    <img
                      src="images/1.jpg"
                      className="team-block-image img-fluid"
                      alt=""
                    />
                  </div>
                </div>
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

export default ServicePage;
