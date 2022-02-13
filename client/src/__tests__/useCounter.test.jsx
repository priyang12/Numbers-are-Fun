import { act, renderHook } from "@testing-library/react-hooks";
import { useCounter } from "../utils/Hooks";

it("Use hook init state", () => {
  const { result } = renderHook(() => useCounter(0));
  const { count } = result.current;
  expect(count).toBe(0);
});

it("should increment counter", () => {
  const { result } = renderHook(() => useCounter(0));
  const { increment, count } = result.current;
  act(() => {
    increment();
  });
  expect(count).toBe(1);
});

it("should decremnt counter", () => {
  const { result } = renderHook(() => useCounter(0));
  const { decrement, count } = result.current;
  act(() => {
    decrement();
  });
  expect(count).toBe(-1);
});
