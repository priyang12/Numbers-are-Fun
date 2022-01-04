import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputNumber from "../Components/InputNumber";

it("User Input Number", () => {
  render(<InputNumber />);
  const input = screen.getByTestId("input-number");
  userEvent.type(input, "1");
  expect(input.value).toBe("1");
});
