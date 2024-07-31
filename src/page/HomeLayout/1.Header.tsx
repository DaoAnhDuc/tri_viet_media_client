import {} from 'react';

type Props = {};

const Header = ({}: Props) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        zIndex: 999,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 2067,
      }}
    >
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center"
            href="index.html"
          >
            <img
              src="images/TV.png"
              className="navbar-brand-image img-fluid"
              alt="Barista Cafe Template"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Trang chủ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  Về chúng tôi
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  Dịch vụ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_7">
                  Dự án
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_9">
                  Tin tức
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_10">
                  Liên hệ
                </a>
              </li>
            </ul>
            <div style={{ display: 'flex', gap: 6 }}>
              <div className="ml-2">
                <a className="nav-link click-scroll" href="#section_10">
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="./images/lg-zalo.png"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                        backgroundColor: '#ffffff',
                      }}
                    />
                  </div>
                </a>
              </div>
              <div className="ml-2">
                <a className="nav-link click-scroll" href="#section_10">
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="./images/lg-facebook.png"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,

                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </a>
              </div>
              <div className="ml-2">
                <a className="nav-link click-scroll" href="#section_10">
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="./images/lg-youtube.png"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,

                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </a>
              </div>
            </div>

            {/* <div className="ms-lg-3">
              <a
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Tin tức
                <i className="bi-arrow-up-right ms-2" />
              </a>
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
