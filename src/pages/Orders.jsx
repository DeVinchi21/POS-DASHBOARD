import { Table } from 'antd';
import './Pages.css';

//Make edits to the page to show more info 

const kitchenOrdersData = [
  { id: 1, order: 'Burger', quantity: 2, status: 'In Progress' },
  { id: 2, order: 'Pizza', quantity: 1, status: 'Completed' },
  { id: 3, order: 'Salad', quantity: 3, status: 'In Progress' },
];

const barOrdersData = [
  { id: 1, order: 'Mojito', quantity: 2, status: 'In Progress' },
  { id: 2, order: 'Martini', quantity: 1, status: 'Completed' },
  { id: 3, order: 'Old Fashioned', quantity: 3, status: 'In Progress' },
];

const Orders = () => {
  const kitchenColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  const barColumns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Order',
      dataIndex: 'order',
      key: 'order',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
  ];

  return (
    <div className='orders-container'>
      <h1 className="header--titles">Kitchen Orders</h1>
      <Table dataSource={kitchenOrdersData} columns={kitchenColumns} pagination={false} className="orders-table" />

      <h1 className="header--titles">Bar Orders</h1>
      <Table dataSource={barOrdersData} columns={barColumns} pagination={false} className="orders-table" />
    </div>
  );
};

export default Orders;
