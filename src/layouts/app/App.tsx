/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import {
  BreadcrumbComponent,
  FooterComponent,
  HeaderComponent,
  SiderComponent,
} from "../../components/index.component";
import { Content } from "antd/lib/layout/layout";

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SiderComponent />
      <Layout className="site-layout">
        <HeaderComponent />
        <Content style={{ margin: "0 16px" }}>
          <BreadcrumbComponent />
          <Outlet />
        </Content>
        <FooterComponent />
      </Layout>
    </Layout>
  );
}

export default App;
