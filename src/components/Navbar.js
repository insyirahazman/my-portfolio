import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FiDownload } from "react-icons/fi";

function MyNavbar() {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const proceed = window.confirm("Do you want to download the resume?");
    if (proceed){
      window.location.href = "/assets/resume.pdf"; 
    }
  };
  return (
    <div className="Navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
            <a href="/assets/resume.pdf" onClick={handleResumeDownload} style={{ display: "flex", alignItems: "center" }}>
              Resume <FiDownload style={{ marginLeft: "6px", color: "#222" }} />
            </a>
        </li>
        </ul>
        <span className="Navbar-title">PORTFOLIO</span>
    </div>
  );
}

export default MyNavbar;