import "./Bill.scss";
import ProductForm from "../../components/productform/ProductForm";
import { useState } from "react";
import Select from "react-select";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { Link } from "react-router-dom";
const Bill = () => {
  const [open, setOpen] = useState(false);
  const options = [
    { value: "Accessuries", label: "Accessuries" },
    { value: "Accessuries", label: "Accessuries" },
    { value: "Accessuries", label: "Accessuries" },
    { value: "Accessuries", label: "Accessuries" },
    { value: "Accessuries", label: "Accessuries" },
  ];
  const closeForm = () => {
    setOpen(false);
  };
  return (
    <div className="bills">
      <div className="top">
        <div className="left">
          <h3>Manage Bills</h3>
        </div>
        <div className="right">
          <Link to="/billcreate" className="link">
            <button onClick={() => setOpen(!open)}>+</button>
          </Link>
        </div>
      </div>
      <div className="center">
        <Select options={options} />
        <Select options={options} />
        <Select options={options} />
        <button className="search">
          <SearchOutlinedIcon />
        </button>
        <button className="reset">
          <RestartAltOutlinedIcon />
        </button>
      </div>
      <div className="bottom">
        <div className="top">
          <div className="left">
            <select>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </select>
            <span>Enteris per page</span>
          </div>
          <div className="right">
            <input type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="tablediv">
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Balance</th>
                <th>Last Long</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td> 9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
              <tr>
                <td>
                  <button>#CUST00001</button>
                </td>
                <td>Keir</td>
                <td>9857456214</td>
                <td>protiong@teleworm.us</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
                <td>-113,018.80$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {open && <ProductForm closeForm={closeForm} />}
    </div>
  );
};

export default Bill;
