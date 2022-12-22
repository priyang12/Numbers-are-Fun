import { Fragment } from "react";
import TitleName from "../../Components/TitleName";
import Board from "../../Components/Board";
import RandomFacts from "./RandomFacts";
import AnimateWrapper from "../../Components/AnimateWrapper";

const Random = () => {
  return (
    <AnimateWrapper>
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
    </AnimateWrapper>
  );
};

export default Random;
