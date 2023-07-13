import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'antd';


const { Meta } = Card;

const ProfilePage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch user data
    axios
      .get('https://dummyjson.com/users/1') // Replace with your API endpoint
      .then((response) => {
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-page">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card
            cover={<img alt="User Avatar" src={user.image} />}
            className="avatar-card"
          >
            <Meta title={`${user.firstName} ${user.lastName}`} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={16} lg={18} xl={20}>
          <Card className="details-card">
            <h2>Profile Details</h2>
            <p>
              <strong>Gender:</strong> {user.gender}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone}
            </p>
            <p>
              <strong>Username:</strong> {user.username}
            </p>
            <p>
              <strong>Birth Date:</strong> {user.birthDate}
            </p>
            <p>
              <strong>Address:</strong>{' '}
              {`${user.address.address}, ${user.address.city}, ${user.address.state}, ${user.address.postalCode}`}
            </p>
            <p>
              <strong>Company:</strong> {user.company.name}
            </p>
            <p>
              <strong>Department:</strong> {user.company.department}
            </p>
            <p>
              <strong>Title:</strong> {user.company.title}
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProfilePage;
