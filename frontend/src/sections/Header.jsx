import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <NavLink to="/my-attendance">My Attendance</NavLink>
        <NavLink to="/rsvp">RSVP</NavLink>
      </nav>
    </header>
  );
};
