import { createSelector } from "@reduxjs/toolkit";

const getPost = (state) => {
  return state.post;
};

export const selectPosts = createSelector(getPost, (post) => post.posts);
export const selectPost = createSelector(getPost, (post) => post.post);
