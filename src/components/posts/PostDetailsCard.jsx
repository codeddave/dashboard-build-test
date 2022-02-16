import React from "react";

const PostDetailsCard = ({ post }) => {
  console.log(post);
  return (
    <section className="border-2 rounded h-96 w-1/4 mr p-4 text-xs">
      <img
        src={post?.image}
        alt="post"
        className="w-full h-32 object-cover rounded"
      />

      <p className="pt-2">{post.text} </p>
    </section>
  );
};

export default PostDetailsCard;
