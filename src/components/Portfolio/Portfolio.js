import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import UserContext from '../../user/UserContext';
import PortfolioStock from './PortfolioStock';

const Portfolio = () => {
    const { user } = useContext(UserContext);
    const [stocks, setStocks] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(
                    'http://localhost:4000/portfolio',
                    {
                        headers: {
                            authorization: `Bearer ${user.token}`,
                        },
                    }
                );
                setStocks(data.stocks);
            } catch (e) {
                console.log(e.message);
            }
        };
        fetchData();
    }, [user.token]);
    return (
        <div>
            <h1>{`${user.name}'s Portfolio`}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Symbol</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.length > 0 &&
                        stocks.map((stock, i) => (
                            <PortfolioStock key={i} stock={stock} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Portfolio;
