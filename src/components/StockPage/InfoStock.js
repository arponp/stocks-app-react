import React from 'react';
import { object } from 'prop-types';

const InfoStock = ({ stock }) => {
    console.log(stock);
    const capitalizeFirstLetter = (str) => {
        const lower = String(str).toLowerCase();
        return lower.replace(/(^| )(\w)/g, function (x) {
            return x.toUpperCase();
        });
    };
    const {
        symbol,
        name,
        high,
        low,
        open,
        close,
        last,
        exchange,
        volume,
    } = stock;
    return (
        <div>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <h2>{last != null ? last : close}</h2>
            <h3>{symbol}</h3>
            <label>Open: {open}</label>
            <div />
            <label>High: {high}</label>
            <div />
            <label>Low: {low}</label>
            <div />
            <label>Volume: {volume}</label>
            <div />
            <label>Exchange: {exchange}</label>
            <div />
        </div>
    );
};

InfoStock.propTypes = {
    stock: object,
};

export default InfoStock;
