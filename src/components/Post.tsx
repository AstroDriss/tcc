import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-regular-svg-icons";

type PostType = {
  body: string;
  username: string;
  createdAt: Object;
};

const Post = ({ body, username, createdAt }: PostType) => {
  const formatDate = (timestamp) => {
    const now = new Date();
    const date = new Date(timestamp);

    const timeDiffInSeconds = Math.floor((now - date) / 1000);

    const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

    if (timeDiffInSeconds < 60) {
      return rtf.format(-timeDiffInSeconds, "second");
    } else if (timeDiffInSeconds < 3600) {
      const minutes = Math.floor(timeDiffInSeconds / 60);
      return rtf.format(-minutes, "minute");
    } else if (timeDiffInSeconds < 86400) {
      const hours = Math.floor(timeDiffInSeconds / 3600);
      return rtf.format(-hours, "hour");
    } else if (timeDiffInSeconds < 2592000) {
      const days = Math.floor(timeDiffInSeconds / 86400);
      return rtf.format(-days, "day");
    } else {
      return new Intl.DateTimeFormat("en", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);
    }
  };

  return (
    <article className="bg-gray-50 mb-2 rounded-xl p-3">
      {/* user info */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[36px] aspect-square rounded-full bg-gray-200">
          <Image width={36} height={36} src="" alt="Picture of the author" />
        </div>

        <div className="flex flex-col">
          <p className="m-0">{username}</p>
          <time className="text-xs text-gray-400" dateTime="2023-11-10">
            {formatDate(createdAt)}
          </time>
        </div>
      </div>

      <p>{body}</p>

      <div className="mt-3">
        <button>
          <FontAwesomeIcon icon={faComment} className="w-5 text-gray-400" />
        </button>
      </div>
    </article>
  );
};

export default Post;
