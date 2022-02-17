import React, { useEffect, useState } from "react";
import AllUsers from "./user/AllUsers";
import { Tab } from "./common/Tab";
import { useTabs } from "./hooks/useTab";
import { useDispatch } from "react-redux";
import { getUserById, getUsers } from "./user/userSlice";
import { useSelector } from "react-redux";
import { selectUser, selectUsers } from "./user/userSelectors";
import UserDetailsCard from "./UserDetailsCard";
import AllPosts from "./posts/AllPosts";
import { getPostById } from "./posts/postSlice";
import { selectPost, selectPosts } from "./posts/postSelectors";
import PostDetailsCard from "./posts/PostDetailsCard";
const AllDataSection = () => {
  const { onTabClick, tab } = useTabs("users");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const posts = useSelector(selectPosts);

  const [id, setId] = useState();

  useEffect(() => {
    if (tab === "users") {
      dispatch(getUserById(id));
    } else {
      dispatch(getPostById(id));
    }
  }, [id, dispatch, tab]);
  const user = useSelector(selectUser);
  const post = useSelector(selectPost);
  const handleUsersTabClick = () => {
    setId(users?.data[0]?.id);
    onTabClick("users");
  };
  const handlePostsTabClick = () => {
    setId(posts?.data[0]?.id);

    onTabClick("posts");
  };
  console.log(id);
  return (
    <div className="pt-16 pl-12 flex justify-around">
      <section className="w-3/5">
        <div className="flex bord">
          <Tab onClick={handleUsersTabClick} current={tab === "users"}>
            All Users
          </Tab>
          <Tab onClick={handlePostsTabClick} current={tab === "posts"}>
            All Posts
          </Tab>
        </div>

        <section className="mt-4 b p-2 rounded  bg-gray-200 ">
          {tab === "users" ? (
            <AllUsers setId={setId} />
          ) : (
            <AllPosts setId={setId} />
          )}
        </section>
      </section>

      {tab === "users" ? (
        <UserDetailsCard user={user} />
      ) : (
        <PostDetailsCard post={post} />
      )}
    </div>
  );
};

export default AllDataSection;
