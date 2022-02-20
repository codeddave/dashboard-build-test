import classNames from "classnames";
import React from "react";
const DataCard = ({ title, image, data }) => {
  const isPosts = title === "Posts";
  return (
    <div
      className={classNames(
        `shadow-lg flex w-5/6 mt-2 md:mt-0 md:w-1/3 mr-4 py-5 `,

        {
          "pl-7": isPosts,
          "pl-6": !isPosts,
        }
      )}
    >
      <div className="w-12 h-12 p-2 bg-blue-300 rounded-full flex justify-center items-center">
        <img src={image} alt="users" />
      </div>

      <div className="flex flex-col justify-center pl-4">
        <p className="text-xs text-gray-500">{title}</p>
        <p>{data}</p>
      </div>
    </div>
  );
};

export default DataCard;
