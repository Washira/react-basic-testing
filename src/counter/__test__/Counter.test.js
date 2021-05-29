import React from "react";
import Counter from "../Counter";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("header renders with correct text", () => {
  const component = render(<Counter />);
  const headerEl = component.getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initally start with of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addbtn = getByTestId("add-btn");

  expect(addbtn.textContent).toBe("+");
});

test("substract button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const substractbtn = getByTestId("substract-btn");

  expect(substractbtn.textContent).toBe("-");
});
