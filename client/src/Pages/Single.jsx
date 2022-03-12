import SingleFact from "../Components/SingleFact";
import Board from "../Components/Board";
import TitleName from "../Components/TitleName";
import ProfilerComponent from "../Components/ProfilerComponent";
import { Fragment } from "react";

const Single = () => {
  return (
    <Fragment>
      <Board>
        <TitleName title='Single Numbers' />
        <ProfilerComponent id='Single'>
          <SingleFact type='math' />
        </ProfilerComponent>
        <SingleFact type='trivia' />
        <SingleFact type='year' />
      </Board>
    </Fragment>
  );
};

export default Single;
