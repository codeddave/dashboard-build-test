import React from "react";

const PostDetailsCard = ({ post }) => {
  console.log(post);
  if (!post) return <p>hel</p>;
  return (
    <section className="border-2 rounded h-96 w-1/4 mr p-4 text-xs">
      {post.image ? (
        <section>
          <img
            src={post?.image}
            alt="post"
            className="w-full h-32 object-cover rounded"
          />

          <p className="pt-2">{post.text} </p>
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
