import React from 'react';
import './Pages.css';

const mockData = [
  { id: 1, name: 'John Doe', shift: 'Morning', attendance: 'Present' },
  { id: 2, name: 'Jane Smith', shift: 'Evening', attendance: 'Present' },
  { id: 3, name: 'Bob Johnson', shift: 'Morning', attendance: 'Absent' },
  // ... add data for the other personnel here
];

const EmployeeSchedule = () => {
  return (
    <div className="employee-schedule">
      <h2>Employee Attendance and Shift Schedule</h2>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Shift</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((personnel) => (
            <tr key={personnel.id}>
              <td>{personnel.id}</td>
              <td>{personnel.name}</td>
              <td>{personnel.shift}</td>
              <td>{personnel.attendance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeSchedule;
