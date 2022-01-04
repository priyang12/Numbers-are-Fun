import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputNumber from "../Components/InputNumber";
import LeftArrowImg from "../assets/LeftArrow.svg";
import RightArrowImg from "../assets/RightArrow.svg";

it("Left and Right Arrows", () => {
  const MockFunction = jest.fn();
  render(<InputNumber SetNumber={MockFunction} />);
  const leftArrow = screen.getByAltText("left arrow");
  const rightArrow = screen.getByAltText("right arrow");

  //Check for Correct Image
  expect(leftArrow.src).toBe("http://localhost/" + LeftArrowImg);
  expect(rightArrow.src).toBe("http://localhost/" + RightArrowImg);
});

it("User Input Number", () => {
  const MockFunction = jest.fn();
  render(<InputNumber SetNumber={MockFunction} />);

  const input = screen.getByTestId("input-number");
  userEvent.type(input, "1");
  expect(input.value).toBe("1");

  // //Increment input value on Arrow click
  userEvent.click(screen.getByAltText("right arrow"));
  expect(input.value).toBe("2");

  // //Decrement input value on Arrow click
  userEvent.click(screen.getByAltText("left arrow"));
  expect(input.value).toBe("1");

  // Function Call for Input Number
  expect(MockFunction).toHaveBeenCalledTimes(4);
});
