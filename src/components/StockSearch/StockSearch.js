import React, { useState } from 'react';
import { Redirect } from 'react-router';

const StockSearch = () => {
    const [symbol, setSymbol] = useState('');
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (symbol) setRedirect(true);
    };
    return (
        <div>
            {redirect && <Redirect to={`/stock/${symbol}`} />}
            <form onSubmit={handleSubmit}>
                <h1>Stock Search</h1>
                <div />
                <input
                    type="text"
                    name="search"
                    placeholder="Search Symbols"
                    onChange={(e) => setSymbol(e.target.value)}
                />
                <div />
                <button type="submit">Search</button>
            </form>
        </div>
    );
};

export default StockSearch;
