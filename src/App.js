import { useEffect, useState } from "react";
import { getAllCustomers, getCustomer } from "./util";
import "./App.css";
import { Dashboard } from "./Dashboard";
import mockData from "./mockData.json";
import { CustomerProfile } from "./CustomerProfile";

function App() {
  const [datas, setData] = useState();
  const [input, setInput] = useState("");
  const [visible, setVisible] = useState(false);
  const [oneCustomer, setCustomer] = useState();

  const findCustomer = () => {
    let customer = getCustomer(input, datas);
    setCustomer(customer);
    setVisible(true);
  };
  const displayAllCustomer = () => {
    getAllCustomers(mockData).then((data) => setData(data));
  };
  const handleChange = (e) => {
    setVisible(false);
    setInput(e.target.value);
  };
  useEffect(() => {
    displayAllCustomer();
  }, []);

  return (
    <div>
      <input type={"text"} onChange={handleChange} />
      <button onClick={findCustomer}>find customer</button>
      {visible ? <CustomerProfile customer={oneCustomer} /> : null}
      <div style={styles.divider}></div>
      <Dashboard customerData={datas} />
    </div>
  );
}
export const styles = {
  divider: {
    display: "block",
    height: 1,
    border: 0,
    borderTop: "1px solid #ccc",
    margin: "1em 0",
    padding: 0,
  },
};
export default App;
