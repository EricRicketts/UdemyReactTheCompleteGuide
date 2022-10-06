import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Test The Expenses Filter", () => {
  let selectedYear, onChangeFilterSpy;
  beforeEach(() => {
    selectedYear = "2020";
    onChangeFilterSpy = jest.fn();
  });
  test("should render the ExpensesFilter with the default year", () => {
    render(
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={onChangeFilterSpy}
      />
    );
    const yearSelector = screen.getByLabelText(/Filter by year/i);
    expect(yearSelector).toHaveValue(selectedYear);
  });
  test("should call the change handler when a year is changed", async () => {
    const newlySelectedYear = "2022";
    render(
      <ExpensesFilter
        selected={selectedYear}
        onChangeFilter={onChangeFilterSpy}
      />
    );
    const yearSelector = screen.getByLabelText(/Filter by year/i);
    fireEvent.change(yearSelector, { target: { value: newlySelectedYear } });
    expect(onChangeFilterSpy).toHaveBeenCalled();
  });
});
