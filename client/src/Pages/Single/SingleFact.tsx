import { useState } from "react";
import InputNumber from "../../Components/InputNumber";
import Style from "../../Styles/Fact.module.css";
import { useSingleFact } from "../../Hooks/useSingleFact";

type props = {
  type: "math" | "trivia" | "year";
};

const GetFact = ({ type }: props) => {
  const [Number, SetNumber] = useState(0);
  const [FindNumber, setFindNumber] = useState(0);
  // Review Needed
  // const memoInput = useMemo(() => <InputNumber SetNumber={SetNumber} />, []);

  const { isLoading, isError, data: fact } = useSingleFact(FindNumber, type);

  const FindFact: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    if (Number !== FindNumber) {
      setFindNumber(Number);
    }
  };

  return (
    <div className={Style.single}>
      <div className={Style.Fact}>
        {isLoading ? (
          <div className="Loading" data-testid="loader">
            Wait For IT.....
          </div>
        ) : isError ? (
          <div className="Error">'Server Timeout'</div>
        ) : (
          <div>{fact}</div>
        )}
      </div>
      <form className={Style.SelectNumber} onSubmit={FindFact}>
        <InputNumber SetNumber={SetNumber} />
        <label htmlFor={type} className={Style.Type}>
          /{type}
        </label>
        <button type="submit" className="pointer">
          Find
        </button>
      </form>
      <div className={Style.line}></div>
    </div>
  );
};

export default GetFact;
