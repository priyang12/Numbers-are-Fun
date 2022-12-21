import { useState } from "react";
import { useFetch } from "../../Hooks/useFetch";
import Dice from "../../Components/DiceRoll";
import Style from "../../Styles/Fact.module.css";

type props = {
  type: "math" | "trivia" | "year";
};

const RandomFacts = ({ type }: props) => {
  const [url, setUrl] = useState(`?ApiCall=random/${type}`);
  const { loading, Error, fact } = useFetch(url);

  const onsubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    setUrl(`?ApiCall=${Math.floor(Math.random() * 100)}/${type}`);
  };

  return (
    <div className={Style.Random}>
      <form onSubmit={onsubmit}>
        <input type="submit" value="Random" className={Style.RandomBtn} />
        <label htmlFor={type}>/{type}</label>
      </form>
      <article className={Style.Fact}>
        {loading ? <Dice /> : Error ? "Server Timeout" : fact}
      </article>
    </div>
  );
};

export default RandomFacts;
