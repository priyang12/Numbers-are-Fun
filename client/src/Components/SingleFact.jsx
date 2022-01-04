import { useState } from "react";
import { useFetch } from "../utils/Hooks";
import InputNumber from "./InputNumber";
import PropTypes from "prop-types";

const GetFact = ({ type }) => {
  const [url, setUrl] = useState(`?ApiCall=0/${type}`);

  const [Number, SetNumber] = useState(0);

  const { loading, Error, fact } = useFetch(url);

  const FindFact = (e) => {
    e.preventDefault();
    //check if not same number
    if (url !== `?ApiCall=${Number}/${type}`) {
      setUrl(`?ApiCall=${Number}/${type}`);
    }
  };

  return (
    <form id='getFacts' className='m-2'>
      <div id='Facts' className='display-4 w-100'>
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
      <div className='d-flex align-items-center justify-content-center flex-wrap'>
        <label
          htmlFor={type}
          className='display-6 order-2 flex-fill text-center'
        >
          /{type}
        </label>

        <div className='d-flex align-items-center p-3 display-2 '>
          <InputNumber SetNumber={SetNumber} />
        </div>

        <div
          type='submit'
          className='order-3 p-3 display-5 border m-3'
          onClick={FindFact}
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
