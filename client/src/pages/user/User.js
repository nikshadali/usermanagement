import useFetch from "../../hock/useFetch";
import "./User.scss";

const User = () => {
  const { data, loading, error } = useFetch("/user");
  console.log("user data ", data);
  return (
    <div className="user">
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
        <button>+</button>

        <h3>New User</h3>
        <span>Click here to add New User</span>
      </div>
    </div>
  );
};

export default User;
