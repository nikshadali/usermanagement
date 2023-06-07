import "./BillCreate.scss";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import useFetch from "../../hock/useFetch";
import Select from "react-select";
const BillCreate = () => {
  const [addItem, setAddItem] = useState([]);
  const [value, setValue] = useState(null);
  const [creditial, setCreditial] = useState({
    pid: "",
    desc: "",
    qty: "",
    price: "",
  });

  // fetch data
  const { data } = useFetch("/product");

  // handleclick function define
  const handleclick = () => {
    const myId = { id: new Date().getTime().toString() };
    setAddItem((prov) => [...prov, myId]);
  };

  // handle delete function
  const handleDelte = (index) => {
    const updateData = addItem.filter((elem) => {
      return index != elem.id;
    });
    setAddItem(updateData);
  };

  // options of product
  const options = data.map((item) => {
    return { value: item._id, label: item.pname };
  });
  console.log(creditial);

  // handle change function
  const handleChange = (e) => {
    const id = value.value;
    setCreditial((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      pid: id,
    }));
  };
  return (
    // bill information
    <div className="bill">
      <div className="top">
        <h3>Bill Create</h3>
      </div>
      <div className="center">
        <div className="left">
          vendor
          <Select options={options} />
        </div>

        <div className="right">
          <div className="item">
            <label>Billing Date</label>
            <input type="date" />
          </div>
          <div className="item">
            <label>Bill No</label>
            <input type="text" placeholder="#BILL00008" />
          </div>
          <div className="item">
            <label>Order No</label>
            <input type="text" />
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="top">
          <h3>Product & Service</h3>
        </div>
        <div className="product">
          <div className="pro-top">
            <button onClick={handleclick}>Add Item</button>
          </div>
          <div className="pro-bottom">
            <div className="item">
              <table>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Descritpion</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Discount</th>
                    <th>text</th>
                    <th>Amount</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Select
                        options={options}
                        defaultValue={value}
                        onChange={setValue}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="input"
                        name="desc"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="input"
                        onChange={handleChange}
                        name="qty"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="input"
                        name="price"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        onChange={handleChange}
                        className="input"
                        name="tex"
                      />
                    </td>
                    <td>Ref</td>
                    <td>{creditial.qty * creditial.price}</td>
                    <td></td>
                  </tr>
                  {addItem.map((item) => (
                    <tr>
                      <td>
                        <Select
                          options={options}
                          defaultValue={value}
                          onChange={setValue}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={handleChange}
                          className="input"
                          name="desc"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          className="input"
                          onChange={handleChange}
                          name="qty"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={handleChange}
                          className="input"
                          name="price"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          onChange={handleChange}
                          className="input"
                          name="tex"
                        />
                      </td>
                      <td>Ref</td>

                      <td>{creditial.qty * creditial.price}</td>
                      <td>
                        <button onClick={() => handleDelte(item.id)}>
                          <DeleteIcon className="deletebtn" />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      colSpan={5}
                      style={{ border: "none", padding: "40px" }}
                    ></td>
                  </tr>
                  <tr className="totalamount">
                    <td
                      colSpan={5}
                      style={{ borderTop: "1px solid lightgray" }}
                    ></td>
                    <td style={{ borderTop: "1px solid lightgray" }}>
                      Subtotal
                    </td>
                    <td
                      colSpan={2}
                      style={{ borderTop: "1px solid lightgray" }}
                    >
                      0
                    </td>
                  </tr>
                  <tr className="totalamount">
                    <td colSpan={5}></td>
                    <td>Discount</td>
                    <td colSpan={2}>0</td>
                  </tr>
                  <tr className="totalamount">
                    <td colSpan={5}></td>
                    <td>Tax</td>
                    <td colSpan={2}>0</td>
                  </tr>
                  <tr className="totalamount">
                    <td colSpan={5}></td>
                    <td>Total</td>
                    <td colSpan={2}>0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillCreate;
