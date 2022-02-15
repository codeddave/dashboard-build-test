import axios from "axios";

export const getUsers = async () => {
  const config = {
    headers: {
      "app-id": process.env.REACT_APP_API_KEY,
    },
  };
  const res = await axios.get("https://dummyapi.io/data/v1/user", config);
  return res.data;
};

export const userApi = {
  getUsers,
};
