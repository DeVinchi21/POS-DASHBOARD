import { useState } from 'react';
import { Form, Input, Button, Card, Typography, Select } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

const usersData = [
  { name: 'admin', password: 'password', department: 'Engineering' },
  { name: 'Jane Smith', password: 'abcde12345', department: 'Marketing' },
  { name: 'David Johnson', password: 'test123', department: 'Sales' },
];

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    
    setTimeout(() => {
      const { name, password, department } = values;
      const user = usersData.find(
        (userData) => userData.name === name && userData.password === password && userData.department === department
      );
      if (user) {
        console.log('Login successful!', user);
        setLoading(false);
        navigate('/dashboard'); // go to dashboard
      } else {
        console.log('Login failed! Invalid credentials');
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <>
      <div className='form--bg' 
       style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'0',
        padding:'0'
      }}>
        <Card style={{ width: '400px'}}>
          <Title level={3} style={{ textAlign: 'center' }}>
            Login
          </Title>
          <Form name="login-form" onFinish={onFinish}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: 'Please enter your name!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Name" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item
              name="department"
              rules={[{ required: true, message: 'Please select your department!' }]}
            >
              <Select placeholder="Select department">
                <Option value="Engineering">Engineering</Option>
                <Option value="Marketing">Marketing</Option>
                <Option value="Sales">Sales</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} style={{ width: '100%' }}>
                Log In
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
};

export default Login;
