import React from "react";
import LikeIcon from "../../assets/icons/red-like.svg";

const PostDetailsCard = ({ post }) => {
  console.log(post);
  if (!post) return <p>hel</p>;
  return (
    <section className="border-2 rounded h-auto w-1/4 mr p-4 text-xs">
      {post?.image ? (
        <section>
          <img
            src={post?.image}
            alt="post"
            className="w-full h-32 object-cover rounded"
          />

          <p className="pt-2">{post.text} </p>
          <div className="flex items-center pt-2">
            <img src={LikeIcon} alt="likes" />
            <p className="pl-2 text-red-500">{post?.likes} Likes</p>
          </div>
          <p className="pt-4 mb-1.5 text-gray-400 text-xs">TAGS</p>
          <div className="flex  justify-between">
            {post?.tags.map((tag) => (
              <div className="border border-blue-400 px-1 will-change-contents text-center mr-2 rounded">
                {tag}
              </div>
            ))}
          </div>

          <hr className="mt-3" />

          <p className="text-gray-500 pt-1">OWNER</p>
          <hr className="mt-1" />

          <div className="flex pt-2 items-center">
            <img
              src={post?.owner?.picture}
              className="w-8 h-8 rounded-full"
              alt="owner"
            />
            <p className="pl-2 text-gray-500">
              {post?.owner?.firstName} {post?.owner?.lastName}
            </p>
          </div>
          <p className="pt-2 text-gray-400">FULL NAME</p>
          <p className="pt-1">
            {post?.owner?.title} {post?.owner?.firstName}{" "}
            {post?.owner?.lastName}
          </p>
        </section>
      ) : (
        <p className="text-center pt-20">
          Please Select a post from list to view{" "}
        </p>
      )}
    </section>
  );
};

export default PostDetailsCard;
