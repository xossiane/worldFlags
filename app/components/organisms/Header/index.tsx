import { HTMLAttributes } from "react";
import DarkModeButton from "../../theme/DarkMode";

type HeaderProps = HTMLAttributes<HTMLDivElement> & {
  propertyTypeKey: propertyTypeKey;
};

const Header = ({ propertyTypeKey }: HeaderProps) => {
  return (
    <nav className="w-44">
      <div
        className="w-full shadow-slate-200 flex flex-row justify-between "
        style={{
          padding: "30px",
          boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.06)",
        }}
      >
        <h1 style={{ fontWeight: 800 }}>Where in the World?</h1>

        <DarkModeButton />
      </div>
    </nav>
  );
};

export default Header;
