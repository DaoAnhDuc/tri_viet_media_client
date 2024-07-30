import {} from 'react';

type Props = {};

const DuAnCuaChungToi = ({}: Props) => {
  return (
    <section
      className=" section-padding"
      id="section_7"
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
                padding: '0 20px',
              }}
            >
              <h2 className="text-white">Dự án của chúng tôi</h2>
              <a
                href="about.html"
                className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
              >
                Xem thêm
              </a>
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
  );
};

export default DuAnCuaChungToi;
