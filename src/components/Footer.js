import "../styles/App.css"
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer className="footer-box">
            <p>&copy; 2025 Insyirah Azman. All rights reserved.</p>
            <div style={{ marginTop: "10px", display: "flex", justifyContent: "center", gap: "18px" }}>
                <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><FiMail style={{ color: "#222", fontSize: "1.3em" }} /></a>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin style={{ color: "#222", fontSize: "1.3em" }} /></a>
                <a href="https://github.com/insyirahazman" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub style={{ color: "#222", fontSize: "1.3em" }} /></a>
            </div>
        </footer>
    );
}

export default Footer;