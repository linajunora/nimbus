import type { ReactNode } from "react";
import "./Button.scss";
import clsx from "clsx";

//reglera för hur knappen får användas
interface ButtonProps {
  children: ReactNode; //texten inuti knappen
  onClick?: () => void; //funktionen som körs vid klick
  variant?: "default" | "default-blue" | "primary" | "secondary"; // olika utseenden
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  className,
}: ButtonProps) => {
  return (
    <button
      // 4. Använd clsx för att slå ihop allt snyggt
      // Den tar din bas-klass + varianten + eventuella extra klasser du skickar in
      className={clsx("btn", `btn-${variant}`, className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
