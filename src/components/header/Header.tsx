import { Header } from "../../constant/layout.constant";
import AvatarHeaderComponent from "../avatar-header/AvatarHeader";
import "./Header.css";

function HeaderComponent() {
  return (
    <Header className="site-layout-background">
      <AvatarHeaderComponent />
    </Header>
  );
}

export default HeaderComponent;
