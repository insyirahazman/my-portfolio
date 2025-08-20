import { Link } from "react-router-dom";
import "./Navbar.css";

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
            <a href="/assets/resume.pdf" onClick={handleResumeDownload}>Resume</a>
        </li>
      </ul>
      <ul>
        <li className="Navbar-title">PORTFOLIO</li>
      </ul>
    </div>
  );
}

export default MyNavbar;