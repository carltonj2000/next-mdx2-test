import { Post } from "../components/Post";
import { posts } from "../lib/getAllPosts";

export default function IndexPage() {
  return (
    <>
      {posts.map((post) => (
        <Post key={post.link} post={post} />
      ))}
    </>
  );
}
