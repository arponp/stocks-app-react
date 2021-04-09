import React from 'react';
import { object } from 'prop-types';

const InfoStock = ({ stock }) => {
    console.log(stock);
    const capitalizeFirstLetter = (str) => {
        return str.toLowerCase().replace(/(^| )(\w)/g, function (x) {
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
        prevClose,
    } = stock;
    const current = last != null ? last.toFixed(2) : close.toFixed(2);
    const priceChange = current - prevClose;
    const percentChange = (priceChange / prevClose) * 100;
    console.log(percentChange.toFixed(2));
    return (
        <div>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <h5>
                {priceChange >= 0
                    ? `+${priceChange.toFixed(2)}`
                    : priceChange.toFixed(2)}{' '}
                ({`${percentChange.toFixed(2)}%`})
            </h5>
            <h2>${current}</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Symbol</td>
                        <td>{symbol}</td>
                    </tr>
                    <tr>
                        <td>Open</td>
                        <td>{open}</td>
                    </tr>
                    <tr>
                        <td>High</td>
                        <td>{high}</td>
                    </tr>
                    <tr>
                        <td>Low</td>
                        <td>{low}</td>
                    </tr>
                    <tr>
                        <td>Volume</td>
                        <td>{volume}</td>
                    </tr>
                    <tr>
                        <td>Previous Close</td>
                        <td>{prevClose}</td>
                    </tr>
                    <tr>
                        <td>Exchange</td>
                        <td>{exchange}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

InfoStock.propTypes = {
    stock: object,
};

export default InfoStock;
