import { screen, render, fireEvent } from "@testing-library/react";
import MultipleFacts from "../Components/MultipleFacts";
import "@testing-library/jest-dom";

it("Check Button Names", () => {
  render(<MultipleFacts />);
  expect(screen.getByText(/Math/)).toBeInTheDocument();
  expect(screen.getByText(/Trivia/)).toBeInTheDocument();
  expect(screen.getByText(/Year/)).toBeInTheDocument();
});
it("Check Buttons click Functions", () => {
  const GetUrl = jest.fn();
  render(<MultipleFacts seturl={GetUrl} />);
  const Math = screen.getByText(/Math/);
  fireEvent.click(Math);
  expect(GetUrl).toHaveBeenCalledTimes(1);
});
