import { Breadcrumb } from "antd";

function BreadcrumbComponent() {
  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      <Breadcrumb.Item href="/profile">User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default BreadcrumbComponent;
