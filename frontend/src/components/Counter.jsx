import { useEffect, useState } from "react";

export const Counter = ({ characters }) => {
  const [pClass, setPClass] = useState("");

  useEffect(() => {
    characters < 5 || characters > 140 ? setPClass("error") : setPClass("");
  }, [characters]);

  return (
    <div className="test-sm font-cormorant">
      <p className={pClass}>{characters}/140</p>
    </div>
  );
};
