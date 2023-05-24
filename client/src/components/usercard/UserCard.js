import { useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Delete from "../edit/Delete";

const UserCard = ({ user, refetch }) => {
  const [openEdit, setOpenEdit] = useState(false);

  const closeEdit = () => {
    setOpenEdit(false);
  };

  const openEditfun = () => {
    setOpenEdit(!openEdit);
  };
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
        <MoreVertIcon onClick={openEditfun} />
      </div>
      {openEdit && (
        <Delete user={user} closeEdit={closeEdit} refetch={refetch} />
      )}
    </div>
  );
};

export default UserCard;
