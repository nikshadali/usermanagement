import "./Delete.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Deleteconfirmation from "../deletecofirmation/Deleteconfirmation";

import UpdateUser from "../updateuser/UpdateUser";

const Edit = ({ user, closeEdit, refetch }) => {
  const [open, setOpen] = useState(false);
  const [openUpdata, setOpenUpdata] = useState(false);

  const close = () => {
    setOpen(false);
  };

  const openpop = () => {
    setOpen(true);
  };

  const closeOpenUpdate = () => {
    setOpenUpdata(false);
  };
  return (
    <>
      <div className="edit">
        <div className="item">
          <EditIcon onClick={() => setOpenUpdata(true)} />
          <span onClick={() => setOpenUpdata(true)}>Edit</span>
        </div>
        <div className="item">
          <DeleteIcon onClick={openpop} className="deleteIcon" />
          <span onClick={() => openpop()}>Delete</span>
        </div>
      </div>
      {open && (
        <Deleteconfirmation
          user={user}
          close={close}
          closeEdit={closeEdit}
          refetch={refetch}
        />
      )}
      {openUpdata && (
        <UpdateUser
          user={user}
          closeOpenUpdate={closeOpenUpdate}
          refetch={refetch}
          closeEdit={closeEdit}
        />
      )}
    </>
  );
};

export default Edit;
