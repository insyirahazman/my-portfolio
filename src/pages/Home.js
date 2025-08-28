import "../styles/App.css";
import profileImg from "../assets/profile.png";

function Home() {
    return (
        <div>
            <img src={profileImg} alt="Insyirah Azman" style={{ border: "5px solid #172c66", borderRadius: "50%", display: "block", margin: "0 auto", width: "180px", boxShadow: "0 4px 16px rgba(23,44,102,0.15)" }} />
            <br />
            <h2 style={{ color: "#172c66", fontWeight: "bold", textAlign: "center", position: "relative" }}>
                <span role="img" aria-label="wave" style={{ fontSize: "1.5em", marginRight: "8px" }}>👋</span>
                Insyirah Azman
                <span style={{ display: "block", height: "4px", background: "linear-gradient(90deg,#f582ae,#f3d2c1)", width: "60px", margin: "8px auto 0" }}></span>
            </h2>
            <p className="text-lg text-gray-700" style={{ marginTop: "8px" }}>Artificial Intelligence Student <span role="img" aria-label="robot">🤖</span></p>
            <p>Hey there! I'm Insyirah <span role="img" aria-label="sparkles">✨</span></p>
            <p>I love exploring data <span role="img" aria-label="bar chart">📊</span>, experimenting with ML and DL models <span role="img" aria-label="brain">🧠</span>, and learning new technologies <span role="img" aria-label="rocket">🚀</span>. This portfolio is where I share my journey, projects, and skills as I grow in the field of tech.</p>
            <br />
            <p><span role="img" aria-label="email">📧</span> <a href="mailto:insyirazman@gmail.com">insyirazman@gmail.com</a></p>
            <div className="container">
                <div className="box"><span role="img" aria-label="linkedin">🔗</span> <a href="https://linkedin.com/in/insyirah-azman-022849213" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                <div className="box"><span role="img" aria-label="github">🐙</span> <a href="https://github.com/insyirahazman" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            </div>
        </div>
    );
}

export default Home;