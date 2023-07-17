import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';

import './Charts.css';

import './Pages.css';

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
      <h1 className='header--titles'>PERFOMANCE ANALYTICS</h1>
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

      </div>
      <BookingsChart />
    </>
  );
};

export default Charts;


const BookingsChart = () => {
  const bookingsData = [
    { week: 'Week 1', bookings: 10 },
    { week: 'Week 2', bookings: 15 },
    { week: 'Week 3', bookings: 8 },
    { week: 'Week 4', bookings: 12 },
    
  ];

  const revenueData = [
    { week: 'Week 1', revenue: 500 },
    { week: 'Week 2', revenue: 750 },
    { week: 'Week 3', revenue: 600 },
    { week: 'Week 4', revenue: 900 },
    
  ];

  return (
    <>
      <h1 className='header--titles'>BOOKINGS & REVENUE DATA</h1>
      <div className="charts-container">
        <div className="chart-card">
          <h3>Booking Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={bookingsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bookings" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Revenue Data</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};