import { useEffect, useState } from "react";
import "./ProductForm.scss";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import axios from "axios";
const ProductForm = ({ closeForm }) => {
  const [credintial, setCredintial] = useState({
    pname: "",
    sku: "",
    detail: "",
    saleprice: "",
    purchaseprice: "",
    tex: "",
    category: "",
  });
  const handleChange = (e) => {
    setCredintial((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8800/api/product/register",
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
      <div className="customerform">
        <div className="card">
          <div className="card-head">
            <h3>Create Product</h3>
            <CloseOutlinedIcon className="closebtn" onClick={closeForm} />
          </div>
          <div className="card-body">
            <div className="item">
              <input
                type="text"
                placeholder="Enter product name"
                name="pname"
                onChange={handleChange}
              />
              <input
                type="number"
                placeholder="Enter SKU"
                name="sku"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <textarea
                cols={150}
                rows={3}
                type="text"
                placeholder="Enter Detail"
                name="detail"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Enter sale price"
                name="saleprice"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter purchase price"
                name="purchaseprice"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <input
                type="text"
                placeholder="Enter Tex"
                name="tex"
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter category"
                name="category"
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

export default ProductForm;
