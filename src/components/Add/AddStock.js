import React from "react";
import PropTypes from "prop-types";

function AddStock({ stock }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h3>{stock.name.toLowerCase().toUpperCase()}</h3>
        <p>{stock.symbol}</p>
        <p>{stock.last}</p>
        <input placeholder="Quantity" name="quantity" />
        <div />
        <input type="submit" />
      </form>
    </div>
  );
}

AddStock.propTypes = {
  stock: PropTypes.object,
};

export default AddStock;
