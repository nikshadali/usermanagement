import { useEffect, useState } from "react";
import "./VendorForm.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import axios from "axios";
const VendorForm = ({ closeForm }) => {
  const [credintial, setCredintial] = useState({
    name: "",
    contact: "",
    email: "",
    billingadd: "",
    shippingadd: "",
  });
  const handleChange = (e) => {
    setCredintial((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/vendor/register",
        credintial
      );
      closeForm();
    } catch (err) {
      console.log(err);
    }
  };

  console.log(credintial);
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  return (
    <>
      <div className="wraper"></div>
      <div className="vendorform">
        <div className="card">
          <div className="card-head">
            <h3>Create Vendor</h3>
            <CloseOutlinedIcon className="closebtn" onClick={closeForm} />
          </div>
          <div className="card-body">
            <div className="item">
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Enter contact"
                name="contact"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter billing addres"
                name="billingadd"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Enter shipping adress"
                name="shippingadd"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter city"
                name="city"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="card-footer">
            <button className="cancel">Cancel</button>
            <button onClick={handleClick}>Create</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorForm;
