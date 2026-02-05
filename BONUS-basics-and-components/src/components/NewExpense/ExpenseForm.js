import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({onSave}) {
  const [enteredData, setEnteredData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  function onTitleChange(event) {
    setEnteredData((prev) => {
      return { ...prev, title: event.target.value };
    });
  }
  function onAmountChange(event) {
    setEnteredData((prev) => {
      return { ...prev, amount: +event.target.value };
    });
  }
  function onDateChange(event) {
    setEnteredData((prev) => {
      return { ...prev, date: new Date(event.target.value) };
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    onSave(enteredData);
    setEnteredData({ title: "", amount: "", date: "" });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredData.title}
            onChange={onTitleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={enteredData.amount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredData.date}
            type="date"
            min="2025-01-01"
            max="2027-12-31"
            onChange={onDateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
