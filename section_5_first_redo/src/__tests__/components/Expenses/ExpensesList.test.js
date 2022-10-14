import React from "react";
import ExpensesList from "../../../components/Expenses/ExpensesList";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test Rendering Of ExpensesList Component", () => {
  let testExpenses, textArray;
  beforeEach(() => {
    testExpenses = [
      {
        id: "e10a1",
        title: "Chair",
        amount: 32.1,
        date: new Date(2020, 7, 14),
      },
      {
        id: "e11b1",
        title: "Table",
        amount: 43.21,
        date: new Date(2020, 8, 15),
      },
    ];
  });
  test("should render the first item in the expenses list", () => {
    render(<ExpensesList items={testExpenses} />); 
    textArray = [/Chair/i, /\$32\.1/i, /August/i, /14/i].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    })
  });
  test("should render the second item in the expenses list", () => {
    render(<ExpensesList items={testExpenses} />); 
    textArray = [/Table/i, /\$43\.21/i, /September/i, /15/i].forEach(text => {
      expect(screen.getByText(text)).toBeInTheDocument();
    })
  });
  test("should render two instances of the year ", () => {
    render(<ExpensesList items={testExpenses} />); 
    expect(screen.getAllByText(/2020/i).length).toBe(2);
  });
  test("should render a default element if there are no expenses", () => {
    render(<ExpensesList items={[]} />); 
    expect(screen.getByText(/Found no expenses\./i)).toBeInTheDocument();
  });
});
