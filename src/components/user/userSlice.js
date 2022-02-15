import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api/users";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (userId, thunkAPI) => {
    const response = await userApi.getUsers();
    return response;
  }
);
export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (userId, thunkAPI) => {
    const response = await userApi.getUserbyId(userId);
    return response;
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    isLoading: "",
    error: null,
    user: {},
  },
  reducers: {
    // getUsers: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isLoading = "resolved";
        state.users = action.payload;
      })
      .addCase(getUsers.pending, (state) => {
        state.isLoading = "pending";
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isLoading = "rejected";
        state.error = action.error;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = "resolved";
        state.user = action.payload;
      });
  },
});

export const { reducer: userReducer } = userSlice;
