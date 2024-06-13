import { useEffect, useState } from "react";

export const LikeButton = ({ thoughtId, likes, setLikes }) => {
  const [likeClass, setLikeClass] = useState("like-btn");

  const postLike = async () => {
    try {
      const response = await fetch(
        `https://project-happy-thoughts-api-4mf8.onrender.com/thoughts/${thoughtId}/like`,
        {
          method: "POST",
        },
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
    } catch (error) {
      throw new Error("Error", error);
    }
  };

  const handleLike = (event) => {
    // Toggle class for animation, on and off
    event.target.classList.toggle("animate");
    setTimeout(() => event.target.classList.toggle("animate"), 500);
    postLike(); // Post like to API
    setLikes(likes + 1); //Increase state
  };

  useEffect(() => {
    likes > 0 && setLikeClass("like-btn liked");
  }, [likes]);

  return (
    <button className={likeClass} onClick={handleLike}>
      ❤️
    </button>
  );
};
