import SkillList from "../components/SkillList";
import { Link } from "react-router-dom";
import { FiMonitor, FiBarChart, FiBook, FiCloud } from "react-icons/fi";
import githubImg from "../assets/github.png";
import project1Video from "../assets/project-1.mp4";

// Map video filenames to imports
const videoMap = {
  "project-1.mp4": project1Video,
  // Add more: "project-2.mp4": project2Video,
};

function ProjectList({ title = "Projects", projects = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project, idx) => {
            // Choose icon based on project type/title
            let ProjectIcon = FiMonitor;
            if (project.title.toLowerCase().includes("dashboard")) ProjectIcon = FiBarChart;
            else if (project.title.toLowerCase().includes("book") || project.title.toLowerCase().includes("rental")) ProjectIcon = FiBook;
            else if (project.title.toLowerCase().includes("weather")) ProjectIcon = FiCloud;

            return (
              <div className="projectlist-card" key={project.id || idx}>
                <h3>
                  <ProjectIcon style={{ color: "#000", verticalAlign: "middle", marginRight: "8px" }} />
                  <Link to={`/project/${project.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                    {project.title}
                  </Link>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: "10px" }}
                    >
                      <img src={githubImg} alt="GitHub" width="20" height="20" />
                    </a>
                  )}
                </h3>
                <h5>{project.description}</h5>
                {project.video && videoMap[project.video] && (
                  <video width="320" height="240" controls>
                    <source src={videoMap[project.video]} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                <h5>Tech Stack:</h5>
                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    <SkillList skills={project.tags} />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div>No projects found.</div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
