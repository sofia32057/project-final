import React from "react";

export const Paragraph = ({ content }) => {
  return (
    <>
      {typeof content == "string" ? (
        <p className="text-base mt-8 leading-7 ">{content}</p>
      ) : (
        content.map((par) => {
          return (
            <p key={par} className="text-base mt-8 leading-7 ">
              {par}
            </p>
          );
        })
      )}
    </>
  );
};
