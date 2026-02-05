import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </div>
  );
}
