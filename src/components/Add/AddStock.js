import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../../user/UserContext';

function AddStock({ stock }) {
    const { user } = useContext(UserContext);
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        console.log(quantity);
        e.preventDefault();
        const stocks = [{ symbol: stock.symbol, quantity }];
        console.log(stocks);
        const { status } = await axios.post(
            'http://localhost:4000/portfolio',
            { stocks: stocks },
            {
                headers: { authorization: `Bearer ${user.token}` },
            }
        );
        status == 201 ? setError('Successfully Added') : setError('Cannot Add');
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>
                    {stock.name
                        .toLowerCase()
                        .replace(/\w\S*/g, (w) =>
                            w.replace(/^\w/, (c) => c.toUpperCase())
                        )}
                </h3>
                <p>{stock.symbol}</p>
                <p>Price: {stock.last.toFixed(2)}</p>
                <input
                    placeholder="Quantity"
                    name="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                />
                <div />
                <button type="submit">Add</button>
                <div>{error}</div>
            </form>
        </div>
    );
}

AddStock.propTypes = {
    stock: PropTypes.object,
};

export default AddStock;
