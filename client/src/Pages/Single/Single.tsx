import SingleFact from "./SingleFact";
import Board from "../../Components/Board";
import TitleName from "../../Components/TitleName";
import AnimateWrapper from "../../Components/AnimateWrapper";

const Single = () => {
  return (
    <AnimateWrapper>
      <Board>
        <TitleName title="Single Numbers" />
        <SingleFact type="math" />
        <SingleFact type="trivia" />
        <SingleFact type="year" />
      </Board>
    </AnimateWrapper>
  );
};

export default Single;
