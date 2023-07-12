import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import './Pages.css'

import 'charts.css'

import {
  UpCircleFilled,
  PoundCircleFilled,
  WalletFilled
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
    <><div className='stat--cards'>
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
        title="Custom Stat"
        value="Custom Value"
        icon={<i className="fas fa-cogs"></i>} />
    </div>
    <hr />
     <h1>More Data</h1>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element.isRequired,
};

export default Dashboard;
