import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../../api/posts";
export const getPosts = createAsyncThunk(
  "users/getUsers",
  async (userId, thunkAPI) => {
    const response = await postApi.getPosts();
    return response;
  }
);
export const getPostById = createAsyncThunk(
  "users/getUserById",
  async (userId, thunkAPI) => {
    const response = await postApi.getPostbyId(userId);
    return response;
  }
);
const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: "idle",
    error: null,
    post: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = "resolved";
        state.posts = action.payload;
      })
      .addCase(getPosts.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = "rejected";
        state.error = action.error;
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.isLoading = "resolved";
        state.post = action.payload;
      });
  },
});

export const { reducer: postReducer } = postSlice;
