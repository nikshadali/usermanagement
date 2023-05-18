import "./Sidebar.scss";
// import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
// import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { sideMenu } from "../../data/sideMenu";
import Sidebarmenu from "../sidebarmenu/Sidebarmenu";
const Sidebar = (props) => {
  console.log("item =>", props.name);
  return (
    <div className="sidebar">
      {sideMenu.map((item) => (
        <Sidebarmenu item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
