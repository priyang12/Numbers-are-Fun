import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import InputNumber from "../../Components/InputNumber";
import Style from "../../Styles/Fact.module.css";

type props = {
  type: "math" | "trivia" | "year";
};

const GetFact = ({ type }: props) => {
  const [url, setUrl] = useState(`?ApiCall=0/${type}`);
  const [Number, SetNumber] = useState(0);

  // Review Needed
  // const memoInput = useMemo(() => <InputNumber SetNumber={SetNumber} />, []);

  const { loading, Error, fact } = useFetch(url);

  const FindFact: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    if (url !== `?ApiCall=${Number}/${type}`) {
      setUrl(`?ApiCall=${Number}/${type}`);
    }
  };

  return (
    <form className={Style.single}>
      <div className={Style.Fact}>
        {loading ? (
          <div className="Loading" data-testid="loader">
            Wait For IT.....
          </div>
        ) : Error ? (
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
    </form>
  );
};

export default GetFact;
