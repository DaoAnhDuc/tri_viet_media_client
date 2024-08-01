import {} from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const VeChungToi = ({}: Props) => {
  return (
    <section className="about-section section-padding" id="section_2">
      <div className="section-overlay" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
            {/* <em class="text-white">Barista.co</em> */}
            <h2 className="text-white mb-3">Về chúng tôi</h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
              voluptas sed id, quibusdam sapiente magni rem quaerat optio,
              delectus quos quia quod sit minima cumque fugiat quo saepe animi
              expedita.
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe in
              et at temporibus ad vel alias nobis doloremque nulla veritatis
              sint debitis excepturi officia, dicta neque iusto facilis eaque.
              Voluptas.{' '}
              <a rel="nofollow" href="https://www.tooplate.com" target="_blank">
                Tooplate
              </a>
              .
            </p>
            <Link
              to={"/ve-chung-toi"}
              className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
            >
              Xem thêm
            </Link>
          </div>
          <div className="col-lg-6 col-12">
            <div className="ratio ratio-1x1">
              <video className="custom-video" autoPlay={true} loop={true} muted={true}>
                <source src="./videos/v1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="about-video-info d-flex flex-column">
                <h4 className="mt-auto">We Started Since 2009.</h4>
                <h4>Best in Media.</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VeChungToi;
