import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Orders from "./pages/order/Orders";

import Products from "./pages/product/Products";
import Users from "./pages/users/Users";
import OrderPage from "./pages/orderpage/OrderPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  const data = JSON.parse(localStorage.getItem("logg"));
  let [isLoggedin, setLoggedin] = useState(data);
  console.log("value", isLoggedin);
  console.log("local", data);

  function loggedOff() {
    localStorage.removeItem("logg");
    setLoggedin(false);
    return;
  }

  const updateStates = async (e) => {
    e.preventDefault();
    if (userName !== password) {
      alert("it must be same");
    } else if (userName === "" && password === "") {
      return setLoggedin(false);
    }
    if (userName === password) {
      localStorage.setItem("logg", JSON.stringify(true));
      setLoggedin(true);

      return;
    }
  };

  return (
    <div>
      <div className="headbar">
        <BrowserRouter>
          <div className="nav">
            <div>
              <div className="logo">
                <img
                  className="imge"
                  src="https://raw.githubusercontent.com/pawankumargali/kafene/main/images/logo.png"
                  alt=""
                />
                <Link className="link" to={false}>
                  Kafene
                </Link>
              </div>
            </div>
            <div>
              <Link className="link" to="/">
                Orders
              </Link>
            </div>
            <div>
              <Link className="link" to="/products">
                Products
              </Link>
            </div>
            <div>
              <Link className="link" to="/users">
                Users
              </Link>
            </div>
            <div>
              {isLoggedin ? (
                <button className="logg" onClick={loggedOff}>
                  Logout
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
          <Routes>
            {/* {<Route path="/" element={isLoggedin ? <Orders /> : ""} />} */}
            <Route path="/" element={isLoggedin ? <Orders /> : ""} />
            <Route
              path="/orders/:id"
              element={isLoggedin ? <OrderPage /> : ""}
            />
            <Route path="/products" element={isLoggedin ? <Products /> : ""} />
            <Route
              path="/products/:id"
              element={isLoggedin ? <ProductPage /> : ""}
            />
            <Route path="/users" element={isLoggedin ? <Users /> : ""} />
          </Routes>
        </BrowserRouter>
      </div>
      <div>
        {isLoggedin ? (
          ""
        ) : (
          <div className="login">
            <div>
              <input
                className="user"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter username"
              />
            </div>
            <div>
              <input
                className="user"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </div>
            <button onClick={updateStates}>Logged in</button>
            <h3 className="title">Username and password must be same</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
