import React from "react";
import Counter from "../Counter";
import { fireEvent, render } from "@testing-library/react";
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

test("substract button renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractbtn = getByTestId("subtract-btn");

  expect(subtractbtn.textContent).toBe("-");
});

test("change value of input works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on plus btn adds 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("1");
});

test("click on subtract btn substracts 1 to counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("-1");
});

test("changing input value then clicking on add btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.textContent).toBe("5");
});

test("changing input value then clicking on subtract btn works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("-5");
});

test("adding and then subtracting leads to the correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("20");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("15");
});

test("counter contains correct className", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  

  expect(counterEl.className).toBe("red");
});
