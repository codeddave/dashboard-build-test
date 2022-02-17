import React, { useEffect } from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectUsers, selectUsersLoading } from "./userSelectors";
import { getUsers } from "./userSlice";

const AllUsers = ({ setId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectUsersLoading);

  /*  useEffect(()=> {
      setId(users.data[0].id)
  }, []) */
  if (!users.data || isLoading === "pending")
    return (
      <div className="h-96 flex justify-center items-center">
        <TailSpin color="#5e97d4" />
      </div>
    );
  return (
    <section className="h-96 overflow-y-scroll">
      <table
        className="text-left text-gray-500 text-xs  py-8 "
        style={{ padding: "4rem", width: "100%" }}
      >
        <thead>
          <tr className="bg-light ">
            <th scope="col" className="pr-10 py-2 ">
              <input type="checkbox" className="ml-3 " />
            </th>

            <th scope="col" className="pr-10 text-white">
              ffb
            </th>
            <th scope="col" className="pr-10">
              TITLE
            </th>
            <th scope="col" className="pr-10">
              FIRST NAME
            </th>
            <th scope="col" className="pr-10">
              LAST NAME
            </th>
            <th scope="col">ID</th>
          </tr>
        </thead>
        <tbody className="bg-white mt-4 pl-8 w-full " style={{}}>
          {users.data.map((user) => (
            <tr
              className=" shadow  px-4 w-full rounded"
              style={{ marginBottom: "40px" }}
              onClick={() => setId(user.id)}
            >
              <td className="mb-8 py-2 ">
                {" "}
                <input type="checkbox" className="ml-3" />
              </td>
              <td className="my-8 py-2">
                <img
                  src={user.picture}
                  alt=""
                  className="-pl-2 rounded-full w-12 h-12"
                />
              </td>
              <td>{user.title}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default AllUsers;
