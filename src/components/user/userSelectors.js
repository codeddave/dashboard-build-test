import { createSelector } from "@reduxjs/toolkit";

const getUser = (state) => {
  return state.user;
};

export const selectUsers = createSelector(getUser, (user) => user.users);
