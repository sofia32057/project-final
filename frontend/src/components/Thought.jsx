import moment from "moment";
import { useState } from "react";
import { LikeButton } from "./LikeButton";

export const Thought = ({ thought }) => {
  const [likes, setLikes] = useState(thought.hearts);

  const handleDate = (date) => {
    const newDate = new Date(date);
    return moment(newDate).fromNow();
  };

  return (
    <article className="flex flex-col gap-1 px-2 py-4 md:gap-2">
      <p className="font-cormorant">{thought.message}</p>
      <div className="flex flex-row items-center justify-between gap-6 px-2 py-4 md:gap-10">
        <div className="flex gap-1 font-cormorant">
          <LikeButton
            thoughtId={thought._id}
            likes={likes}
            setLikes={setLikes}
          />
          <p className="text-sm"> x {likes}</p>
        </div>
        <time
          className="text-xs text-primary/50"
          dateTime={handleDate(thought.createdAt)}
        >
          {handleDate(thought.createdAt)}
        </time>
      </div>
    </article>
  );
};
