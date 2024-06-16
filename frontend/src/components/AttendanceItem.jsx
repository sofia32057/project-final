import React from "react";

export const AttendanceItem = ({ dt, dd }) => {
  return (
    <div key={dt} className="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
      <dt className="font-cormorant text-sm font-semibold leading-6">{dt}</dt>
      <dd className="text-gray-700 mt-1 text-sm leading-6 sm:mt-0">{dd}</dd>
    </div>
  );
};
