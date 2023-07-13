import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './Charts.css';

const data = [
  { month: 'Jan', avgRoomRate: 150, occupancy: 0.8, revenuePerRoom: 120 },
  { month: 'Feb', avgRoomRate: 160, occupancy: 0.7, revenuePerRoom: 112 },
  { month: 'Mar', avgRoomRate: 170, occupancy: 0.9, revenuePerRoom: 153 },
  { month: 'Apr', avgRoomRate: 180, occupancy: 0.8, revenuePerRoom: 144 },
  { month: 'May', avgRoomRate: 190, occupancy: 0.7, revenuePerRoom: 133 },
  { month: 'Jun', avgRoomRate: 200, occupancy: 0.9, revenuePerRoom: 180 },
];

const Charts = () => {
  return (
    <>
      <h1>PERFOMANCE ANALYTICS</h1>
      <div className="charts-container">

        <div className="chart-card">
          <h3>Average Room Rate</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgRoomRate" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Occupancy</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="occupancy" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Revenue per Room</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="revenuePerRoom" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div></>
  );
};

export default Charts;
