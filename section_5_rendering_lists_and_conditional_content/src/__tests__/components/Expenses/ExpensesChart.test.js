import React from "react";
import { screen, render, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpensesChart from "../../../components/Expenses/ExpensesChart";

describe("Test ExpensesChart Component", () => {
  let testFilteredExpenses;
  beforeEach(() => {
    testFilteredExpenses = [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2021, 7, 14),
      },
      {
        id: "e2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2021, 2, 12),
      },
    ];
  });
  test("should render an expense chart with data for August", () => {
    const percentFill = Math.round(
      (testFilteredExpenses[0].amount / testFilteredExpenses[1].amount) * 100
    );
    const expectedStyle = { height: percentFill + "%" };
    render(<ExpensesChart expenses={testFilteredExpenses} />);
    const augustChart = screen.getByText(/Aug/i).parentElement;
    const augustBarChart = augustChart.firstElementChild;
    expect(augustBarChart.firstElementChild).toHaveClass("chart-bar__fill");
    expect(augustBarChart.firstElementChild).toHaveStyle(expectedStyle);
  });
});
