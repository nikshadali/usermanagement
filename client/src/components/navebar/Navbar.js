import "./Navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <h1>Accounting</h1>
      </div>
      <div className="right">
        <div className="search">
          <SearchOutlinedIcon className="searchIcon" />
          <input type="text" placeholder="...." />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
