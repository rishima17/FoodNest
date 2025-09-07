import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";
import { assets } from "../../assets/assets";
import "./MyOrders.css";

const MyOrders = () => {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    try {
      const response = await axios.post(
        url + "/api/order/userorders",
        {},
        { headers: { token } }
      );
      // Ensure we always have an array
      setData(Array.isArray(response.data.data) ? response.data.data : []);
      console.log(response.data.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
      setData([]);
    }
  };

  useEffect(() => {
    if (token) fetchOrders();
  }, [token]);

  return (
    <div className="my-orders">
      <h2>My Orders</h2>
      <div className="container">
        {data.length > 0 ? (
          data.map((order, index) => (
            <div key={index} className="my-orders-order">
              <img src={assets.parcel_icon} alt="Parcel" />

              <p>
                {Array.isArray(order.item) && order.item.length > 0
                  ? order.item.map((itm, idx) => (
                      <span key={itm._id}>
                        {itm.name} x {itm.quantity ?? 1}
                        {idx !== order.item.length - 1 ? ", " : ""}
                      </span>
                    ))
                  : "No items"}
              </p>

              <p>Amount: ${order.amount}.00</p>
              <p>Items: {Array.isArray(order.item) ? order.item.length : 0}</p>
              <p>
                <span>&#x25cf;</span> <b>{order.status}</b>
              </p>
              <button onClick={fetchOrders}>Track Order</button>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
