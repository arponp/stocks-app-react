import React from 'react';
import { object } from 'prop-types';

const PortfolioStock = ({ stock }) => {
    const { symbol, quantity } = stock;
    const editStock = () => {
        console.log('editing');
    };
    return (
        <tr>
            <td>{symbol}</td>
            <td>{quantity}</td>
            <td>
                <button onClick={editStock}>Edit</button>
            </td>
        </tr>
    );
};

PortfolioStock.propTypes = {
    stock: object,
};

export default PortfolioStock;
