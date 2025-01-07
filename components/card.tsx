import React from "react";

type Props = {};

const CardComponent = (props: Props) => {
  return (
    <div>
      <div className="rounded-md border border-gray-500 max-w-xs px-2 py-8 text-sm m-2">
        <p className="text-base"> Introduction to github</p>
        <p>Get started using Github in less than an hour.</p>
      </div>
    </div>
  );
};

export default CardComponent;
