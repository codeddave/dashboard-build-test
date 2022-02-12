import React from "react";
import DataCard from "./DataCard";
import UserIcon from "../assets/icons/user.svg";
import EnvIcon from "../assets/icons/env.svg";
import CommentIcon from "../assets/icons/comment.svg";

const DataCardContainer = () => {
  return (
    <div className="flex justify-between pl-12">
      <DataCard title="Users" image={UserIcon} data="67" />
      <DataCard title="Posts" image={EnvIcon} data="495" />
      <DataCard title="Comments" image={CommentIcon} data="6459" />
    </div>
  );
};

export default DataCardContainer;
