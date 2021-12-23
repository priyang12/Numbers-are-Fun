import { useState } from "react";
import { useFetch, useCounter } from "../utils/Hooks";
import PropTypes from "prop-types";
import "../Styles/NumberInput.css";

const GetFact = ({ type }) => {
  const [url, seturl] = useState(`?ApiCall=0/${type}`);
  const [start, incrementStart, decrementStart] = useCounter(0);
  const { loading, Error, fact } = useFetch(url);
  const onClick = (e) => {
    e.preventDefault();
    if (url !== `?ApiCall=${start}/${type}`) {
      seturl(`?ApiCall=${start}/${type}`);
    }
  };

  return (
    <form
      id='getFacts'
      className='m-2 d-flex flex-column flex-md-row align-items-start justify-content-center'
      data-testid='FactTestId'
    >
      <div id='Facts' className='display-4 '>
        {loading ? (
          <div className='loading' data-testid='loader'>
            Wait For IT
          </div>
        ) : Error ? (
          <div className='error'>'Server Timeout'</div>
        ) : (
          <div>{fact}</div>
        )}
      </div>
      <div
        className='d-flex align-items-center justify-content-center inputfield'
        data-testid='form-test'
      >
        <label htmlFor={type} className='display-6 order-2'>
          /{type}
        </label>

        <div className='d-flex align-items-center p-3 display-2 start'>
          <div onClick={decrementStart}>{"<"}</div>
          <div>{start}</div>
          <div onClick={incrementStart}>{">"}</div>
        </div>

        <div
          type='submit'
          className='order-3 p-3 display-5 border m-3'
          onClick={onClick}
        >
          Find
        </div>
      </div>
    </form>
  );
};

GetFact.propTypes = {
  type: PropTypes.string.isRequired,
};
export default GetFact;
