import { Link } from "react-router-dom";
import classes from "./Post.module.css";

export default function Post({ author, body, id }) {
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
