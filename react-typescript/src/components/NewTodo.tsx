import { useRef } from "react";

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
  const text = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = text.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    props.onAddTodo(enteredText)
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input ref={text} type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
