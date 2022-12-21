import { Fragment } from "react";
import TitleName from "../../Components/TitleName";
import Board from "../../Components/Board";
import RandomFacts from "./RandomFacts";

const Random = () => {
  return (
    <Fragment>
      <Board>
        <TitleName title="Random Numbers" />
        <RandomFacts type="math" />
      </Board>
      <br />
      <Board>
        <RandomFacts type="trivia" />
      </Board>
      <br />
      <Board>
        <RandomFacts type="year" />
      </Board>
    </Fragment>
  );
};

export default Random;
