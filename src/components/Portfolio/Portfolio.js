import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../../user/UserContext";
import axios from "axios";

function Portfolio() {
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:4000/portfolio", {
        headers: { authorization: `Bearer ${user.token}` },
      });
      if (data.stocks) {
        setPortfolio(data.stocks);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {!user && <Redirect to="/login" />}
      <h1>Your Portfolio</h1>
      <div>
        {portfolio.map((stock, index) => (
          <div key={index}>
            Symbol: {stock.symbol}, Quantity: {stock.quantity}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
