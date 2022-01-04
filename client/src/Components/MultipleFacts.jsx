import Board from "./Board";
import Header from "./Navbar";
import Down from "../assets/dropdown.png";
import InputNumber from "./InputNumber";
import { useState } from "react";

const MultipleFacts = ({ setUrl }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const checkValue = (beg, to) => {
    if (beg - to > 99) return false;
    return true;
  };
  const mathSelect = () => {
    checkValue(start, end);
    setUrl(`?ApiCall=${start}..${end}/math`);
  };
  const triviaSelect = () => {
    checkValue(start, end);
    setUrl(`?ApiCall=${start}..${end}/trivia`);
  };
  const yearSelect = () => {
    checkValue(start, end);
    setUrl(`?ApiCall=${start}..${end}/year`);
  };
  return (
    <div id='radomFacts' className='container'>
      <Board>
        <Header Title='Multiple Numbers' />
        <h1 className='display-3 mx-5'>Select Range</h1>
        <div
          id='range'
          className='display-1  d-flex flex-column flex-md-row  align-items-center justify-content-around  mt-2 '
        >
          <div className='mx-5'>
            <p className='h4'>Between Difference of 100</p>
          </div>
          <h4>Start</h4>
          <div className='d-flex align-items-center justify-content-around'>
            <InputNumber SetNumber={setStart} />
          </div>
          <h4>End</h4>
          <div className='d-flex align-items-center justify-content-around  '>
            <InputNumber SetNumber={setEnd} />
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
              className='btn-secondary my-3  p-2  md:w-50 '
              onClick={mathSelect}
            >
              Math
            </button>
            <button
              type='button'
              id='trivia'
              className='btn-secondary my-3  p-2  md:w-50 '
              onClick={triviaSelect}
            >
              Trivia
            </button>
            <button
              type='button'
              id='year'
              className='btn-secondary my-3  p-2  md:w-50 '
              onClick={yearSelect}
            >
              Year
            </button>
          </div>
          <div className='container mt-5  d-none d-lg-block'>
            <img src={Down} alt='Look Down' />
          </div>
        </div>
      </Board>
    </div>
  );
};

export default MultipleFacts;
