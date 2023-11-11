import { signIn } from "next-auth/react";

const page = () => {
  return (
    <main className="h-1/2 flex justify-center items-center">
      <div className="flex flex-col max-w-md mx-auto bg-gray-100 rounded-md p-5 shadow-sm">
        <h1 className="text-xl font-bold mb-2 uppercase">login</h1>
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              id="username"
              className="px-2 mb-2 text-gray-600 border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">password</label>
            <input
              type="text"
              name="password"
              id="password"
              className="px-2 border-b text-gray-600 border-gray-400"
            />
          </div>

          <button
            onClick={signIn("credentials", {
              username: "demo",
              password: "password",
            })}
            className="border border-gray-400 rounded-md w-full mt-4 py-1 px-4"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default page;
