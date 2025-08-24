import React, { useContext } from "react";
import { Layout, Menu, theme } from "antd";
import { CategoryContext } from "../Contexts/CategoryProvider";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductProvider";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  const { categories } = useContext(CategoryContext);
  const { setSelectedCategory , getProducts } = useContext(ProductContext);
  const navigate = useNavigate();

  const items = [{
  label: `All Products`,
  onClick : () => {
    setSelectedCategory("");
    getProducts();
    navigate(`products`)
  }
},...categories.map(category => ({
  key: category._id,
  label: `${category.name}`,
  onClick : () => {
    setSelectedCategory(category._id);
    navigate(`products/category/${category._id}}`)
  }
}))];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <div
          style={{
            background: colorBgContainer,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
