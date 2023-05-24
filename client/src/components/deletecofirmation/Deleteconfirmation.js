import "./Deleteconfirmation.scss";
import { useEffect } from "react";
import axios from "axios";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
const Deleteconfirmation = ({ user, close, closeEdit, refetch }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  const clickDelet = async (e) => {
    try {
      const deleteuser = await axios.delete(
        `http://localhost:8800/api/user/${e._id}`
      );
      closeEdit();
      refetch();
    } catch (err) {
      console.log("delete error", err);
    }
  };

  return (
    <>
      <div className="wraper"></div>
      <div className="deleteconfirmation">
        <ErrorOutlineOutlinedIcon className="waring" />
        <h2>Are you Sure!</h2>
        <span>This action can not be undone. Do you want to continue?</span>
        <div className="buttons">
          <button className="no" onClick={close}>
            No
          </button>
          <button className="yes" onClick={() => clickDelet(user)}>
            Yes
          </button>
        </div>
      </div>
    </>
  );
};

export default Deleteconfirmation;
