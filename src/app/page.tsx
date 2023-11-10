import { AddPost, Post } from "../components";

export default function Home() {
  return (
    <main className="container p-2 max-w-4xl mx-auto">
      <AddPost />

      <Post />
      <Post />
      <Post />
    </main>
  );
}
