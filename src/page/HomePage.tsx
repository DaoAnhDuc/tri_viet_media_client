import {} from 'react';
import Header from './HomeLayout/1.Header';
import SlideShow from './HomeLayout/2.SlideShow';
import VeChungToi from './HomeLayout/3.VeChungToi';
import DichVu from './HomeLayout/4.DichVu';
import CEO from './HomeLayout/5.CEO';
import KhachHang from './HomeLayout/6.KhachHang';
import './style.scss'
import DuAnCuaChungToi from './HomeLayout/7.DuAnCuaChungToi';
import YKienKhachHang from './HomeLayout/8.YKienKhachHang';
import TinTuc from './HomeLayout/9.TinTuc';
type Props = {};

const HomePage = ({}: Props) => {
  return (
    <main>
      <Header />
      <SlideShow />
      <VeChungToi />
      <DichVu />
      <CEO />
      <KhachHang/>
      <DuAnCuaChungToi/>
      <YKienKhachHang/>
   <TinTuc/>
      <section className="contact-section section-padding" id="section_10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12">
              <em className="text-white">Say Hello</em>
              <h2 className="text-white mb-4 pb-lg-2">Contact</h2>
            </div>
            <div className="col-lg-6 col-12">
              <form
                action="#"
                method="post"
                className="custom-form contact-form"
                role="form"
              >
                <div className="row">
                  <div className="col-lg-6 col-12">
                    <label htmlFor="name" className="form-label">
                      Name <sup className="text-danger">*</sup>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Jackson"
                    />
                  </div>
                  <div className="col-lg-6 col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      pattern="[^ @]*@[^ @]*"
                      className="form-control"
                      placeholder="Jack@gmail.com"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      className="form-control"
                      id="message"
                      placeholder="Message"
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className="col-lg-5 col-12 mx-auto mt-3">
                  <button type="submit" className="form-control">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-6 col-12 mx-auto mt-5 mt-lg-0 ps-lg-5">
              <iframe
                className="google-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5039.668141741662!2d72.81814769288509!3d19.043340656729775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c994f34a7355%3A0x2680d63a6f7e33c2!2sLover%20Point!5e1!3m2!1sen!2sth!4v1692722771770!5m2!1sen!2sth"
                width="100%"
                height={300}
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-12 me-auto">
              <em className="text-white d-block mb-4">Where to find us?</em>
              <strong className="text-white">
                <i className="bi-geo-alt me-2" />
                Bandra West, Mumbai, Maharashtra 400050, India
              </strong>
              <ul className="social-icon mt-4">
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-facebook" />
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://x.com/minthu"
                    target="_new"
                    className="social-icon-link bi-twitter"
                  />
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp" />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12 mt-4 mb-3 mt-lg-0 mb-lg-0">
              <em className="text-white d-block mb-4">Contact</em>
              <p className="d-flex mb-1">
                <strong className="me-2">Phone:</strong>
                <a href="tel: 305-240-9671" className="site-footer-link">
                  (65) 305 2409 671
                </a>
              </p>
              <p className="d-flex">
                <strong className="me-2">Email:</strong>
                <a
                  href="mailto:info@yourgmail.com"
                  className="site-footer-link"
                >
                  hello@barista.co
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-12">
              <em className="text-white d-block mb-4">Opening Hours.</em>
              <ul className="opening-hours-list">
                <li className="d-flex">
                  Monday - Friday
                  <span className="underline" />
                  <strong>9:00 - 18:00</strong>
                </li>
                <li className="d-flex">
                  Saturday
                  <span className="underline" />
                  <strong>11:00 - 16:30</strong>
                </li>
                <li className="d-flex">
                  Sunday
                  <span className="underline" />
                  <strong>Closed</strong>
                </li>
              </ul>
            </div>
            <div className="col-lg-8 col-12 mt-4">
              <p className="copyright-text mb-0">
                Copyright © Trí Việt Media 2048 - Design:{' '}
                <a
                  rel="sponsored"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;
