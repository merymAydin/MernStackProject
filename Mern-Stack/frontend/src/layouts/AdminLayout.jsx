import React from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  ShopOutlined,
  UserOutlined,
  DashboardOutlined
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";


const { Sider, Header, Footer, Content } = Layout;

const AdminLayout = ({ children }) => {

  const navigate = useNavigate();
  const items = [
    { key: '1', icon: <DashboardOutlined />, label: 'Dashboard', onClick : () => navigate('/admin') },
    { key: '2', icon: <AppstoreOutlined />, label: 'Category', children: [
      { key: '2-1', label: 'List Categories' , onClick : () => navigate('/admin/categories') },
      { key: '2-2', label: 'Add Category' , onClick : () => navigate('/admin/categories/create') }
    ]},
    { key: '3', icon: <ShopOutlined />, label: 'Product',children: [
      { key: '3-1', label: 'List Products', onClick: () => navigate('/admin/products') },
      { key: '3-2', label: 'Add Product' , onClick: () => navigate('/admin/products/create') }
    ] },
    { key: '4', icon: <UserOutlined />, label: 'Users', children: [
      { key: '4-1', label: 'List Users' },
      { key: '4-2', label: 'Add User' }
    ] }
  ]

  return (
    <div className="admin-layout">
      <Layout style={{ height: "100vh" }}>
        <Sider width="20%" style={{ color: "#fff" }}>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            items={items}
            style={{fontSize: "1.5rem"}}
          />
        </Sider>
        <Layout>
          <Header style={{ color: "#fff" }}>Mern Stack</Header>
          <Content style={{ height: "auto", overflowY: "auto" }}>{children}</Content>
          <Footer style={{ backgroundColor: "#001529", color: "#fff" }}>
            All Rights Reserved
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
