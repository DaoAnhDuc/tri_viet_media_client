import {} from 'react';
import Header from './HomeLayout/1.Header';

type Props = {};

const AboutUsDetailPage = ({}: Props) => {
  return (
    <main>
      <Header />
      <section
        className="hero-section d-flex justify-content-center align-items-center"
        id="section_1"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_1280.jpg')`,
          backgroundSize: 'cover',
          position: 'relative',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      <div
        style={{ position: 'fixed', inset: 0, paddingTop: 260 }}
        className="container"
      >
        <div
          style={{
            width: 'calc(100% - 200px)',
            marginLeft: 'auto',
            height: 600,
            background: '#010101b5',
            borderRadius: 10,
            position: 'relative',
          }}
        >
          <img
            style={{
              height: 400,
              width: 400,
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: -200,
              transform: 'translateY(-50%)',
            }}
            src="https://cdn.pixabay.com/photo/2024/06/24/04/05/woman-8849047_1280.jpg"
            alt=""
          />
          <div
            style={{
              paddingLeft: 250,
              paddingTop: 40,
              paddingRight: 40,
              paddingBottom: 40,
            }}
          >
            <h2 style={{ color: '#fff' }}>Tên của CEO</h2>
            <p style={{ fontStyle: 'italic', color: '#fff' }}>Chức vụ</p>
            <p style={{ color: '#fff' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum, voluptatibus facere tenetur assumenda adipisci,
              perspiciatis eaque soluta ratione nesciunt unde. Nemo recusandae
              voluptates saepe rerum laudantium architecto omnis distinctio?
            </p>
            <p style={{ color: '#fff' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum, voluptatibus facere tenetur assumenda adipisci,
              perspiciatis eaque soluta ratione nesciunt unde. Nemo recusandae
              voluptates saepe rerum laudantium architecto omnis distinctio?
            </p>
            <p style={{ color: '#fff' }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              dolorum, voluptatibus facere tenetur assumenda adipisci,
              perspiciatis eaque soluta ratione nesciunt unde. Nemo recusandae
              voluptates saepe rerum laudantium architecto omnis distinctio?
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUsDetailPage;
