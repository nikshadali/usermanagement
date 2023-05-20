import useFetch from "../../hock/useFetch";
import "./User.scss";

import CreateUser from "../../components/createuser/CreateUser";
import { useState } from "react";

import UserCard from "../../components/usercard/UserCard";
const User = () => {
  const [show, setShow] = useState(false);
  const { data, loading, error } = useFetch("/user");

  console.log("user data ", data);
  const closeModel = () => {
    setShow(false);
  };
  return (
    <>
      <div className={show ? "model-wrapper" : ""} onClick={closeModel}></div>
      <div className="user">
        <div className="top">
          <div className="left">
            <h3>User Management</h3>
          </div>
          <div className="right">
            <button onClick={() => setShow(true)}>+</button>
          </div>
        </div>
        <div className="bottom">
          {data.map((user) => (
            <UserCard user={user} />
          ))}
          <div className="add-user">
            <button onClick={() => setShow(true)}>+</button>

            <h3>New User</h3>
            <span>Click here to add New User</span>
          </div>
        </div>
        {show && <CreateUser closeModel={closeModel} />}
      </div>
    </>
  );
};

export default User;
