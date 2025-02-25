import { useLoaderData } from "react-router-dom";

function PostDetails() {
  const post = useLoaderData(); // Get preloaded data

  return (
    <div>
      <h1>📖 {post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetails;
