import { useEffect } from "react";
import LeftArrowImg from "../assets/LeftArrow.png";
import RightArrowImg from "../assets/RightArrow.png";
import { useCounter } from "../utils/Hooks";
// import ProfilerComponent from "./ProfilerComponent";
import Style from "./Styles/NumberInput.module.css";

const InputNumber = ({ SetNumber }) => {
  const { increment, decrement, count, setCount } = useCounter(0);

  useEffect(() => {
    SetNumber(count);
  }, [count, SetNumber]);

  return (
    // <ProfilerComponent id='inputNumber'>
    <div className={Style.Container}>
      <img
        src={LeftArrowImg}
        alt='left arrow'
        onClick={decrement}
        className={Style.Arrow}
      />
      <input
        type='number'
        className={Style.InputNumber}
        data-testid='input-number'
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <img
        src={RightArrowImg}
        alt='right arrow'
        onClick={increment}
        className={Style.Arrow}
      />
    </div>
    // </ProfilerComponent>
  );
};

export default InputNumber;
