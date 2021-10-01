import { useState, useEffect } from 'react';
import Board from '../utils/Board';
import Header from './Header';
import Dice from '../utils/DiceRoll';
import Down from '../assets/dropdown.png';
import { useFetch, useCounter } from '../utils/Hooks';
import Factslist from './Factslist';

const MultipleFacts = () => {
  const [start, incrementStart, decrementStart] = useCounter(0);
  const [end, incrementEnd, decrementEnd] = useCounter(5);
  const [JsonFacts, setJsonFacts] = useState(null);
  const [url, seturl] = useState(`?ApiCall=0..5/math`);
  const { loading, Error, fact } = useFetch(url);
  useEffect(() => {
    if (fact) {
      setJsonFacts(JSON.parse(fact));
    }
  }, [fact]);

  const checkValue = (beg, to) => {
    if (beg < to) return false;
    return true;
  };
  console.log(url);
  const mathSelect = () => {
    checkValue(start, end);
    seturl(`?ApiCall=${start}..${end}/math`);
  };
  const triviaSelect = () => {
    checkValue(start, end);
    seturl(`?ApiCall=${start}..${end}/trivia`);
  };
  const yearSelect = () => {
    checkValue(start, end);
    seturl(`?ApiCall=${start}..${end}/year`);
  };
  return (
    <div id='radomFacts' className='containe' data-testid='multirandom'>
      <Board>
        <Header title='Multiple Numbers' />
        <div
          id='range'
          className='display-1 d-flex flex-column flex-md-row  align-items-center justify-content-around mt-2 '
        >
          <h1>
            Select Range
            <p className='h4'>Between Diffrence of 100</p>
          </h1>
          <h4>Start</h4>
          <div id='start' className='d-flex align-items-center'>
            <div onClick={decrementStart}>{'<'}</div>
            <div>{start}</div>
            <div onClick={incrementStart}>{'>'}</div>
          </div>
          <h4>End</h4>
          <div id='end' className='d-flex align-items-center'>
            <div onClick={decrementEnd}>{'<'}</div>
            <div>{end}</div>
            <div onClick={incrementEnd}>{'>'}</div>
          </div>
        </div>
        <div className='d-flex'>
          <div
            id='randomType'
            className='container d-flex flex-column justify-content-around '
          >
            <button
              type='button'
              id='math'
              className='btn  '
              onClick={mathSelect}
            >
              Math
            </button>
            <button
              type='button'
              id='trivia'
              className='btn '
              onClick={triviaSelect}
            >
              Trivia
            </button>
            <button
              type='button'
              id='year'
              className='btn '
              onClick={yearSelect}
            >
              Year
            </button>
          </div>
          <div className='container mt-5 d-sm-none d-md-none d-lg-block'>
            <img src={Down} alt='Look Down' />
          </div>
        </div>
      </Board>
      {loading || fact === null ? (
        <Dice />
      ) : Error ? (
        <div>
          {Error ? Error?.message && 'Server Timeout' : 'Server Timeout'}
        </div>
      ) : (
        <Factslist Facts={JsonFacts} />
      )}
    </div>
  );
};

export default MultipleFacts;
