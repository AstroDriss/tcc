import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Header = () => {
  return (
    <header className=" shadow-sm bg-gray-100 py-2 ">
      <div className="container flex justify-between items-center mx-auto px-2">
        <div className="logo">logo</div>

        <nav className="">
          <ul className="flex gap-4">
            <li className="border border-gray-300 border-solid rounded-lg">
              <Link href="/" className="py-1 px-2">
                Feeds
              </Link>
            </li>
            <li className="border border-gray-300 border-solid rounded-lg ">
              <Link href="/courses" className="py-1 px-2">
                courses
              </Link>
            </li>
          </ul>
        </nav>

        <Link
          href="/profile"
          className="flex justify-center items-center rounded-full w-[36px] h-[36px] bg-gray-300"
        >
          <FontAwesomeIcon className="w-5" icon={faUser} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
