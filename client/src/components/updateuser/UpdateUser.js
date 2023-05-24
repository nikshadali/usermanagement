import "./UpdateUser.scss";
import { useState, useEffect, useId } from "react";
import axios from "axios";
import useFetch from "../../hock/useFetch";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const UpdateUser = ({ user, closeOpenUpdate, refetch, closeEdit }) => {
  const { data, loading, error } = useFetch("/role");
  const [credential, setCredential] = useState({
    name: user.name,
    email: user.email,
    role: user.roleId._id,
  });
  console.log(credential);
  const changeHandle = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const clickHandle = async (e) => {
    console.log(e.user);
    try {
      const res = await axios.put(
        `http://localhost:8800/api/user/${e._id}`,
        credential
      );
      closeOpenUpdate();
      closeEdit();
      refetch();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="wraper" onClick={closeOpenUpdate}></div>
      <div className="createuser">
        <div className="usertop">
          <h3>Update User</h3>
          <button>
            <CloseOutlinedIcon className="userIcon" />
          </button>
        </div>
        <div className="center">
          <input
            type="text"
            placeholder="Enter username"
            name="name"
            onChange={changeHandle}
            value={credential.name}
          />

          <input
            type="email"
            placeholder="compnay@exmple.com"
            name="email"
            onChange={changeHandle}
            value={credential.email}
          />
          <select onChange={changeHandle} name="roleId">
            <option value={user.roleId}>{user.roleId.roletitle}</option>
          </select>
        </div>
        <div className="bottom">
          <button className="cancel" onClick={closeOpenUpdate}>
            Cancel
          </button>
          <button onClick={() => clickHandle(user)}>Update</button>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
