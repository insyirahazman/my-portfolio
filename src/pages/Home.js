import "../styles/App.css";
import profileImg from "../assets/profile.png";

function Home() {
    return (
        <div>
            <img src={profileImg} alt="Insyirah Azman" style={{ border: "5px solid black", display: "block", margin: "0 auto", width: "200px" }} />
            <br />
            <h2 className="text-3xl font-bold text-[#1e255e] mb-2">Insyirah Azman</h2>
            <p className="text-lg text-gray-700">Artificial Intelligence Student</p>
            <p>Hey there! I'm Insyirah.</p>
            <p>I love exploring data, experimenting with ML and DL models, and learning new technologies. This portfolio is where I share my journey, projects, and skills as I grow in the field of tech.</p>
            <br />
            <p><a href="mailto:insyirazman@gmail.com">insyirazman@gmail.com</a></p>
            <div className="container">
                <div className="box"><a href="https://linkedin.com/in/insyirah-azman-022849213" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                <div className="box"><a href="https://github.com/insyirahazman" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            </div>
        </div>
    );
}

export default Home;