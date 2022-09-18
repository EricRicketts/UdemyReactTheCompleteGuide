import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpenseItem from "../ExpenseItem";

describe("Test ExpenseItem component", () => {
  let data;
  beforeEach(() => {
    data = {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    };
  });
  test("ExpenseItem component should include its own h2 element", () => {
    render(
      <ExpenseItem title={data.title} date={data.date} amount={data.amount} />
    );
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("Car Insurance");
  });
  test('ExpenseItem component should inclue item price', () => {
    render(
      <ExpenseItem title={data.title} date={data.date} amount={data.amount} />
    );
    expect(screen.getByText("$294.67")).toBeInTheDocument();
  });
  test('should have all date items', () => {
    const expected = [/March/i, /28/, /2021/];
    const date = new Date(2021, 2, 28); 
    render(
      <ExpenseItem title={data.title} date={data.date} amount={data.amount} />
    );
    expected.forEach(dateItem => {
      expect(screen.getByText(dateItem)).toBeInTheDocument();
    });
    
  });
});
