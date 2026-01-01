import { useState } from "react";
import Button from "../common/Button";
import { FiMenu, FiX } from "react-icons/fi";
import MobileMenu from "./MobileMenu";
import "../../styles/bottomNav.scss";

export default function BottomNav() {
  //state för att veta om menyn är öppen eller stängd
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Toggle menu here");
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogin = () => {
    console.log("login from bottomNav");
  };

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />

      <nav className="bottom-nav">
        <button
          className="menu-icon-btn"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {/* Byt ikon beroende på om menyn är öppen eller stängd */}
          {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}

          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        <Button
          onClick={handleLogin}
          variant="default"
          className="mobile-login-btn-bottom-nav"
        >
          Login
        </Button>
      </nav>
    </>
  );
}
