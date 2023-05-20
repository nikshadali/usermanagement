import "./Edit.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Edit = ({ user }) => {
  const navigate = useNavigate();
  const clickDelet = async (e) => {
    try {
      const deleteuser = await axios.delete(
        `http://localhost:8800/api/user/${e._id}`
      );
      navigate("/user");
    } catch (err) {
      console.log("delete error", err);
    }
  };
  return (
    <div className="edit">
      <div className="item">
        <EditIcon />
        <span>Edit</span>
      </div>
      <div className="item">
        <DeleteIcon onClick={() => clickDelet(user)} className="deleteIcon" />
        <span onClick={() => clickDelet(user)}>Delete</span>
      </div>
    </div>
  );
};

export default Edit;
