import ProjectCard from "../components/ProjectCard";
import ProjectsData from "../data/ProjectsData";

function Projects() {
    const openSourceCount = ProjectsData.filter(project => project.status === "Open Source").length;
    const currentCount = ProjectsData.filter(project => project.status === "Current").length;
    const upcomingCount = ProjectsData.filter(project => project.status === "Upcoming").length;

    return (
        <div>
            <h2>My Projects</h2>
            <div className="project-list">
                <ProjectCard title="Open Source Projects" description={openSourceCount} type="complete" />
                <ProjectCard title="Current Projects" description={currentCount} type="current" />
                <ProjectCard title="Upcoming Projects" description={upcomingCount} type="upcoming" />
            </div>
        </div>
    );
}

export default Projects;