import React from "react";
import AllUsers from "./AllUsers";
import { Tab } from "./common/Tab";
import { useTabs } from "./hooks/useTab";

const AllDataSection = () => {
  const { onTabClick, tab } = useTabs("users");

  return (
    <div className="pt-16 pl-12">
      <div className="flex bord">
        <Tab onClick={() => onTabClick("users")} current={tab === "users"}>
          All Users
        </Tab>
        <Tab onClick={() => onTabClick("posts")} current={tab === "posts"}>
          All Posts
        </Tab>
      </div>

      <section className="mt-4 b p-2 rounded  bg-gray-200 w-3/5">
        {tab === "users" ? <AllUsers /> : <p>evoejvbojb</p>}
      </section>
    </div>
  );
};

export default AllDataSection;
