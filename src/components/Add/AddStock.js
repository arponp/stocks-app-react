import React from "react";
import PropTypes from "prop-types";

function AddStock({ stock }) {
  return (
    <div>
      <label>{stock.name}</label>&nbsp;
      <button>Add</button>
    </div>
  );
}

AddStock.propTypes = {
  stock: PropTypes.object,
};

export default AddStock;
