import PropTypes from 'prop-types'

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

import './Pages.css'

import 'charts.css'

import {
  UpCircleFilled,
  PoundCircleFilled,
  WalletFilled,
  LineChartOutlined
} from '@ant-design/icons';

const Card = ({ title, value, icon }) => {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <>
    <h1>QUICK STATS</h1>
    <hr/>
    <div className='stat--cards'>
      <Card
        title="Profit"
        value="$10,000"
        icon={<UpCircleFilled />} />
      <Card
        title="Order Number"
        value="25"
        icon={<PoundCircleFilled />} />
      <Card
        title="Sales"
        value="$50,000"
        icon={<WalletFilled />} />
      <Card
        title="Total Revenue"
        value="$50,000"
        icon={<LineChartOutlined/>} />
    </div>
    <hr />
     <h1>DETAILS</h1>
     <CardsComponent/>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default Dashboard;

const ordersData = [
  { id: 1, name: 'Order 1', quantity: 5, price: 10 },
  { id: 2, name: 'Order 2', quantity: 10, price: 15 },
  { id: 3, name: 'Order 3', quantity: 8, price: 20 },
];

const transactionsData = [
  { id: 1, date: '2023-07-10', amount: 100, method:'Cash' },
  { id: 2, date: '2023-07-11', amount: 150 , method:'Mpesa'},
  { id: 3, date: '2023-07-12', amount: 200, method:'Card'  },
];

const salesData = [
  { name: 'Product A', sales: 1000},
  { name: 'Product B', sales: 1500 },
  { name: 'Product C', sales: 2000},
  { name: 'Product D', sales: 500},
];

const CardsComponent = () => {
  return (
    <div className="cards-container">
      <div className="card--info">
        <h2>Orders</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.name}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card--info">
        <h2>Transactions</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Method</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.date}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.method}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card--info">
        <h2>Sales Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};