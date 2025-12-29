import { NavLink } from "react-router-dom";
import Button from "../common/Button";
import avatar from "../../assets/cloudimg2.svg";

const Navbar = () => {
  const handleLogin = () => {
    console.log("Open login-modal...");
  };

  return (
    <nav className="navbar">
      <div className="avatar-div">
        <h1 className="nimbus-h1">Nimbus</h1>
        <img src={avatar} alt="avatar" className="cloud-svg" />
      </div>
      <div className="link-div">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/how">How</NavLink>
        <NavLink to="/about">About</NavLink>

        <Button onClick={handleLogin} variant="primary">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
