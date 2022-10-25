import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "./AvatarHeader.css";
import { Link } from "react-router-dom";

function AvatarHeaderComponent() {
  return (
    <div id="avatar-header">
      <Link to="/profile">
        <Avatar size="large" icon={<UserOutlined />} />
      </Link>
    </div>
  );
}

export default AvatarHeaderComponent;
