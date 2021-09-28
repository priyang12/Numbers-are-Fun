import { act, renderHook } from '@testing-library/react-hooks';
import { useCounter } from '../Hooks/useCounter';

describe('UseCounter Hook', () => {
  it('Use hook init state', () => {
    const { result } = renderHook(() => useCounter(0));

    const [start, increment, decrement] = result.current;
    expect(start).toEqual(0);
  });

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0));
    const [start, increment, decrement] = result.current;
    act(() => {
      increment();
    });
    expect(result.current[0]).toBe(1);
  });

  it('should decremnt counter', () => {
    const { result } = renderHook(() => useCounter(0));
    const [start, increment, decrement] = result.current;
    act(() => {
      decrement();
    });

    expect(result.current[0]).toBe(-1);
  });
});
