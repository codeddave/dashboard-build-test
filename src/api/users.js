import axios from "axios";

export const getUsers = async () => {
  const res = await axios.get("https://dummyapi.io/data/v1/user");
  return res.data;
};
