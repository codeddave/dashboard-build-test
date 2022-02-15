import { createSelector } from "@reduxjs/toolkit";

const getUser = (state) => {
  return state.user;
};

export const selectUsers = createSelector(getUser, (user) => user.users);
export const selectUser = createSelector(getUser, (user) => user.user);
