import ProjectCard from "../components/ProjectCard";

function Projects() {
    return (
        <div>
            <h2>My Projects</h2>
            <div className="container">
                <ProjectCard title="Open Source Projects" description="12" type="complete" />
                <ProjectCard title="Current Projects" description="12" type="current" />
                <ProjectCard title="Upcoming Projects" description="12" type="upcoming" />
            </div>
        </div>
    );
}

export default Projects;