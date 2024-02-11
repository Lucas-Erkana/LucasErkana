import NavLinks from "./NavLinks";
import logo from "../images/logo.webp";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Lucas Erkana' Logo" />
      <NavLinks />
    </header>
  );
};

export default Header;
