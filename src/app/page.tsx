import { AddPost, Post } from "../components";
import { prisma } from "./db";

export default async function Home() {
  // try {
  //   const post = await prisma.post.create({
  //     data: {
  //       body: "idriss first post",
  //       createdBy: {
  //         connect: {
  //           id: 1,
  //         },
  //       },
  //     },
  //   });
  //   console.log("Post created:", post);
  // } catch (error) {
  //   console.error("Error creating post:", error);
  // }

  const posts = await prisma.post.findMany({
    select: {
      id: true,
      body: true,
      createdBy: {
        select: {
          id: true,
          userName: true,
        },
      },
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  // const drissPosts = await prisma.user.findFirst({
  //   where: { id: 1 },
  //   include: {
  //     posts: true,
  //   },
  // });
  // console.log(drissPosts);

  return (
    <main className="container p-2 max-w-4xl mx-auto">
      <AddPost />

      {posts.map((post) => (
        <Post
          key={post.id}
          body={post.body}
          username={post.createdBy.userName}
          createdAt={post.createdAt}
        />
      ))}
    </main>
  );
}
