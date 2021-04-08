import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import InfoStock from './InfoStock';

function StockPage(props) {
    const [stock, setStock] = useState(null);
    const [loading, setLoading] = useState(true);
    const fetchStock = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:4000/stock/${props.match.params.symbol}`
            );
            setStock(data);
            setLoading(false);
        } catch (e) {
            console.log(e.message);
        }
    };
    useEffect(() => {
        fetchStock();
        // eslint-disable-next-line
    }, []);
    return (
        <div>
            {loading ? (
                <Spinner animation="border" />
            ) : (
                <InfoStock stock={stock} />
            )}
        </div>
    );
}

StockPage.propTypes = {
    match: object,
};

export default StockPage;
