import SingleFact from '../Components/SingleFact';
import Board from '../utils/Board';
import TitleName from '../Components/TitleName';
import { Fragment } from 'react';

const Single = () => {
  return (
    <Fragment>
      <Board>
        <TitleName title='Single Numbers' />
        <SingleFact type='math' />
        <SingleFact type='trivia' />
        <SingleFact type='year' />
      </Board>
    </Fragment>
  );
};

export default Single;
