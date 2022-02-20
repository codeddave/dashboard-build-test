import axios from "axios";
import { toast } from "react-toastify";

export const getUsers = async () => {
  try {
    const config = {
      headers: {
        "app-id": process.env.REACT_APP_API_KEY,
      },
    };
    const res = await axios.get("https://dummyapi.io/data/v1/user", config);
    return res.data;
  } catch (error) {
    toast.error(error);
  }
};

export const getUserbyId = async (id) => {
  try {
    const config = {
      headers: {
        "app-id": process.env.REACT_APP_API_KEY,
      },
    };
    const res = await axios.get(
      `https://dummyapi.io/data/v1/user/${id}`,
      config
    );
    return res.data;
  } catch (error) {
    toast.error(error);
  }
};

export const createUser = async (userData) => {
  const config = {
    headers: {
      "app-id": process.env.REACT_APP_API_KEY,
    },
  };
  try {
    const res = await axios.post(
      "https://dummyapi.io/data/v1/user/create",
      userData,
      config
    );
    toast.success("User created successfully");
    return res.data;
  } catch (error) {
    toast.error(error);
  }
};

export const userApi = {
  getUsers,
  getUserbyId,
  createUser,
};
