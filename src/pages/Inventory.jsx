import React, { useState, useEffect } from 'react';
import './Pages.css';
import ProductDetails from '../components/ProductDetails';

// Mock API
const getProductsFromAPI = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          units: 'Pack',
          discount: 10,
          paymentmethod: 'Credit Card',
          amount: 100,
          supplier_name: 'Supplier A',
          supplier: 'Supplier A',
          category: 'Electronics',
          id: 1,
          tax: 5,
          item_name: 'Product 1',
          quantity: 5,
        },
        // Add more mock data here
      ]);
    }, 1000);
  });
};

const deleteProductFromAPI = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};

const saveProductToAPI = (product) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(product);
    }, 500);
  });
};

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProductsFromAPI();
    setProducts(data);
  };

  const deleteProduct = async (id) => {
    await deleteProductFromAPI(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  const saveProduct = async () => {
    if (!newProduct) return;

    if (editingProduct) {
      // Update existing product
      const updatedProduct = await saveProductToAPI(newProduct);
      setProducts(products.map((product) => (product.id === updatedProduct.id ? updatedProduct : product)));
      setEditingProduct(null);
    } else {
      // Add new product
      const product = { ...newProduct };
      product.id = Date.now(); // Generate a temporary unique ID
      await saveProductToAPI(product);
      setProducts([...products, product]);
    }

    setNewProduct(null);
  };

  const editProduct = (product) => {
    setNewProduct(product);
    setEditingProduct(product.id);
  };

  const handleEdit = (updatedProduct) => {
    setNewProduct(updatedProduct);
  };

  const headers = [
    { label: 'Item Name', key: 'item_name' },
    { label: 'Units', key: 'units' },
    { label: 'Discount', key: 'discount' },
    { label: 'Payment Method', key: 'paymentmethod' },
    { label: 'Amount', key: 'amount' },
    { label: 'Supplier Name', key: 'supplier_name' },
    { label: 'Supplier', key: 'supplier' },
    { label: 'Category', key: 'category' },
    { label: 'Tax', key: 'tax' },
    { label: 'Quantity', key: 'quantity' },
  ];

  return (
    <div className="product-management">
      <h1>Product Management System</h1>

      <div className="product-form">
        <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
        <ProductDetails product={newProduct} handleEdit={handleEdit} />
        <button onClick={saveProduct}>{editingProduct ? 'Save Changes' : 'Add Product'}</button>
      </div>

      <div className="product-list">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header.key}>{header.label}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                {headers.map((header) => (
                  <td key={header.key}>{product[header.key]}</td>
                ))}
                <td>
                  <button onClick={() => editProduct(product)}>Edit</button>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
