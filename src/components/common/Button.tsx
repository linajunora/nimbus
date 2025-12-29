import type { ReactNode } from "react";
import "./Button.scss";

//reglera för hur knappen får användas
interface ButtonProps {
  children: ReactNode; //texten inuti knappen
  onClick?: () => void; //funktionen som körs vid klick
  variant?: "default" | "default-blue" | "primary" | "secondary"; // olika utseenden
}

const Button = ({ children, onClick, variant = "default" }: ButtonProps) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
