import dayjs from "dayjs";
import React from "react";

const UserDetailsCard = ({ user }) => {
  console.log(user);
  return (
    <section className="border-2 rounded h-auto w-1/4 mr p-4 text-xs order-1 md:order-2">
      {user?.picture ? (
        <div>
          <div className="grid grid-cols-2 gap-x-3">
            <img
              src={user?.picture}
              alt="person"
              className="w-32 h-32 rounded object-cover"
            />

            <div className="">
              <div className="pb-2">
                <p className="text-gray-500 pb-1 extra-small-font ">
                  FULL NAME
                </p>
                <p className="small-font">
                  {user.title} {user.firstName} {user.lastName}
                </p>
              </div>

              <div className="pb-2">
                <p className="text-gray-400 pb-1 extra-small-font ">
                  EMAIL ADDRESS
                </p>
                <p className="break-words small-font ">{user.email}</p>
              </div>
              <div className="pb-2">
                <p className="text-gray-400 pb-1 extra-small-font ">
                  PHONE NUMBER
                </p>
                <p className="small-font">{user.phone}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 pt-4">
            <div>
              <p className="extra-small-font">GENDER </p>

              <p>{user.gender}</p>
            </div>

            <div>
              <p className="extra-small-font">DATE OF BIRTH</p>
              <p>{dayjs(user.dateofBirth).format("DD-MMM-YYYY")}</p>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="grid grid-cols-2 pt-4 pr-2 gap-x-1">
            <div>
              <p className="extra-small-font">STREET </p>

              <p>{user?.location?.street}</p>
            </div>

            <div>
              <p className="extra-small-font">CITY</p>
              <p>{user?.location?.city}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-4 pr-2 gap-x-1">
            <div>
              <p className="extra-small-font">YEAR ENROLLED </p>

              <p>{dayjs(user?.registerDate).format("YYYY")}</p>
            </div>

            <div></div>
          </div>
          <hr className="mt-4" />

          <div className="grid grid-cols-2 pt-4 pr-2 gap-x-1">
            <div>
              <p className="extra-small-font">REGISTERED </p>

              <p>{dayjs(user.registerDate).format("DD-MMM-YYYY")}</p>
            </div>

            <div>
              <p className="extra-small-font">LAST UPDATED</p>
              <p>{dayjs(user.updatedDate).format("DD-MMM-YYYY")}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 pt-4">
            <div>
              <p className="extra-small-font">POSTS </p>

              <p>23</p>
            </div>

            <div>
              <p className="extra-small-font">COMMENTS</p>
              <p>45</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center pt-20">
          Please Select a User from list to view{" "}
        </p>
      )}
    </section>
  );
};

export default UserDetailsCard;
