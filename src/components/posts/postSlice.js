import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: "idle",
    error: null,
    post: {},
  },
});
