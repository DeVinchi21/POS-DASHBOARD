import React, { useState } from 'react';

const mockData = [
    { id: 1, name: 'John Doe', shift: 'Morning', attendance: 'Present' },
    { id: 2, name: 'Jane Smith', shift: 'Evening', attendance: 'Present' },
    { id: 3, name: 'Bob Johnson', shift: 'Morning', attendance: 'Absent' },
    { id: 4, name: 'Alice Williams', shift: 'Evening', attendance: 'Present' },
    { id: 5, name: 'Michael Brown', shift: 'Morning', attendance: 'Present' },
    { id: 6, name: 'Emily Davis', shift: 'Evening', attendance: 'Absent' },
    { id: 7, name: 'William Jones', shift: 'Morning', attendance: 'Present' },
    { id: 8, name: 'Sophia Taylor', shift: 'Evening', attendance: 'Present' },
    { id: 9, name: 'James Wilson', shift: 'Morning', attendance: 'Present' },
    { id: 10, name: 'Olivia Martinez', shift: 'Evening', attendance: 'Absent' },
    { id: 11, name: 'Daniel Anderson', shift: 'Morning', attendance: 'Present' },
    { id: 12, name: 'Isabella Rodriguez', shift: 'Evening', attendance: 'Present' },
    { id: 13, name: 'Matthew Lee', shift: 'Morning', attendance: 'Absent' },
    { id: 14, name: 'Ava Miller', shift: 'Evening', attendance: 'Present' },
    { id: 15, name: 'David Garcia', shift: 'Morning', attendance: 'Present' },
    { id: 16, name: 'Mia Hernandez', shift: 'Evening', attendance: 'Present' },
    { id: 17, name: 'Joseph Martinez', shift: 'Morning', attendance: 'Absent' },
    { id: 18, name: 'Abigail Jackson', shift: 'Evening', attendance: 'Present' },
    { id: 19, name: 'Andrew Thompson', shift: 'Morning', attendance: 'Present' },
    { id: 20, name: 'Charlotte Harris', shift: 'Evening', attendance: 'Absent' },
  ];
  

const EmployeeSchedule = () => {
  const [selectedShift, setSelectedShift] = useState('All');
  const [selectedAttendance, setSelectedAttendance] = useState('All');

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value);
  };

  const handleAttendanceChange = (event) => {
    setSelectedAttendance(event.target.value);
  };

  const filteredData = mockData.filter((personnel) => {
    const isShiftMatched = selectedShift === 'All' || personnel.shift === selectedShift;
    const isAttendanceMatched = selectedAttendance === 'All' || personnel.attendance === selectedAttendance;
    return isShiftMatched && isAttendanceMatched;
  });

  return (
    <div className="employee-schedule">
      <h2>Employee Attendance and Shift Schedule</h2>
      <div className="filter-controls">
        <label htmlFor="shiftFilter">Filter by Shift:</label>
        <select id="shiftFilter" value={selectedShift} onChange={handleShiftChange}>
          <option value="All">All Shifts</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
        </select>
        <label htmlFor="attendanceFilter">Filter by Attendance:</label>
        <select id="attendanceFilter" value={selectedAttendance} onChange={handleAttendanceChange}>
          <option value="All">All Attendances</option>
          <option value="Present">Present</option>
          <option value="Absent">Absent</option>
        </select>
      </div>
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
          {filteredData.map((personnel) => (
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
