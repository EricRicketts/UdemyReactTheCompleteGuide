import React from "react";
import NewExpense from "../NewExpense/NewExpense";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Test New Expense", () => {
  describe("Test That The Component Renders", () => {
    test("should render the title field", async () => {
      render(<NewExpense />);
      expect(await screen.findByLabelText(/Title/i)).toBeInTheDocument();
    });
    test("should render the amount field", async () => {
      render(<NewExpense />);
      expect(await screen.findByLabelText(/Amount/i)).toBeInTheDocument();
    });
    test("should render the date field", async () => {
      render(<NewExpense />);
      expect(await screen.findByLabelText(/Date/i)).toBeInTheDocument();
    });
  });
  describe("Test That Data Can Be Entered In The Form", () => {
    test("should be able to enter a new title", async () => {
      render(<NewExpense />);
      const titleInput = await screen.findByLabelText("Title");
      const newTitle = "New Title";
      await userEvent.type(titleInput, newTitle);
      await waitFor(() => expect(titleInput).toHaveValue(newTitle));
    });
    test("should be able to enter a new date", async () => {
      render(<NewExpense />);
      const dateInput = await screen.findByLabelText("Date");
      const newDate = "2019-03-02";
      await userEvent.type(dateInput, newDate);
      await waitFor(() => expect(dateInput).toHaveValue(newDate));
    });
    test("should be able to enter a new amount", async () => {
      render(<NewExpense />);
      const amountInput = await screen.findByLabelText("Amount");
      const newAmountEntry = "66.05";
      const newAmount = 66.05;
      await userEvent.type(amountInput, newAmountEntry);
      await waitFor(() => expect(amountInput).toHaveValue(newAmount));
    });
  });
});
