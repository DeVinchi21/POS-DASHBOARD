import { useState } from 'react';
import { Layout as AntdLayout, Menu } from 'antd';
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom';
import {
  DashboardOutlined,
  UserOutlined,
  LogoutOutlined,
  AppleFilled,
  PieChartOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Sider, Content } = AntdLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () =>{
    navigate('/');
  }

  const handleMenuCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <AntdLayout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={handleMenuCollapse}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
        >
          <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="/Orders" icon={<ShoppingCartOutlined />}>
            <Link to="/Orders">Orders</Link>
          </Menu.Item>
          <Menu.Item key="/settings" icon={<AppleFilled />}>
            <Link to="/inventory">Inventory</Link>
          </Menu.Item>
          <Menu.Item key="/Analytics" icon={<PieChartOutlined />}>
            <Link to="/Analytics">Analytics</Link>
          </Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>
            <Link to="/profile">Profile</Link>
          </Menu.Item>
          <Menu.Item key="/" icon={<LogoutOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <AntdLayout>
        
        <Content style={{ padding: '16px' }}>{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

Layout.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  };

export default Layout;
