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
        maxWidth: '100%',
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
                  className={`nav-link click-scroll text-lg ${
                    pathname === '/' ? 'active' : ''
                  }`}
                >
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/ve-chung-toi'}
                  className={`nav-link click-scroll text-lg ${
                    pathname === '/ve-chung-toi' ? 'active' : ''
                  }`}
                >
                  Về chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/dich-vu'}
                  className={`nav-link click-scroll text-lg ${
                    pathname === '/dich-vu' ? 'active' : ''
                  }`}
                >
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/du-an'}
                  className={`nav-link click-scroll text-lg ${
                    pathname === '/du-an' ? 'active' : ''
                  }`}
                >
                  Dự án
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={'/tin-tuc'}
                  className={`nav-link click-scroll text-lg ${
                    pathname === '/tin-tuc' ? 'active' : ''
                  }`}
                >
                  Tin tức
                </Link>
              </li>
              <li
                className="nav-item"
                style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <a>
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="https://stc-zaloprofile.zdn.vn/pc/v1/images/favicon.ico"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </a>
                <a>
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </a>
                <a>
                  <div style={{ padding: 2, borderRadius: 2 }}>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-youtube-circle-512.png"
                      alt=""
                      style={{
                        width: 32,
                        height: 32,
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                </a>
              </li>
            </ul>

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
