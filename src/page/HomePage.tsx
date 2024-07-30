import {} from 'react';

type Props = {};

const HomePage = ({}: Props) => {
  return (
    <main>
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
            TriViet.co
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
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Contact
                </a>
              </li>
            </ul>
            <div className="ms-lg-3">
              <a
                className="btn custom-btn custom-border-btn"
                href="reservation.html"
              >
                Contact
                <i className="bi-arrow-up-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
        style={{
          backgroundImage: "url('./images/DSC_7615.jpg')",
          backgroundSize: 'cover'
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            {/* <div class="col-lg-6 col-12 mx-auto">
                          
                          <h1>Trí Việt Media</h1>

                          <p class="text-white mb-4 pb-lg-2">
                              your <em>favourite</em> coffee daily lives.
                          </p>

                          <a class="btn custom-btn custom-border-btn smoothscroll me-3" href="#section_2">
                              Our Story
                          </a>

                          <a class="btn custom-btn smoothscroll me-2 mb-2" href="#section_3"><strong>Check Menu</strong></a>
                      </div> */}
          </div>
        </div>
        <div className="hero-slides" />
      </section>
      <section className="about-section section-padding" id="section_2">
        <div className="section-overlay" />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-12">
              <div className="ratio ratio-1x1">
                <video className="custom-video" poster="">
                  <source src="videos/v1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="about-video-info d-flex flex-column">
                  <h4 className="mt-auto">We Started Since 2009.</h4>
                  <h4>Best in Media.</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 mx-auto">
              {/* <em class="text-white">Barista.co</em> */}
              <h2 className="text-white mb-3">Trí Việt Media</h2>
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
                facilis eaque. Voluptas.{' '}
                <a
                  rel="nofollow"
                  href="https://www.tooplate.com"
                  target="_blank"
                >
                  Tooplate
                </a>
                .
              </p>
              <a
                href="about.html"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="barista-section section-padding section-bg"
        id="barista-team"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              {/* <em class="text-white">Creative Baristas</em> */}
              <h2 className="text-white">Our Works</h2>
            </div>
            <div className="col-lg-3 col-md-6 col-12 mb-4">
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
            <div className="col-lg-3 col-md-6 col-12 mb-4">
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
            <div className="col-lg-3 col-md-6 col-12 mb-4">
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
            <div className="col-lg-3 col-md-6 col-12">
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
          </div>
        </div>
      </section>
      <section className="menu-section section-padding" id="section_3">
        <div className="container">
          <div>
            <div className="col-lg-12 col-12 mb-4 pb-lg-2">
              {/* <em class="text-white">Creative Baristas</em> */}
              <h2 style={{ color: '#bc6c25' }}>Thinking</h2>
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
              {/* <div class="menu-block-wrap">
                            
                          
                              <div class="text-center mb-4 pb-lg-2">
                                  <em class="text-white">Delicious Menu</em>
                                  <h4 class="text-white">Breakfast</h4>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Pancakes</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$12.50</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Fresh brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block my-4">
                                  <div class="d-flex">
                                      <h6>
                                          Toasted Waffle
                                      </h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="text-white ms-auto"><del>$16.50</del></strong>

                                      <strong class="ms-2">$12.00</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Fried Chips
                                          <span class="badge ms-3">Recommend</span>
                                      </h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$15.0</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Rich Milk and Foam</small>
                                  </div>
                              </div>

                              <div class="menu-block my-4">
                                  <div class="d-flex">
                                      <h6>Pancakes</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$12.50</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Fresh brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Banana Cakes</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$18.0</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Rich Milk and Foam</small>
                                  </div>
                              </div>
                          </div> */}
            </div>
            {/* <div class="col-lg-6 col-12">
                          <div class="menu-block-wrap">
                              <div class="text-center mb-4 pb-lg-2">
                                  <em class="text-white">Favourite Menu</em>
                                  <h4 class="text-white">Coffee</h4>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Latte</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="text-white ms-auto"><del>$12.50</del></strong>

                                      <strong class="ms-2">$7.50</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Fresh brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block my-4">
                                  <div class="d-flex">
                                      <h6>
                                          White Coffee
                                          <span class="badge ms-3">Recommend</span>
                                      </h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$5.90</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Chocolate Milk</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$5.50</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Rich Milk and Foam</small>
                                  </div>
                              </div>

                              <div class="menu-block my-4">
                                  <div class="d-flex">
                                      <h6>Greentea</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$7.50</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Fresh brewed coffee and steamed milk</small>
                                  </div>
                              </div>

                              <div class="menu-block">
                                  <div class="d-flex">
                                      <h6>Dark Chocolate</h6>
                                  
                                      <span class="underline"></span>

                                      <strong class="ms-auto">$7.25</strong>
                                  </div>

                                  <div class="border-top mt-2 pt-2">
                                      <small>Rich Milk and Foam</small>
                                  </div>
                              </div>
                          </div>
                      </div> */}
          </div>
        </div>
      </section>
      <section
        className="reviews-section section-padding section-bg"
        id="section_4"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 text-center mb-4 pb-lg-2">
              <em className="text-white">Reviews by Customers</em>
              <h2 className="text-white">Testimonials</h2>
            </div>
            <div className="timeline">
              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/young-woman-with-round-glasses-yellow-sweater.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />
                      <div className="">
                        <h6 className="text-white mb-0">Sandra</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>
                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>
                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container timeline-container-right">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/senior-man-white-sweater-eyeglasses.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />
                      <div className="">
                        <h6 className="text-white mb-0">Don</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>
                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>
                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="timeline-container timeline-container-left">
                <div className="timeline-content">
                  <div className="reviews-block">
                    <div className="reviews-block-image-wrap d-flex align-items-center">
                      <img
                        src="images/reviews/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair.jpg"
                        className="reviews-block-image img-fluid"
                        alt=""
                      />
                      <div className="">
                        <h6 className="text-white mb-0">Olivia</h6>
                        <em className="text-white"> Customers</em>
                      </div>
                    </div>
                    <div className="reviews-block-info">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                      <div className="d-flex border-top pt-3 mt-4">
                        <strong className="text-white">
                          4.5 <small className="ms-2">Rating</small>
                        </strong>
                        <div className="reviews-group ms-auto">
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star-fill" />
                          <i className="bi-star" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section section-padding" id="section_5">
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
                  <a href="#" className="social-icon-link bi-facebook"></a>
                </li>
                <li className="social-icon-item">
                  <a
                    href="https://x.com/minthu"
                    target="_new"
                    className="social-icon-link bi-twitter"
                  ></a>
                </li>
                <li className="social-icon-item">
                  <a href="#" className="social-icon-link bi-whatsapp"></a>
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
