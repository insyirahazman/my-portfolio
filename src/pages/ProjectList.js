import SkillList from "../components/SkillList";
import { Link } from "react-router-dom";
import { FiMonitor, FiBarChart, FiBook, FiCloud } from "react-icons/fi";
import { BsCircleFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

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
                </h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "#222",
                      fontSize: "0.95em",
                      display: "inline-flex",
                      alignItems: "center",
                      textDecoration: "none"
                    }}
                    onMouseOver={e => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseOut={e => (e.currentTarget.style.textDecoration = "none")}
                  >
                    <FaGithub style={{ marginRight: "5px" }} />
                    GitHub
                  </a>
                )}
              <h5>{project.description}
                {project.video && (
                  <video width="320" height="240" controls>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </h5>
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
