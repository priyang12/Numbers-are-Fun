import SingleFact from '../Components/SingleFact';
import Board from '../utils/Board';
import Header from '../Components/Header';
import { Fragment } from 'react';
import Footer from '../Components/Footer';

const Single = () => {
  return (
    <Fragment>
      <Board>
        <Header title='Single Numbers' />
        <SingleFact type='math' />
        <SingleFact type='trivia' />
        <SingleFact type='year' />
      </Board>
      <Footer />
    </Fragment>
  );
};

export default Single;
