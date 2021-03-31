import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserContext from "./user/UserContext";

function StockApp() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div>
        <Nav />
      </div>
      <UserContext.Provider value={{ user, setUser }}>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </UserContext.Provider>
    </Router>
  );
}

export default StockApp;
