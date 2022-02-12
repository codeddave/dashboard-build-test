import React from "react";
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

      <section className="mt-4 border ">
        <table class="text-left text-gray-600 text-xs">
          <thead>
            <tr className="bg-light ">
              <th scope="col" className="pr-4">
                A
              </th>

              <th scope="col" className="pr-4 text-white">
                ffb
              </th>
              <th scope="col" className="pr-4">
                TITLE
              </th>
              <th scope="col" className="pr-4">
                FIRST NAME
              </th>
              <th scope="col" className="pr-4">
                LAST NAME
              </th>
              <th scope="col">ID</th>
            </tr>
          </thead>
          <tbody>
            <tr className="position-reltive">
              <td>im</td>
              <td>im</td>
              <td>Mr</td>
              <td>Kehinde</td>
              <td>Adebisi</td>
              <td>60d21b4667d0d8992e610c85</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AllDataSection;
