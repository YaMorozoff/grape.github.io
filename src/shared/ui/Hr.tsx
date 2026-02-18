import clsx from "clsx";
import React from "react";

export const Hr = () => {
  return (
    <hr
      className={clsx(
        "w-full h-px border-0 bg-linear-to-r from-[#4B37B280] via-grape to-[#4B37B280]",
      )}
    />
  );
};
