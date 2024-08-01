import {} from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const TinTuc = ({}: Props) => {
  return (
    <section
      className=" section-padding"
      id="section_9"
      style={{
        backgroundColor: '#ffd4a5',
      }}
    >
      <div className="container">
        <div>
          <div className="col-lg-12 col-12 text-center">
            {/* <em class="text-white">Creative Baristas</em> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
              }}
            >
              <h2 className="text-white">Tin tức</h2>
              <Link
                to="/tin-tuc"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Xem thêm
              </Link>
            </div>
          </div>
          <div>
            <div
              style={{ display: 'flex', flexWrap: 'wrap' }}
              className="card-container"
            >
              <div className="card">
                <img src="images/a (1).jpg" alt="Scent marketing" />
                <h3>Scent marketing - Hương vị ngọt ngào </h3>
                <p>
                  Các hoạt động marketing có tác động đến các giác quan không
                  còn xa lạ
                </p>
              </div>
              <div className="card">
                <img src="images/a (2).jpg" alt="Scent marketing" />
                <h3>Scent marketing - Hương vị ngọt ngào </h3>
                <p>
                  Các hoạt động marketing có tác động đến các giác quan không
                  còn xa lạ
                </p>
              </div>
              <div className="card">
                <img src="images/a (3).jpg" alt="Scent marketing" />
                <h3>Scent marketing - Hương vị ngọt ngào </h3>
                <p>
                  Các hoạt động marketing có tác động đến các giác quan không
                  còn xa lạ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TinTuc;
