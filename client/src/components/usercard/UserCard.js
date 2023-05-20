import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Edit from "../edit/Edit";

const UserCard = ({ user }) => {
  const [openEdit, setOpenEdit] = useState(false);
  return (
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
      <div className="dot">
        <MoreVertIcon onClick={() => setOpenEdit(!openEdit)} />
      </div>
      {openEdit && <Edit user={user} />}
    </div>
  );
};

export default UserCard;