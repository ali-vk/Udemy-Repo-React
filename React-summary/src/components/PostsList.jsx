import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(newPost) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prev) => {
      console.log("prev", prev);
      console.log("new", newPost);
      return [...prev, newPost];
    });
  }
  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.author} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no Posts yet.</h2>
          <p>start adding some.</p>
        </div>
      )}
    </>
  );
}
