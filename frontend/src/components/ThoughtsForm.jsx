import { useEffect, useRef, useState } from "react";
import { Counter } from "./Counter";
import { Button } from "./Button";

export const ThoughtsForm = ({ newThought, setNewThought }) => {
  const formInput = useRef();
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [submitOk, setSubmitOk] = useState(false);

  const postThought = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://project-happy-thoughts-api-4mf8.onrender.com/thoughts",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: newThought }),
        },
      );
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      setNewThought("");
    } catch (error) {
      setErrorMessage("Your thought couldn't be posted...");
      throw new Error("Error", error);
    }
  };

  useEffect(() => {
    setTimeout(() => setErrorMessage(""), 5000);
  }, [errorMessage]);

  useEffect(() => {
    count >= 5 && count <= 140 && setSubmitOk(true);
  }, [count]);

  const handleChange = (event) => {
    setNewThought(event.target.value);
    setCount(event.target.value.length);
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={postThought}>
        <textarea
          className="text-gray-900 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 p-6 py-1.5 font-cormorant shadow-sm ring-1 ring-inset ring-primary focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          name="thought"
          id="thought-input"
          cols="30"
          rows="10"
          minLength={5}
          maxLength={140}
          ref={formInput}
          value={newThought}
          onChange={handleChange}
          placeholder="Send us or the other guests a message!"
        ></textarea>

        {errorMessage && <p className="error error-message">{errorMessage}</p>}
        {count > 0 && <Counter characters={count} />}
        <Button
          action={!submitOk}
          type={"button"}
          style={"primary"}
          label={"Send Happy Thought"}
        />
      </form>
    </div>
  );
};
