import {} from 'react';

type Props = {};

const DichVu = ({}: Props) => {
  return (
    <section
      className="barista-section section-padding section-bg"
      id="section_4"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
            {/* <em class="text-white">Creative Baristas</em> */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '0 20px',
              }}
            >
              <h2 className="text-white">Dịch vụ</h2>
              <a
                href="about.html"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Xem thêm
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">SocialMedia</h4>
                  <p className="badge ms-4">
                    <em>Senior</em>
                  </p>
                </div>
                <p className="text-white mb-0">pr snd media.</p>
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
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">ShowMusic</h4>
                  <p className="badge ms-4">
                    <em>Manager</em>
                  </p>
                </div>
                <p className="text-white mb-0">camera lives.</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/2.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">Digital</h4>
                  <p className="badge ms-4">
                    <em>Senior</em>
                  </p>
                </div>
                <p className="text-white mb-0"> daily lives.</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/3.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">Ai</h4>
                  <p className="badge ms-4">
                    <em>Manager</em>
                  </p>
                </div>
                <p className="text-white mb-0"> consectetur.</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/4.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">SocialMedia</h4>
                  <p className="badge ms-4">
                    <em>Senior</em>
                  </p>
                </div>
                <p className="text-white mb-0">pr snd media.</p>
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
          <div className="col-lg-4 col-md-6 col-12 mb-4">
            <div className="team-block-wrap">
              <div className="team-block-info d-flex flex-column">
                <div className="d-flex mt-auto mb-3">
                  <h4 className="text-white mb-0">ShowMusic</h4>
                  <p className="badge ms-4">
                    <em>Manager</em>
                  </p>
                </div>
                <p className="text-white mb-0">camera lives.</p>
              </div>
              <div className="team-block-image-wrap">
                <img
                  src="images/2.jpg"
                  className="team-block-image img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DichVu;
