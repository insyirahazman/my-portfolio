import "./Navbar.css"

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-content">
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="Navbar-title">PORTFOLIO</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;