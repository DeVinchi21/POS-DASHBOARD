import { useState } from 'react';
import { Table, Alert, Button, Modal, Form, Input } from 'antd';

import './Pages.css';

const inventoryData = [
  { id: 1, name: 'Product 1', quantity: 10 },
  { id: 2, name: 'Product 2', quantity: 5 },
  { id: 3, name: 'Product 3', quantity: 15 },
  { id: 4, name: 'Product 4', quantity: 3 },
  { id: 5, name: 'Product 5', quantity: 8 },
];

const Inventory = () => {
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form] = Form.useForm();

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setShowUpdateModal(true);
  };

  const handleDelete = (productId) => {
   
    console.log(`Delete product with ID: ${productId}`);
  };

  const handleUpdate = (values) => {
    
    console.log('Updated product:', values);
    setShowUpdateModal(false);
    form.resetFields();
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, product) => (
        <>
          <Button type="primary" onClick={() => handleEdit(product)}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(product.id)}>
            Delete
          </Button>
        </>
      ),
    },
  ];

  const lowInventoryThreshold = 5; // Set the limit for low inventory

  const lowInventoryProducts = inventoryData.filter(
    (product) => product.quantity < lowInventoryThreshold
  );

  return (
    <div className='inventory-container'>
      <h1 className="header--titles"> Inventory</h1>
      {lowInventoryProducts.length > 0 && (
        <Alert
          message="Low Inventory Alert"
          description={
            <>
              <p>The following products have low inventory:</p>
              <ul>
                {lowInventoryProducts.map((product) => (
                  <li key={product.id}>
                    {product.name} (ID: {product.id}) - Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </>
          }
          type="warning"
          showIcon
        />
      )}
      <Table dataSource={inventoryData} columns={columns} pagination={false} />

      <Modal
        title="Update Product"
        visible={showUpdateModal}
        onCancel={() => setShowUpdateModal(false)}
        footer={null}
      >
        <Form form={form} onFinish={handleUpdate} initialValues={{ ...selectedProduct }}>
          <Form.Item
            name="name"
            label="Product Name"
            rules={[{ required: true, message: 'Please enter the product name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="quantity"
            label="Quantity"
            rules={[{ required: true, message: 'Please enter the quantity' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Inventory;
