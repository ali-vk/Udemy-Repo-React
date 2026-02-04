import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2021");
  function handleChange(year) {
    setFilteredYear(year);
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear,
  );

  console.log(filteredExpenses);
  return (
    <div className="expenses">
      <ExpensesFilter onChange={handleChange} selected={filteredYear} />
      {!filteredExpenses.length && <p>No expenses found!</p>}
      {filteredExpenses.length &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </div>
  );
}
