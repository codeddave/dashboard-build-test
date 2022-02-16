import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "../components/posts/postSlice";
import { userReducer } from "../components/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    post: postReducer,
  },
});
