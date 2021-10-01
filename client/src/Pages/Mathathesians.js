import Bored from '../utils/Board';
import Header from '../Components/Header';
import Ramanurjan from '../Components/Ramanurjan';
import ramaImg from '../assets/Ramanujan.jpeg';

const Mathathesians = () => {
  return (
    <div className='d-flex'>
      <div className='order-'>
        <Bored type='secondary'>
          <img src={ramaImg} alt='rama' />
        </Bored>
      </div>
      <div className='order-1'>
        <Bored>
          <Header title='Tale of 1927' />
          <Ramanurjan />
        </Bored>
      </div>
    </div>
  );
};

export default Mathathesians;
