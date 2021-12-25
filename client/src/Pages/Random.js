import { Fragment, lazy, Suspense } from "react";
import TitleName from "../Components/TitleName";
import Board from "../utils/Board";
import Dice from "../utils/DiceRoll";
import RandomFacts from "../Components/RandomFacts";

const RandomFactsLazy = lazy(() => import("../Components/RandomFacts"));

const Random = () => {
  return (
    <Fragment>
      <Board>
        <TitleName title='Random Numbers' />
        <RandomFacts type='math' />
      </Board>
      <br />
      <Suspense fallback={Dice}>
        <Board>
          <RandomFactsLazy type='trivia' />
        </Board>
      </Suspense>
      <br />
      <Suspense fallback={Dice}>
        <Board>
          <RandomFactsLazy type='year' />
        </Board>
      </Suspense>
    </Fragment>
  );
};

export default Random;
