import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/"> Home</NavLink>
      </nav>
    </header>
  );
};
