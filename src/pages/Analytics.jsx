import React from 'react';
import { Card, Typography } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {
  DollarCircleOutlined,
  LineChartOutlined,
  BarChartOutlined,
  CalculatorOutlined,
  DatabaseOutlined,
} from '@ant-design/icons';

const { Title } = Typography;

const analyticsData = [
  { month: 'Jan', revenue: 2000, occupancyRate: 75 },
  { month: 'Feb', revenue: 2500, occupancyRate: 80 },
  { month: 'Mar', revenue: 3000, occupancyRate: 85 },
  { month: 'Apr', revenue: 3500, occupancyRate: 90 },
  { month: 'May', revenue: 4000, occupancyRate: 85 },
  { month: 'Jun', revenue: 4500, occupancyRate: 90 },
  { month: 'Jul', revenue: 5000, occupancyRate: 95 },
  { month: 'Aug', revenue: 5500, occupancyRate: 90 },
  { month: 'Sep', revenue: 6000, occupancyRate: 85 },
  { month: 'Oct', revenue: 6500, occupancyRate: 80 },
  { month: 'Nov', revenue: 7000, occupancyRate: 75 },
  { month: 'Dec', revenue: 7500, occupancyRate: 80 },
];

const Analytics = () => {
  return (
    <div className="analytics-container">
      <Title level={3}>Analytics</Title>
      <div className="cards-container">
        <Card className="card">
          <DollarCircleOutlined className="icon" />
          <Title level={4}>Total Revenue</Title>
          <div className="value">$50,000</div>
        </Card>
        <Card className="card">
          <CalculatorOutlined className="icon" />
          <Title level={4}>Profit and Loss Statements</Title>
          <div className="value">+ $15,000</div>
        </Card>
        <Card className="card">
          <DatabaseOutlined className="icon" />
          <Title level={4}>Total Bookings</Title>
          <div className="value">1,200</div>
        </Card>
      </div>
      <Card className="chart-card">
        <LineChartOutlined className="chart-icon" />
        <Title level={4}>Revenue Trends</Title>
        <LineChart width={500} height={300} data={analyticsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
        </LineChart>
      </Card>
    </div>
  );
};

export default Analytics;
