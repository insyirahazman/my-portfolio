import MyNavbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer"; 

import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Projects from "./pages/Projects";
import projects from "./data/ProjectsData";
import ProjectList from "./pages/ProjectList";

import "./styles/App.css";
import "./styles/Navbar.css";

function App(){
  return(
    <BrowserRouter>
      <div>
        <MyNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:type" element={<ProjectListWrapper />} />
          </Routes>
        </main>
        <main><Footer /></main>
      </div>
    </BrowserRouter>
  );
}

function ProjectListWrapper() {
  const { type } = useParams();
  const statusMap = {
    "complete": "Open Source",
    "current": "Current",
    "upcoming": "Upcoming"
  };
  const filteredProjects = projects.filter(
    (project) => project.status.toLowerCase() === statusMap[type]?.toLowerCase()
  );
  return <ProjectList title={statusMap[type] + " Projects"} projects={filteredProjects} />;
}

export default App;