import {} from 'react';
import Header from './HomeLayout/1.Header';
import LienHe from './HomeLayout/10.LienHe';
import Footer from './HomeLayout/11.Footer';

type Props = {};

const NewDetailPage = ({}: Props) => {
  return (
    <main>
      <Header />
      <section
        className=" section-padding"
        style={{
          background: '#fff',
          color: '#000',
          textAlign: 'center',
          paddingTop: 160,
        }}
      >
        <div className="container" style={{ textAlign: 'justify' }}>
          <h2 style={{ color: '#000' }}>Tiêu đề News</h2>
          <p>Minh Nghi | Thứ tư, 31/7/2024 07:49 (GMT+7)</p>
          <img
            src="https://photo.znews.vn/w1024/Uploaded/mfnuy/2024_07_31/6faa6b10_4ea3_11ef_b260_43c80ef6eee9.jpg"
            alt=""
            style={{ margin: '10px 0' }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <img
            src="https://photo.znews.vn/w1024/Uploaded/mfnuy/2024_07_31/6faa6b10_4ea3_11ef_b260_43c80ef6eee9.jpg"
            alt=""
            style={{ margin: '10px 0' }}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, rem
            quod. A possimus distinctio vel quia ipsum, nisi officia dicta
            veniam excepturi autem, debitis quasi quae minus ratione saepe ipsa?
          </p>
        </div>
      </section>
      <LienHe />
      <Footer />
    </main>
  );
};

export default NewDetailPage;
