import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import PersonOne from "../../assets/icons/person-one.svg";
import { getUsers } from "./userSlice";

const AllUsers = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <table
      class="text-left text-gray-500 text-xs  py-8 "
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
      <tbody className="bg-white mt-4 pl-8 w-full" style={{}}>
        <tr
          className=" shadow  px-4 w-full rounded"
          style={{ marginBottom: "40px" }}
        >
          <td className="mb-8 py-2 ">
            {" "}
            <input type="checkbox" className="ml-3" />
          </td>
          <td className="my-8 py-2">
            <img src={PersonOne} alt="" className="-pl-2" />
          </td>
          <td>Mr</td>
          <td>Kehinde</td>
          <td>Adebisi</td>
          <td>60d21b4667d0d8992e610c85</td>
        </tr>
        <tr className=" shadow py-10 px-4 w-full rounded">
          <td className="my-8 py-2 ">
            {" "}
            <input type="checkbox" className="ml-3" />
          </td>
          <td className="my-8 py-2">im</td>
          <td>Mr</td>
          <td>Kehinde</td>
          <td>Adebisi</td>
          <td>60d21b4667d0d8992e610c85</td>
        </tr>
        <tr className=" shadow py-10 px-4 w-full rounded">
          <td className="my-8 py-2 ">
            {" "}
            <input type="checkbox" className="ml-3" />
          </td>
          <td className="my-8 py-2">im</td>
          <td>Mr</td>
          <td>Kehinde</td>
          <td>Adebisi</td>
          <td>60d21b4667d0d8992e610c85</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AllUsers;
