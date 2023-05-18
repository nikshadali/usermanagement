import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";
const Sidebarmenu = ({ item }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="item">
      <div className="top" onClick={() => setShow(!show)}>
        <span>{item.title}</span>
        {item.icon && (
          <ChevronRightOutlinedIcon className={show ? "icon" : ""} />
        )}
      </div>

      {item.childrens &&
        item.childrens.map((child) => (
          <div className={show ? "bottom open" : "bottom"}>
            <span>
              <Link to={child.path ? child.path : "#"} className="link">
                {child.title}
              </Link>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Sidebarmenu;
