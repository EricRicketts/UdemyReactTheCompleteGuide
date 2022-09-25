import React from "react";
import NewExpense from "../NewExpense/NewExpense";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("Test New Expense", () => {
  describe('Test That The Component Renders', () => {
    test("should render the title field", async () => {
      render(<NewExpense />); 
      await waitFor(() => expect(screen.queryByLabelText("Title")).toBeInTheDocument());
    }); 
    test("should render the amount field", async () => {
      render(<NewExpense />); 
      await waitFor(() => expect(screen.queryByLabelText("Amount")).toBeInTheDocument());
    }); 
    test("should render the date field", async () => {
      render(<NewExpense />); 
      await waitFor(() => expect(screen.queryByLabelText("Date")).toBeInTheDocument());
    }); 
  });
  describe("Test That Data Can Be Entered In The Form", () => {
    test("should be able to enter a new title", async () => {
      render(<NewExpense />); 
      const titleInput = await screen.findByLabelText("Title"); 
      const newTitle = "New Title"
      await userEvent.type(titleInput, newTitle);
      await waitFor(() => expect(titleInput).toHaveValue(newTitle));
    }); 
  }); 
});