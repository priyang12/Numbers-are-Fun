import { Fragment } from "react";
import LeftArrowImg from "../assets/LeftArrow.png";
import RightArrowImg from "../assets/RightArrow.png";
import { useCounter } from "../utils/Hooks";
import "../Styles/NumberInput.css";

const InputNumber = ({ SetNumber }) => {
  const { increment, decrement, count, setCount } = useCounter(0);
  SetNumber(count);
  return (
    <Fragment>
      <img
        src={LeftArrowImg}
        alt='left arrow'
        onClick={decrement}
        className='arrow'
      />

      <input
        type='number'
        className='InputNumber'
        data-testid='input-number'
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
          console.log("Onchange");
        }}
      />

      <img
        src={RightArrowImg}
        alt='right arrow'
        onClick={increment}
        className='arrow'
      />
    </Fragment>
  );
};

export default InputNumber;
