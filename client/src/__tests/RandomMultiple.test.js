import { screen, render, fireEvent, act } from '@testing-library/react';
import MultipleRandomFacts from '../Components/MultipleRandomFacts';

describe('Check for Fact Component', () => {
  it('Check Button layout', () => {
    render(<MultipleRandomFacts />);
    const container = screen.getByTestId('multirandom');
    const Types = container.querySelector('#randomType');
    const btns = Types.querySelectorAll('button');
    const math = btns[0];
    const trivia = btns[1];
    const year = btns[2];
    expect(math.textContent).toMatch(/Math/);
    expect(trivia.textContent).toMatch(/Trivia/);
    expect(year.textContent).toMatch(/Year/);
  });
  it('Check Buttons click Functions', () => {
    render(<MultipleRandomFacts />);
    const container = screen.getByTestId('multirandom');
    const Types = container.querySelector('#randomType');
    const btns = Types.querySelectorAll('button');
    const math = btns[0];
    fireEvent.click(math);
  });
});
