import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router";
import UserContext from "../../user/UserContext";
import axios from "axios";

function Portfolio() {
  const { user } = useContext(UserContext);
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/portfolio", {
          headers: { authorization: `Bearer ${user.token}` },
        });
        setPortfolio([]);
        for (const stock of data.stocks) {
          setPortfolio([
            ...portfolio,
            { symbol: stock.symbol, quantity: stock.quantity },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {!user && <Redirect to="/login" />}
      <h1>Your Portfolio</h1>
    </div>
  );
}

export default Portfolio;
