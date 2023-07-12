import React, { useState, useEffect } from 'react';


function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    generateData();
  }, []);

  const generateData = () => {
    // Generate 10 entries with the provided schema
    const generatedData = Array.from({ length: 10 }, (_, index) => ({
      email: `email${index + 1}@example.com`,
      nhif: `NHIF${index + 1}`,
      nssf: `NSSF${index + 1}`,
      idnumber: `ID${index + 1}`,
      lastname: `Lastname${index + 1}`,
      phone: `Phone${index + 1}`,
      dayoff: `DayOff${index + 1}`,
      middlename: `Middlename${index + 1}`,
      name: `Name${index + 1}`,
      salary: `Salary${index + 1}`,
      password: `Password${index + 1}`,
      department: `Department${index + 1}`,
    }));

    setData(generatedData);
  };

  const handleEdit = (record) => {
    // Handle edit functionality for the specific record
    console.log('Edit', record);
  };

  const handleDelete = (record) => {
    // Handle delete functionality for the specific record
    console.log('Delete', record);
  };

  return (
    <div className="table-responsive stripped">
      <table className="table">
        <thead>
          <tr>
            <th>Email</th>
            <th>NHIF</th>
            <th>NSSF</th>
            <th>ID NO</th>
            <th>L. NAME</th>
            <th>M. NAME</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Day Off</th>
            <th>Salary</th>
            <th>Password</th>
            <th>Depart.</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr key={record.email}>
              <td>{record.email}</td>
              <td>{record.nhif}</td>
              <td>{record.nssf}</td>
              <td>{record.idnumber}</td>
              <td>{record.lastname}</td>
              <td>{record.middlename}</td>
              <td>{record.name}</td>
              <td>{record.phone}</td>
              <td>{record.dayoff}</td>
              <td>{record.salary}</td>
              <td>{record.password}</td>
              <td>{record.department}</td>
          
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => handleEdit(record)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(record)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyComponent;
