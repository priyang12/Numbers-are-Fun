import Dice from "../../Components/DiceRoll";
import Style from "../../Styles/Fact.module.css";
import { useRandomFact } from "../../Hooks/useRandomFact";

type props = {
  type: "math" | "trivia" | "year";
};

const RandomFacts = ({ type }: props) => {
  const { isLoading, isError, data: fact, refetch } = useRandomFact(type);

  const onsubmit: React.ComponentProps<"form">["onSubmit"] = (e) => {
    e.preventDefault();
    refetch();
  };

  return (
    <div className={Style.Random}>
      <form onSubmit={onsubmit}>
        <input type="submit" value="Random" className={Style.RandomBtn} />
        <label htmlFor={type}>/{type}</label>
      </form>
      <article className={Style.Fact}>
        {isLoading ? <Dice /> : isError ? "Server Timeout" : fact}
      </article>
    </div>
  );
};

export default RandomFacts;
