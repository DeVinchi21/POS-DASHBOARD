import React from 'react';
import PropTypes from 'prop-types';

const ProductDetails = ({ product, handleEdit }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleEdit({ ...product, [name]: value });
  };

  return (
    <div className="product-details">
      <h2>Product Details</h2>
      <label htmlFor="item_name">Item Name:</label>
      <input
        type="text"
        id="item_name"
        name="item_name"
        value={product.item_name}
        onChange={handleInputChange}
      />

      <label htmlFor="units">Units:</label>
      <input
        type="text"
        id="units"
        name="units"
        value={product.units}
        onChange={handleInputChange}
      />

      <label htmlFor="discount">Discount:</label>
      <input
        type="number"
        id="discount"
        name="discount"
        value={product.discount}
        onChange={handleInputChange}
      />

      <label htmlFor="paymentmethod">Payment Method:</label>
      <input
        type="text"
        id="paymentmethod"
        name="paymentmethod"
        value={product.paymentmethod}
        onChange={handleInputChange}
      />

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        value={product.amount}
        onChange={handleInputChange}
      />

      <label htmlFor="supplier_name">Supplier Name:</label>
      <input
        type="text"
        id="supplier_name"
        name="supplier_name"
        value={product.supplier_name}
        onChange={handleInputChange}
      />

      <label htmlFor="supplier">Supplier:</label>
      <input
        type="text"
        id="supplier"
        name="supplier"
        value={product.supplier}
        onChange={handleInputChange}
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={product.category}
        onChange={handleInputChange}
      />

      <label htmlFor="tax">Tax:</label>
      <input
        type="number"
        id="tax"
        name="tax"
        value={product.tax}
        onChange={handleInputChange}
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={product.quantity}
        onChange={handleInputChange}
      />
    </div>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.shape({
    item_name: PropTypes.string.isRequired,
    units: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    paymentmethod: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    supplier_name: PropTypes.string.isRequired,
    supplier: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    tax: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }),
  handleEdit: PropTypes.func.isRequired,
};

export default ProductDetails;
