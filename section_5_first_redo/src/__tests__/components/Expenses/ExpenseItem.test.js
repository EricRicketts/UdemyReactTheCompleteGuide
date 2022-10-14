import React from "react";
import ExpenseItem from "../../../components/Expenses/ExpenseItem";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test The ExpenseItem Component", () => {
  let expense;
  beforeEach(() => {
    expense = {
      id: "#4C9",
      title: "Test Item",
      amount: 54.32,
      date: new Date("12/10/2019"),
    };
  });

  describe("Test The ExpenseDate Component Renders", () => {
    test("should render the day of the month", () => {
      render(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
      expect(screen.getByText("10")).toBeInTheDocument();
    });
    test("should render the full month name", () => {
      render(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
      expect(screen.getByText("December")).toBeInTheDocument();
    });
    test("should render the full year", () => {
      render(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
      expect(screen.getByText("2019")).toBeInTheDocument();
    });
  });
  describe("Test The Amount And Title Render", () => {
    test("should render the title", () => {
      render(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
      expect(screen.getByText(/Test Item/i)).toBeInTheDocument();
    });
    test("should render the price", () => {
      render(
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
      screen.logTestingPlaygroundURL();
      expect(screen.getByText(/\$54\.32/i)).toBeInTheDocument();
    });
  });
});
