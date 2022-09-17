import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExpenseItem from "../ExpenseItem";

describe('Test ExpenseItem component', () => {
  test('ExpenseItem component should include its own h2 element', () => {
    render(<ExpenseItem />);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });
    
});