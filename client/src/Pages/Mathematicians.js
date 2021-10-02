import Bored from '../utils/Board';
import TitleName from '../Components/TitleName';
import Ramanurjan from '../Components/Ramanurjan';
import ramaImg from '../assets/Ramanujan.jpeg';

const Mathematicians = () => {
  return (
    <div className=' d-flex flex-column flex-md-row justify-content-centers container'>
      <div className='order- '>
        <Bored type='secondary'>
          <img src={ramaImg} alt='rama' />
        </Bored>
      </div>
      <div className='order-1'>
        <Bored>
          <TitleName title='Tale of 1927' />
          <Ramanurjan />
        </Bored>
      </div>
    </div>
  );
};

export default Mathematicians;
