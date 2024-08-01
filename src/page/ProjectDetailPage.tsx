import {} from 'react';
import Header from './HomeLayout/1.Header';
import LienHe from './HomeLayout/10.LienHe';
import Footer from './HomeLayout/11.Footer';

type Props = {};

const ProjectDetailPage = ({}: Props) => {
  return (
    <main>
      <Header />
      <section style={{ marginTop: 160, marginBottom: 160 }}>
        <div className="container">
          <div style={{ display: 'flex', gap: 30 }}>
            <div style={{}}>
              <h2 style={{ color: '#EDB52A' }}>
                Brand Campaign “Do more, be more” 2020
              </h2>
              <p style={{ fontWeight: 'bold' }}>
                Revitalize David for a stronger fight with Goliath
              </p>
              <p style={{ color: '#7a7a7a' }}>
                Cốc Cốc is in a unique position: the only Vietnam-made Internet
                browser in the market. After years of going head to head with
                giants like Google Chrome, Cốc Cốc needs a boost in terms of
                branding and communications to connect better with a younger
                audience as the browser with unique utilities tailored for
                Vietnamese users. We helped Cốc Cốc pivot to a new brand
                positioning “Do More – Be More” and a refreshed identity to
                match. To bring the new Cốc Cốc to life, we launched an
                intergrated marketing campaign that included TVC, photoshoot &
                social media.
              </p>
              <iframe
                title="TVC - Cốc Cốc - Chọn Cốc Cốc, Chọn Chất"
                width="100%"
                height="600"
                src="https://www.youtube.com/embed/lNAhA4GIW0Y?feature=oembed"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
              ></iframe>
            </div>
            <div style={{ width: 300, minWidth: 300 }}>
              <h6 style={{ color: '#EDB52A', textTransform: 'uppercase' }}>
                Chi tiết dự án
              </h6>
              <h5 style={{ color: '#EDB52A', textTransform: 'uppercase' }}>
                --
              </h5>
              <h6>KHÁCH HÀNG</h6>
              <p>CocCoc</p>
              <div
                style={{
                  width: 200,
                  borderBottom: '1px solid #ccc',
                  marginBottom: 30,
                }}
              ></div>
              <h6>THỜI GIAN</h6>
              <p>2022</p>
              <div
                style={{
                  width: 200,
                  borderBottom: '1px solid #ccc',
                  marginBottom: 30,
                }}
              ></div>
              <h6>LĨNH VỰC</h6>
              <p>Telecommunications- Technology</p>
              <div
                style={{
                  width: 200,
                  borderBottom: '1px solid #ccc',
                  marginBottom: 30,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <LienHe />
      <Footer />
    </main>
  );
};

export default ProjectDetailPage;
