import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../user/UserContext';

function Portfolio() {
    const { user } = useContext(UserContext);
    const [stocks, setStocks] = useState([]);
    async function loadStocks() {
        const { data } = await axios.get('http://localhost:4000/portfolio', {
            headers: {
                authorization: `Bearer ${user.token}`,
            },
        });
        setStocks(data.stocks);
    }
    useEffect(() => {
        loadStocks();
    }, []);
    return (
        <div>
            <h1>Your Portfolio</h1>
            {stocks.length > 0 &&
                stocks.map((stock, i) => <div key={i}>{stock.symbol}</div>)}
        </div>
    );
}

export default Portfolio;
