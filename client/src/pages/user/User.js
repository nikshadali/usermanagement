import useFetch from "../../hock/useFetch";
import "./User.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import CreateUser from "../../components/createuser/CreateUser";
import { useState } from "react";
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
            <h2>User Management</h2>
          </div>
          <div className="right">
            <button onClick={() => setShow(true)}>+</button>
          </div>
        </div>
        <div className="bottom">
          {data.map((user) => (
            <div className="card">
              <div className="card-body">
                <img src="/img/ali-khan.jpg" />
                <h3>{user.name}</h3>
                <span>{user.email}</span>
                <span>{user.roleId.roletitle}</span>
              </div>
              <div className="role">
                <span>{user.roleId.roletitle}</span>
              </div>
            </div>
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
