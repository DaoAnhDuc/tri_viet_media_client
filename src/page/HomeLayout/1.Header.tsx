import {} from 'react';
import { Link, useLocation } from 'react-router-dom';

type Props = {};

const Header = ({}: Props) => {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname);

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
                <Link
                  to={'/'}
                  className={`nav-link click-scroll ${
                    pathname === '/' ? 'active' : ''
                  }`}
                >
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/ve-chung-toi'}
                  className={`nav-link click-scroll ${
                    pathname === '/ve-chung-toi' ? 'active' : ''
                  }`}
                >
                  Về chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/dich-vu'}
                  className={`nav-link click-scroll ${
                    pathname === '/dich-vu' ? 'active' : ''
                  }`}
                >
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/du-an'}
                  className={`nav-link click-scroll ${
                    pathname === '/du-an' ? 'active' : ''
                  }`}
                >
                  Dự án
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/tin-tuc'}
                  className={`nav-link click-scroll ${
                    pathname === '/tin-tuc' ? 'active' : ''
                  }`}
                >
                  Tin tức
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link
                  to={'/lien-he'}
                  className={`nav-link click-scroll ${
                    pathname === '/lien-he' ? 'active' : ''
                  }`}
                >
                  Liên hệ
                </Link>
              </li> */}
            </ul>
            <div style={{ display: 'flex', gap: 6 }}>
              <div className="ml-2">
                <a
                  className={`nav-link click-scroll ${
                    pathname === '/' ? 'active' : ''
                  }`}
                  href="#section_10"
                >
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="./images/zalo.jpg"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                        backgroundColor: '#ffffff',
                        borderRadius: 4,
                      }}
                    />
                  </div>
                </a>
              </div>
              <div className="ml-2">
                <a
                  className={`nav-link click-scroll ${
                    pathname === '/' ? 'active' : ''
                  }`}
                  href="#section_10"
                >
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
                <a
                  className={`nav-link click-scroll ${
                    pathname === '/' ? 'active' : ''
                  }`}
                  href="#section_10"
                >
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
