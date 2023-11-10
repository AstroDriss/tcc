import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Post = () => {
  return (
    <article className="bg-gray-50 mb-2 rounded-xl p-3">
      {/* user info */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[36px] aspect-square rounded-full bg-gray-200">
          <Image src="" alt="Picture of the author" />
        </div>

        <div className="flex flex-col">
          <p className="m-0">Joen Doe</p>
          <time className="text-xs text-gray-400" dateTime="2023-11-10">
            2023-11-10
          </time>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo minus
        laudantium inventore ipsam eaque magnam facilis quidem beatae quod nam.
      </p>

      <div className="mt-3">
        <button>
          <FontAwesomeIcon icon={faComment} className="w-5 text-gray-400" />
        </button>
      </div>
    </article>
  );
};

export default Post;
