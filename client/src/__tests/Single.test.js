import GetFact from '../Components/SingleFact';
import {
  screen,
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';

describe('Check for Fact Component', () => {
  it('check for layouts', async () => {
    render(<GetFact type='math' />);
    const container = screen.getByTestId('FactTestId');
    expect(container.classList.contains('d-flex')).toBeTruthy();
    expect(container.classList.contains('align-items-start')).toBeTruthy();
    expect(container.classList.contains('flex-md-row')).toBeTruthy();
  });
  it('Change Value on input', async () => {
    render(<GetFact type='math' />);
    await waitFor(() => screen.getByTestId('loader'));
    const Number = screen.getByLabelText('number-input');
    expect(Number.value).toEqual('0');
    await fireEvent.change(Number, { target: { value: 411 } });
    expect(Number.value).toEqual('411');
  });
});
