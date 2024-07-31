import {} from 'react'
import Footer from './HomeLayout/11.Footer';
import Header from './HomeLayout/1.Header';
import LienHe from './HomeLayout/10.LienHe';

type Props = {}

const ProjectPage = ({}: Props) => {
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
          height: 300,
          minHeight: 300,
          maxHeight: 300,
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
            <div className="card">
              <img src="images/a (1).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
            <div className="card">
              <img src="images/a (2).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
            <div className="card">
              <img src="images/a (3).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
            <div className="card">
              <img src="images/a (1).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
            <div className="card">
              <img src="images/a (2).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
            <div className="card">
              <img src="images/a (3).jpg" alt="Scent marketing" />
              <h3>Scent marketing - Hương vị ngọt ngào </h3>
              <p>
                Các hoạt động marketing có tác động đến các giác quan không còn
                xa lạ
              </p>
            </div>
          </div>
        </div>
      </section>
      <LienHe />
      <Footer />
    </main>
  );
};

export default ProjectPage;