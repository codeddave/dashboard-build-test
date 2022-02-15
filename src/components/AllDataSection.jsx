import React, { useEffect, useState } from "react";
import AllUsers from "./user/AllUsers";
import { Tab } from "./common/Tab";
import { useTabs } from "./hooks/useTab";
import { useDispatch } from "react-redux";
import { getUserById } from "./user/userSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./user/userSelectors";
import UserDetailsCard from "./UserDetailsCard";
const AllDataSection = () => {
  const { onTabClick, tab } = useTabs("users");
  const dispatch = useDispatch();

  const [id, setId] = useState();

  useEffect(() => {
    dispatch(getUserById(id));
  }, [id, dispatch]);
  const user = useSelector(selectUser);

  return (
    <div className="pt-16 pl-12 flex justify-around">
      <section className="w-3/5">
        <div className="flex bord">
          <Tab onClick={() => onTabClick("users")} current={tab === "users"}>
            All Users
          </Tab>
          <Tab onClick={() => onTabClick("posts")} current={tab === "posts"}>
            All Posts
          </Tab>
        </div>

        <section className="mt-4 b p-2 rounded  bg-gray-200 ">
          {tab === "users" ? <AllUsers setId={setId} /> : <p>evoejvbojb</p>}
        </section>
      </section>

      <UserDetailsCard user={user} />
    </div>
  );
};

export default AllDataSection;
