import Board from "../../Components/Board";
import Header from "../../Components/Header";
import Down from "../../assets/dropdown.png";
import InputNumber from "../../Components/InputNumber";
import { useMemo, useState } from "react";
import { MultipleParma } from "./Multiple";
import Style from "../../Styles/Fact.module.css";

const MultipleFacts = ({
  setFindRanges,
}: {
  setFindRanges: React.Dispatch<React.SetStateAction<MultipleParma>>;
}) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  const memoInput1 = useMemo(
    () => <InputNumber SetNumber={setStart} />,
    [setStart]
  );

  const memoInput2 = useMemo(
    () => <InputNumber SetNumber={setEnd} />,
    [setEnd]
  );

  const checkValue = (beg: number, to: number) => {
    if (beg - to > 99) return false;
    return true;
  };
  const mathSelect = () => {
    checkValue(start, end);
    setFindRanges({
      start,
      end,
      type: "math",
    });
  };
  const triviaSelect = () => {
    checkValue(start, end);
    setFindRanges({
      start,
      end,
      type: "trivia",
    });
  };
  const yearSelect = () => {
    checkValue(start, end);
    setFindRanges({
      start,
      end,
      type: "year",
    });
  };
  return (
    <Board>
      <Header Title="Multiple Numbers" />
      <h1 className={Style.Title}>Select Range</h1>
      <div className={Style.SubTitle}>
        <p>Between Difference of 100</p>
      </div>
      <div className={Style.Range}>
        <h4>Start</h4>
        <div className={Style.Flex}>{memoInput1}</div>
        <h4>End</h4>
        <div className={Style.Flex}>{memoInput2}</div>
      </div>

      <div style={{ display: "flex" }}>
        <div className={Style.ButtonFlex}>
          <button id="math" className={Style.TypeBtn} onClick={mathSelect}>
            Math
          </button>
          <button id="trivia" className={Style.TypeBtn} onClick={triviaSelect}>
            Trivia
          </button>
          <button id="year" className={Style.TypeBtn} onClick={yearSelect}>
            Year
          </button>
        </div>
        <div className={Style.Logo}>
          <img src={Down} alt="Look Down" />
        </div>
      </div>
    </Board>
  );
};

export default MultipleFacts;
