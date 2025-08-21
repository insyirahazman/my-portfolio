import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FiDownload } from "react-icons/fi";
import homeImg from "../assets/home.png";
import projectsImg from "../assets/projects.png";
import resumePDF from "../assets/resume.pdf";

function MyNavbar() {
  const handleResumeDownload = (e) => {
    e.preventDefault();
    const proceed = window.confirm("Do you want to download the resume?");
    if (proceed) {
      window.location.href = resumePDF;
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
          <a
            href={resumePDF}
            onClick={handleResumeDownload}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Resume{" "}
            <FiDownload style={{ marginLeft: "6px", color: "#222" }} />
          </a>
        </li>
      </ul>
      <span className="Navbar-title">PORTFOLIO</span>
    </div>
  );
}

export default MyNavbar;