import { useEffect, useState } from "react";
import "./CreateUser.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import useFetch from "../../hock/useFetch";
import { useStepContext } from "@mui/material";
import Edit from "../edit/Edit";
import axios from "axios";
const CreateUser = ({ closeModel }) => {
  const { data, loading, error } = useFetch("/role");
  const [credential, setCredential] = useState({
    name: "",
    password: "",
    email: "",
    role: "",
  });

  const changeHandle = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.log(credential);
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const clickHandle = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/register",
        credential
      );
      closeModel();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="createuser">
      <div className="usertop">
        <h3>Create User</h3>
        <button>
          <CloseOutlinedIcon className="userIcon" onClick={closeModel} />
        </button>
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="Enter username"
          name="name"
          onChange={changeHandle}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={changeHandle}
        />
        <input
          type="email"
          placeholder="compnay@exmple.com"
          name="email"
          onChange={changeHandle}
        />
        <select onChange={changeHandle} name="roleId">
          {data.map((role) => (
            <option value={role._id}>{role.roletitle}</option>
          ))}
        </select>
      </div>
      <div className="bottom">
        <button className="cancel" onClick={closeModel}>
          Cancel
        </button>
        <button onClick={clickHandle}>Create</button>
      </div>
    </div>
  );
};

export default CreateUser;
