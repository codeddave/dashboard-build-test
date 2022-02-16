import React, { useEffect, useState } from "react";
import AllUsers from "./user/AllUsers";
import { Tab } from "./common/Tab";
import { useTabs } from "./hooks/useTab";
import { useDispatch } from "react-redux";
import { getUserById } from "./user/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./user/userSelectors";
import UserDetailsCard from "./UserDetailsCard";
import AllPosts from "./posts/AllPosts";
import { getPostById } from "./posts/postSlice";
import { selectPost } from "./posts/postSelectors";
import PostDetailsCard from "./posts/PostDetailsCard";
const AllDataSection = () => {
  const { onTabClick, tab } = useTabs("users");
  const dispatch = useDispatch();

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

  return (
    <div className="pt-16 pl-12 flex justify-around">
      <section className="w-3/5">
        <div className="flex bord">
          <Tab onClick={() => onTabClick("users")} current={tab === "users"}>
            All Users
          </Tab>
          <Tab onClick={() => onTabClick("posts")} current={tab === "posts"}>
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
      {tab === "user" ? (
        <UserDetailsCard user={user} />
      ) : (
        <PostDetailsCard post={post} />
      )}
    </div>
  );
};

export default AllDataSection;
