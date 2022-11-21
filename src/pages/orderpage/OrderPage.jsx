import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ORDERS_ENDPOINT } from "../../utilss/APIEndPoints";

const OrderPage = () => {
  const parms = useParams();
  const [order, setOrderPage] = useState("");
  console.log(parms.id);
  const getOrder = async () => {
    const { data } = await axios.get(`${ORDERS_ENDPOINT}/${parms.id}`);
    setOrderPage(data);
    console.log(data);
  };
  useEffect(() => {
    getOrder();
  });
  console.log(order);
  return (
    <div>
      <div style={{ width: "50%", marginLeft: "20vw" }}>
        <table className="OrderTable">
          <tbody id="orders-table">
            <tr className="TableRow">
              <th>Detail</th>
              <th>Value</th>
            </tr>
            <tr className="TableRow">
              <td className="SecondaryText">Order ID</td>
              <td className="PrimaryText">{order.id}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Customer Name</td>
              <td className="PrimaryText">{order.customerName}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Order Date & Time</td>
              <td className="PrimaryText">
                {order.orderDate}
                <br />
                <span className="SecondaryText">{order.orderTime}</span>
              </td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Amount</td>
              <td className="PrimaryText">{order.amount}</td>
            </tr>

            <tr className="TableRow">
              <td className="SecondaryText">Status</td>
              <td className="PrimaryText">{order.orderStatus}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
