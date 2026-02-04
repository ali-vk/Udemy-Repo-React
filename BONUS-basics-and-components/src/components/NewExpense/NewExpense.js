import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({onAddExpense}) {
    function onSubmitHandler(newExpense) {
        const expense = {
            ...newExpense,
            id: Math.random()
        }
        onAddExpense(expense);
    }
  return (
    <div className="new-expense">
      <ExpenseForm onSave={onSubmitHandler} />
    </div>
  );
}
