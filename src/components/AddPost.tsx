import { prisma } from "./../app/db";
import { redirect } from "next/navigation";

async function createPost(data: FormData) {
  "use server";
  const body = data.get("postBody")?.valueOf();
  if (typeof body !== "string" || body.length === 0) {
    throw new Error("Invalid Post");
  }
  await prisma.post.create({
    data: {
      body,
      createdBy: {
        connect: {
          id: 1,
        },
      },
    },
  });

  redirect("/");
}

const AddPost = () => {
  return (
    <article className="bg-gray-50 mb-5 rounded-xl p-3">
      <form action={createPost}>
        <textarea
          name="postBody"
          className="w-full .focus focus:outline-teal-500 p-3"
          placeholder="do you have any questions?"
        ></textarea>

        <hr className="my-1" />

        <button className="border border-gray-300 px-4 py-1 rounded-lg hover:bg-teal-400">
          Post
        </button>
      </form>
    </article>
  );
};

export default AddPost;
