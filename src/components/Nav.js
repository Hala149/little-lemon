import { Link } from "react-router-dom";
import logo from "../assets/logo.png.svg";

function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        
        {/* Logo + Brand */}
        <div className="nav-brand">
          <img src={logo} alt="Little Lemon Logo" />
          <h2>Little Lemon</h2>
        </div>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/booking">Reservations</Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Nav;
