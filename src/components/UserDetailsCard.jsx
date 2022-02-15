import React from "react";

const UserDetailsCard = ({ user }) => {
  return (
    <section className="border-2 rounded h-96 w-1/4 mr p-4 text-xs">
      {user.picture ? (
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
        </div>
      ) : (
        <p>Select a User</p>
      )}
    </section>
  );
};

export default UserDetailsCard;
