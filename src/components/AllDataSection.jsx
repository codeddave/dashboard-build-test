import React, { useEffect, useState } from "react";
import AllUsers from "./user/AllUsers";
import { Tab } from "./common/Tab";
import { useTabs } from "./hooks/useTab";
import { useDispatch } from "react-redux";
import { getUserById, getUsers } from "./user/userSlice";
import { useSelector } from "react-redux";
import {
  selectUser,
  selectUsers,
  selectUsersLoading,
} from "./user/userSelectors";
import UserDetailsCard from "./UserDetailsCard";
import AllPosts from "./posts/AllPosts";
import { getPostById } from "./posts/postSlice";
import { selectPost, selectPosts } from "./posts/postSelectors";
import PostDetailsCard from "./posts/PostDetailsCard";
import Pagination from "./Pagination";
const AllDataSection = () => {
  const { onTabClick, tab } = useTabs("users");

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(5);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const posts = useSelector(selectPosts);
  const usersLoadin = useSelector(selectUsersLoading);
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;

  //const currentData = tab === "users" ? users : posts;
  const data = tab === "users" ? users : posts;

  const currentData = data.data?.slice(indexOfFirstData, indexOfLastData);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };
  const handlePageNumberCLick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
  console.log(currentData);
  useEffect(() => {
    console.log(usersLoadin);
  }, [usersLoadin]);
  if (!usersLoadin === "resolved") return <p>loading</p>;
  return (
    <>
      <div className="pt-16 pl- flex justify-around">
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
              <AllUsers setId={setId} data={currentData} />
            ) : (
              <AllPosts setId={setId} data={currentData} />
            )}
          </section>
        </section>

        {tab === "users" ? (
          <UserDetailsCard user={user} />
        ) : (
          <PostDetailsCard post={post} />
        )}
      </div>
      <section>
        <Pagination
          dataPerPage={dataPerPage}
          data={tab === "users" ? users : posts}
          handlePageNumberCLick={handlePageNumberCLick}
          handleNextClick={handleNextClick}
          handlePrevClick={handlePrevClick}
        />
      </section>
    </>
  );
};

export default AllDataSection;
