import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router';
import UserContext from '../../user/UserContext';
import axios from 'axios';

function Portfolio() {
    const { user } = useContext(UserContext);
    const [portfolio, setPortfolio] = useState([]);
    console.log(user);
    useEffect(() => {
        if (user) {
            const fetchData = async () => {
                const { data } = await axios.get(
                    'http://localhost:4000/portfolio',
                    {
                        headers: { authorization: `Bearer ${user.token}` },
                    }
                );
                if (data.stocks) {
                    console.log(portfolio);
                    setPortfolio(data.stocks);
                }
            };
            fetchData();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {!user && <Redirect to="/login" />}
            <h1>Your Portfolio</h1>
        </div>
    );
}

export default Portfolio;
