import dayjs from "dayjs";
import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectPosts, selectPostsLoading } from "./postSelectors";
import { getPosts } from "./postSlice";
import LikeIcon from "../../assets/icons/thumb.svg";

const AllPosts = ({ setId, data }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector(selectPosts);
  const isLoading = useSelector(selectPostsLoading);

  console.log(posts);
  if (!data || isLoading === "pending")
    return (
      <div className="h-96 flex justify-center items-center">
        <TailSpin color="#5e97d4" />
      </div>
    );

  return (
    <section className="h-96 overflow-y-scroll">
      <table
        className="text-left text-gray-500 text-xs  py-8  "
        style={{ padding: "4rem", width: "100%" }}
      >
        <thead>
          <tr className="bg-light ">
            <th scope="col" className="pr-10 py-2 ">
              <input type="checkbox" className="ml-3 " />
            </th>

            <th scope="col" className="pr-10 md:pr-4 text-w">
              OWNER
            </th>
            <th scope="col" className="pr-1">
              TITLE
            </th>
            <th scope="col" className="pr-4 md:pr-10">
              LIKES
            </th>
            <th scope="col" className="pr-1">
              PUBLISH DATE
            </th>
          </tr>
        </thead>
        <tbody className="bg-white mt-4 pl-8 w-full">
          {data.map((post) => (
            <tr
              className=" shadow pb-4 px-4 w-full rounded cursor-pointer h-6"
              style={{ marginBottom: "40px" }}
              onClick={() => setId(post.id)}
            >
              <td className="mb-8 py-2 ">
                {" "}
                <input type="checkbox" className="ml-3" />
              </td>
              <td className="my-4 flex items-center">
                <img
                  src={post.image}
                  alt=""
                  className="-pl-2 rounded-full w-8 h-8"
                />
                <p className="pl-1">
                  {post?.owner?.firstName} {post?.owner?.lastName}
                </p>
              </td>

              <td>{post.text}</td>

              <td className="flex items-center">
                <img src={LikeIcon} alt="like" />
                <p className="pl-1">{post.likes}</p>
              </td>
              <td>{dayjs(post.publishDate).format("MMMM D, YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllPosts;
