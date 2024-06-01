import { NavLink, Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="relative z-40">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        {/* Links only for DEV nav */}
        <NavLink to={"/login"}>Login</NavLink>
        <NavLink to={"/confirmation"}>Confirmation</NavLink>
        {/*  */}
        <NavLink to={"/my-attendance"}>My Attendance</NavLink>
        <NavLink to="/rsvp">RSVP</NavLink>
      </nav>
    </header>
  );
};
