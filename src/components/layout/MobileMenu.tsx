import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../../styles/mobileMenu.scss";
import Button from "../../components/common/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  //class to control css-animation
  const menuClass = isOpen ? "mobile-menu open" : "mobile-menu";

  const navigate = useNavigate();
  return (
    <>
      {/* suddig bakgrund */}
      {/* Klicka på bakgrunden för att stänga menyn */}
      <div
        className={`menu-backdrop ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-links">
          <NavLink to="/" onClick={onClose}>
            Home
          </NavLink>
          <NavLink to="/how" onClick={onClose}>
            How
          </NavLink>
          <NavLink to="/about" onClick={onClose}>
            About
          </NavLink>
          <Button
            onClick={() => navigate("/apply")}
            variant="secondary"
            className="get-started-btn"
          >
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
