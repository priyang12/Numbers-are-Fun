import { screen, render } from '@testing-library/react';
import Factslist from '../Components/Factslist';

const List = {
  1: "1 is the most common leading digit in many sets of data, a consequence of Benford's law.",
  2: '2 is the third Fibonacci number, and the third and fifth Perrin numbers.',
  3: '3 is the first number, according to the Pythagoreans, and the first male number.',
  4: '4 is the second square number, the second centered triangular number.',
  5: '5 is the number of Platonic solids.',
  6: '6 is a unitary perfect number, a harmonic divisor number and a highly composite number.',
  7: '7 is the smallest number of sides of a regular polygon that is not constructible by straightedge and compass.',
  8: '8 is the dimension of the octonions and is the highest possible dimension of a normed division algebra.',
  9: '9 is the sum of the digits of 41 is 5, and 41-5 = 36.',
  10: '10 is the number system used in everyday life, the decimal system, has 10 digits: 0,1,2,3,4,5,6,7,8,9.',
  11: '11 is the 5th smallest prime number.',
  12: '12 is a sublime number, a number that has a perfect number of divisors, and the sum of its divisors is also a perfect number.',
  13: '13 is the number of Archimedian solids.',
  14: '14 is the 3rd discrete semiprime ( 2 .',
  15: '15 is the smallest composite number n with the property that there is only one group of order n.',
  16: '16 is the hexadecimal system, a common number system used in computer programming, uses 16 digits where the last 6 are usually represented by letters: 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F.',
  17: '17 is a repunit prime in hexadecimal (11).',
  18: '18 is a heptagonal number, and as the sum of the first three pentagonal numbers, it is a pentagonal pyramidal number.',
  19: '19 is a centered triangular number, centered hexagonal number and a Heegner number.',
  20: '20 is the third composite number comprising the product of a squared prime and a prime, and also the second member of the (22)q family in this form.',
};

describe('List Test', () => {
  it('check loading', () => {
    render(<Factslist Facts={List} />);
    const container = screen.getByTestId('ListItems');
  });
});
