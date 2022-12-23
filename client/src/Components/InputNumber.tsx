import { useEffect } from "react";
import { useCounter } from "../Hooks/useCounter";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
// import ProfilerComponent from "./ProfilerComponent";
import Style from "./Styles/NumberInput.module.css";

const InputNumber = ({
  val,
  SetNumber,
}: {
  val: number;
  SetNumber: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { increment, decrement, count, setCount } = useCounter(val);

  useEffect(() => {
    SetNumber(count);
  }, [count, SetNumber]);

  return (
    <div className={Style.Container}>
      <div className={Style.Arrow} onClick={decrement} data-testid="leftArrow">
        <TfiAngleLeft />
      </div>
      <input
        type="number"
        className={Style.InputNumber}
        data-testid="input-number"
        value={count}
        onChange={(e) => {
          setCount(parseInt(e.target.value));
        }}
      />
      <div className={Style.Arrow} onClick={increment} data-testid="rightArrow">
        <TfiAngleRight />
      </div>
    </div>
  );
};

export default InputNumber;
