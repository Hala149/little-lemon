import logo from "../assets/Logo .svg";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Little Lemon Logo" className="logo" />
        <div className="brand">
          <h1>Little Lemon</h1>
          <p>Chicago</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
