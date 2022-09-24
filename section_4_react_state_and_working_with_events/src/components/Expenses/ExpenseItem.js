import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const ExpenseItem = props => {
  let title = props.title;
  const amount = '$' + props.amount;
  const clickHandler = () => {
    const titles = ["Foo", "Bar", "Fizz", "Buzz"];
    console.log("Clicked!!!");
    console.log("title was: " + title);
    const index = Math.floor(Math.random() * titles.length)
    title = titles[index];
    console.log("title is now: " + title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;