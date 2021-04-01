import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../../user/UserContext';
import axios from 'axios';
import AddStock from './AddStock';

function Add() {
    const { user } = useContext(UserContext);
    const [stock, setStock] = useState(null);
    const [symbol, setSymbol] = useState('');
    const [error, setError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (symbol) {
            const request = await axios.get(
                `http://localhost:4000/stock/${symbol}`
            );
            setStock(request.data);
        } else {
            setError('Enter a valid symbol');
        }
    };
    return (
        <div>
            {!user && <Redirect to="/login" />}
            <h1>Add Stock To Portfolio</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>{error}</div>
                    <input
                        type="text"
                        placeholder="Search Stock Symbol"
                        onChange={(e) => setSymbol(e.target.value)}
                    />
                    &nbsp;
                    <input type="submit" />
                </form>
            </div>
            {stock && <AddStock stock={stock} />}
        </div>
    );
}

export default Add;
