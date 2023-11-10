const AddPost = () => {
  return (
    <article className="bg-gray-50 mb-5 rounded-xl p-3">
      <textarea
        className="w-full .focus focus:outline-teal-500 p-3"
        placeholder="do you have any questions?"
      ></textarea>

      <hr className="my-1" />

      <button className="border border-gray-300 px-4 py-1 rounded-lg hover:bg-teal-400">
        Post
      </button>
    </article>
  );
};

export default AddPost;
