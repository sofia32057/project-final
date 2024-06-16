import React from "react";

export const Paragraph = ({ content }) => {
  return (
    <>
      {content === "" || typeof content == "string" ? (
        <p className="text-base mt-8 leading-7 ">{content}</p>
      ) : (
        content.map((p) => {
          return (
            <p key={p} className="text-base mt-8 leading-7 ">
              {p}
            </p>
          );
        })
      )}
    </>
  );
};
