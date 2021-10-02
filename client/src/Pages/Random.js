import { Fragment, lazy, Suspense } from 'react';
import TitleName from '../Components/TitleName';
import Board from '../utils/Board';
import Dice from '../utils/DiceRoll';

const RandomFacts = lazy(() => import('../Components/RandomFacts'));

const Random = () => {
  return (
    <Fragment>
      <Suspense fallback={Dice}>
        <Board>
          <TitleName title='Random Numbers' />
          <RandomFacts type='math' />
        </Board>
      </Suspense>
      <br />
      <Suspense fallback={Dice}>
        <Board>
          <RandomFacts type='trivia' />
        </Board>
      </Suspense>
      <br />
      <Suspense fallback={Dice}>
        <Board>
          <RandomFacts type='year' />
        </Board>
      </Suspense>
    </Fragment>
  );
};

export default Random;
