import { useState } from 'react';
import { useFetch } from '../utils/Hooks';
import PropTypes from 'prop-types';
import Dice from '../utils/DiceRoll';

const RandomFacts = ({ type }) => {
  const [url, seturl] = useState(`?ApiCall=random/${type}`);
  const { loading, Error, fact } = useFetch(url);
  const onsubmit = (e) => {
    e.preventDefault();
    seturl(`?ApiCall=${Math.floor(Math.random() * 100)}/${type}`);
  };

  return (
    <div id='getRandomFacts' className='m-2' data-testid='FactTestId'>
      <form
        className='d-flex align-items-center justify-content-center inputfield'
        onSubmit={onsubmit}
      >
        <label htmlFor={type} className='display-6 order-2'>
          /{type}
        </label>
        <input type='submit' value='Random' className=' order-1 m-3' />
      </form>
      {/* //DATA */}
      <div id='RandomFacts' className='display-4 '>
        {loading ? <Dice /> : Error ? 'Server Timeout' : fact}
      </div>
    </div>
  );
};

RandomFacts.propTypes = {
  type: PropTypes.string.isRequired,
};
export default RandomFacts;
