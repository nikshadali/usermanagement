import "./Delete.scss";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import Deleteconfirmation from "../deletecofirmation/Deleteconfirmation";

const Edit = ({ user, closeEdit }) => {
  const [open, setOpen] = useState(false);
  console.log(open);

  const close = () => {
    setOpen(false);
  };

  const openpop = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="edit">
        <div className="item">
          <EditIcon />
          <span>Edit</span>
        </div>
        <div className="item">
          <DeleteIcon onClick={openpop} className="deleteIcon" />
          <span onClick={openpop}>Delete</span>
        </div>
      </div>
      {open && (
        <Deleteconfirmation user={user} close={close} closeEdit={closeEdit} />
      )}
    </>
  );
};

export default Edit;
