import {} from 'react';
import { Link } from 'react-router-dom';

type Props = {};

const LienHe = ({}: Props) => {
  return (
    <section
      className=" section-padding"
      style={{ background: '#000', color: '#fff', textAlign: 'center' }}
    >
      <h2 style={{ color: '#fff' }}>
        Bạn có dự án nào trong đầu không? <br /> Hãy cùng thảo luận nhé!
      </h2>
      <p>Bí mật của sự dẫn đầu là bắt đầu ngay</p>
      <Link
        to={'/ve-chung-toi'}
        className="smoothscroll btn custom-btn custom-border-btn mt-3 mb-4"
      >
        Liên hệ chúng tôi
      </Link>
    </section>
  );
};

export default LienHe;
