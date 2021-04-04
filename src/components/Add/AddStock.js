import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import UserContext from '../../user/UserContext';

function AddStock(stock) {
    const { user } = useContext(UserContext);
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    useEffect(() => {
        setQuantity(1);
    }, [stock]);
    const { name, symbol, high, low, volume } = stock.stock;
    let last;
    stock.stock.last == null
        ? (last = stock.stock.close)
        : (last = stock.stock.last);
    async function addStock() {
        try {
            if (quantity < 1) {
                setError('Invalid quantity inputted');
                return;
            }
            if (!user.token) {
                setError('User error');
                return;
            }
            const { status, data } = await axios.post(
                'http://localhost:4000/portfolio',
                {
                    stocks: [
                        {
                            symbol,
                            quantity,
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            console.log(status == 201, data);
            if (status == 201) {
                setSuccess(true);
            } else {
                setError('Error adding to portfolio');
            }
        } catch (e) {
            setError('Unable to add');
            console.log(e);
        }
    }
    return (
        <div>
            {success && <Redirect to="/portfolio" />}
            <label>
                {name
                    .toLowerCase()
                    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                        letter.toUpperCase()
                    )}
            </label>
            <div />
            <label>{symbol}</label>
            <div />
            <label>Current: ${last}</label>
            <div />
            <label>High: ${high.toFixed(2)}</label>
            <div />
            <label>Low: ${low.toFixed(2)}</label>
            <div />
            <label>Volume: {volume}</label>
            <div />
            Quantity:
            <input
                type="number"
                defaultValue={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
            />
            <div>{error}</div>
            <button onClick={addStock}>Add</button>
        </div>
    );
}

AddStock.propTypes = {
    stock: PropTypes.object,
};

export default AddStock;
