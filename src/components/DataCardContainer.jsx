import React, { useEffect } from "react";
import DataCard from "./DataCard";
import UserIcon from "../assets/icons/user.svg";
import EnvIcon from "../assets/icons/env.svg";
import CommentIcon from "../assets/icons/comment.svg";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./user/userSlice";
import { selectUsers } from "./user/userSelectors";
import { selectPosts } from "./posts/postSelectors";
import { getPosts } from "./posts/postSlice";

const DataCardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPosts());
  }, [dispatch]);
  const users = useSelector(selectUsers);
  const posts = useSelector(selectPosts);

  return (
    <div className="flex max-md flex-col md:flex-row justify-between pl-12">
      <DataCard title="USERS" image={UserIcon} data={users?.data?.length} />
      <DataCard title="POSTS" image={EnvIcon} data={posts?.data?.length} />
      <DataCard title="COMMENTS" image={CommentIcon} data="6459" />
    </div>
  );
};

export default DataCardContainer;
