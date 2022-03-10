import { useState } from "react";
import { useFetch } from "../utils/Hooks";
import PropTypes from "prop-types";
import Dice from "../utils/DiceRoll";

import Style from "./Styles/Fact.module.css";

const RandomFacts = ({ type }) => {
  const [url, setUrl] = useState(`?ApiCall=random/${type}`);
  const { loading, Error, fact } = useFetch(url);
  const onsubmit = (e) => {
    e.preventDefault();
    setUrl(`?ApiCall=${Math.floor(Math.random() * 100)}/${type}`);
  };
  return (
    <div className={Style.Random}>
      <form onSubmit={onsubmit}>
        <input type='submit' value='Random' className={Style.RandomBtn} />
        <label htmlFor={type}>/{type}</label>
      </form>
      <article className={Style.Fact}>
        {loading ? <Dice /> : Error ? "Server Timeout" : fact}
      </article>
    </div>
  );
};

RandomFacts.propTypes = {
  type: PropTypes.string.isRequired,
};
export default RandomFacts;
