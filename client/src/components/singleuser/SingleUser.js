import React, { useContext } from "react";
import "./Singleuser.scss";
import useFetch from "../../hock/useFetch";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AuthContext } from "../../context/Authcontex";
const SingleUser = () => {
  const { user } = useContext(AuthContext);
  const { data, loading, error, refetch } = useFetch(
    `/user/${user.otherDatail._id}`
  );
  console.log(data);
  return (
    <div className="sigleuser">
      {loading ? (
        "Loading please wait"
      ) : (
        <div className="card">
          <div className="card-body">
            <img src="/img/ali-khan.jpg" />
            <h3>{data?.name}</h3>
            <span>{data?.email}</span>
            <span>{data?.roleId?.roletitle}</span>
          </div>
          <div className="role">
            <span>{data?.roleId?.roletitle}</span>
          </div>
          <div className="dot">
            <MoreVertIcon />
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
