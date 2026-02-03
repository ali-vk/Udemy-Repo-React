import { useContext } from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";
import { TodosContext } from "../store/todos-context";

const TodoItem: React.FC<{
  todo: Todo;
}> = ({ todo }) => {
    const todosCtx = useContext(TodosContext)
  return (
    <li onClick={() => todosCtx.removeTodo  (todo.id)} className={classes.item}>
      {todo.text}
    </li>
  );
};

export default TodoItem;
