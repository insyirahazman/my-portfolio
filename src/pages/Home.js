import "../styles/App.css";

function Home(){
    return(
        <div>
            <img src="assets/profile.png" alt="Insyirah Azman" style={{ display: "block", margin: "0 auto", width: "200px" }} />
            <br></br>
            <h2 className="text-3xl font-bold text-[#1e255e] mb-2">Insyirah Azman</h2>
            <p className="text-lg text-gray-700">Artificial Intelligence Student</p>

            <br></br>
            <p><a href="mailto:insyirazman@gmail.com">insyirazman@gmail.com</a></p>
            <div className="container">
                <div className="box"><a href="https://linkedin.com/in/insyirah-azman-022849213" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
                <div className="box"><a href="https://github.com/insyirahazman" target="_blank" rel="noopener noreferrer">GitHub</a></div>
            </div>
        </div>
    );
}

export default Home;