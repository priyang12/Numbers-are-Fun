import { useState } from "react";
import { useFetch } from "../utils/Hooks";
import InputNumber from "./InputNumber";
import Style from "./Styles/Fact.module.css";
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
    <form className={Style.single}>
      <div className={Style.Fact}>
        {loading ? (
          <div className='Loading' data-testid='loader'>
            Wait For IT.....
          </div>
        ) : Error ? (
          <div className='Error'>'Server Timeout'</div>
        ) : (
          <div>{fact}</div>
        )}
      </div>
      <div className={Style.SelectNumber}>
        <InputNumber SetNumber={SetNumber} />
        <label htmlFor={type} className={Style.Type}>
          /{type}
        </label>
        <div type='submit' className='pointer' onClick={FindFact}>
          Find
        </div>
      </div>
      <div className={Style.line}></div>
    </form>
  );
};

GetFact.propTypes = {
  type: PropTypes.string.isRequired,
};
export default GetFact;
