import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

function NewPost({ onAddPost }) {
  const [enteredText, setEnteredText] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function handleBodyChange(event) {
    setEnteredText(event.target.value);
  }
  function handleAuthorChange(event) {
    setEnteredAuthor(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body: enteredText,
      author: enteredAuthor,
    };

    onAddPost(postData);
    onCancel();
  }

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={handleBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={handleAuthorChange} />
        </p>
        <p className={classes.actions}>
          <Link to='/' type="button" >
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
