import React from "react";
import ExpenseDate from "../../../components/Expenses/ExpenseDate";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test ExpenseDate Component", () => {
  let testDate;
  beforeEach(() => {
    testDate = new Date("12/10/2019");  
  });
  test("the ExpenseDate should render the day of the month", () => {
    render(<ExpenseDate date={testDate} />); 
    expect(screen.getByText("10")).toBeInTheDocument();
  });    
  test("the ExpenseDate should render the full month name", () => {
    render(<ExpenseDate date={testDate} />); 
    expect(screen.getByText("December")).toBeInTheDocument();
  });    
  test("the ExpenseDate should render the full year", () => {
    render(<ExpenseDate date={testDate} />); 
    expect(screen.getByText("2019")).toBeInTheDocument();
  });    
});

