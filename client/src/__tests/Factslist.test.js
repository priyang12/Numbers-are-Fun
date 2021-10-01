import { screen, render } from '@testing-library/react';
import Factslist from '../Components/Factslist';

const List = `{
  "0": "0 is the additive identity.",
  "1": "1 is the multiplicative identity.",
  "2": "2 is the only number x such that the sum of the reciprocals of the powers of x equals itself.",
  "3": "3 is the first number, according to Proclus, being the first number such that n2 is greater than 2n.",
  "4": "4 is the maximum number of dimensions of a real division algebra (the quaternions), by a theorem of Ferdinand Georg Frobenius.",
  "5": "5 is also the number of Platonic solids."
 }`;

const newList = JSON.parse(List);
describe('List Test', () => {
  it('check loading', () => {
    render(<Factslist Facts={newList} />);
    const container = screen.getByTestId('ListItems');
  });
});
