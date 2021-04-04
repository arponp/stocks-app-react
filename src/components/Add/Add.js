import AddStock from './AddStock';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Redirect } from 'react-router';
import UserContext from '../../user/UserContext';

function Add() {
    const { user } = useContext(UserContext);
    const [symbol, setSymbol] = useState('');
    const [error, setError] = useState('');
    const [stock, setStock] = useState();
    async function handleSubmit(e) {
        try {
            e.preventDefault();
            if (symbol) {
                const { status, data } = await axios.get(
                    `http://localhost:4000/stock/${symbol}`
                );
                status == 200 ? setStock(data) : setStock('Invalid Symbol');
                console.log(stock);
            }
        } catch (e) {
            console.log(e.message);
            setError('Invalid symbol');
        }
    }
    return (
        <div>
            {!user && <Redirect to="/login" />}
            <h1>Add Stock to Portfolio</h1>
            <form onSubmit={handleSubmit}>
                <label>Search</label>
                <div>{error}</div>
                <input
                    type="text"
                    placeholder="Insert symbol"
                    onChange={(e) => setSymbol(e.target.value)}
                />
                <div />
                <button type="submit">Search</button>
            </form>
            <p />
            {stock && <AddStock stock={stock} />}
        </div>
    );
}

export default Add;
