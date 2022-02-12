import React from "react";
import DataCard from "./DataCard";
import UserIcon from "../assets/icons/user.svg";
import EnvIcon from "../assets/icons/env.svg";
import CommentIcon from "../assets/icons/comment.svg";

const DataCardContainer = () => {
  return (
    <div className="flex justify-between pl-12">
      <DataCard title="USERS" image={UserIcon} data="67" />
      <DataCard title="POSTS" image={EnvIcon} data="495" />
      <DataCard title="COMMENTS" image={CommentIcon} data="6459" />
    </div>
  );
};

export default DataCardContainer;
