import { Fragment, lazy, Profiler, Suspense } from "react";
import TitleName from "../Components/TitleName";
import Board from "../Components/Board";
import RandomFacts from "../Components/RandomFacts";
import ProfilerComponent from "../Components/ProfilerComponent";

const RandomFactsLazy = lazy(() => import("../Components/RandomFacts"));

const Random = () => {
  return (
    <Fragment>
      <Board>
        <TitleName title='Random Numbers' />
        <ProfilerComponent id='multiple'>
          <RandomFacts type='math' />
        </ProfilerComponent>
      </Board>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Board>
          <RandomFactsLazy type='trivia' />
        </Board>
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading...</div>}>
        <Board>
          <RandomFactsLazy type='year' />
        </Board>
      </Suspense>
    </Fragment>
  );
};

export default Random;
