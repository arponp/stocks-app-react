import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../../user/UserContext";
import axios from "axios";

function Portfolio() {
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:4000/portfolio", {
        headers: { authorization: `Bearer ${user.token}` },
      });
      setPortfolio(data.stocks);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {!user && <Redirect to="/login" />}
      <h1>Your Portfolio</h1>
      <ul>
        {portfolio.map((stock, index) => (
          <li key={index}>
            Symbol: {stock.symbol}, Quantity: {stock.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Portfolio;
