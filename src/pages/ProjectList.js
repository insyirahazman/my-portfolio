import SkillList from "../components/SkillList";
import { Link } from "react-router-dom";
import { FiMonitor, FiBarChart, FiBook, FiCloud } from "react-icons/fi";
import githubImg from "../assets/github.png";

// Videos
import project1Video from "../assets/project_info/project-1.mp4";
import project7Video from "../assets/project_info/project-7.mp4";

// Images
import project8Img from "../assets/project_info/project-8.png";

// Map filenames to imported assets
const videoMap = {
  "project-1.mp4": project1Video,
  "project-7.mp4": project7Video
};

const imgMap = {
  "project-8.png": project8Img
};

function ProjectList({ title = "Projects", projects = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="project-list">
        {projects.length > 0 ? (
          projects.map((project, idx) => {
            let ProjectIcon = FiMonitor;
            const lower = project.title.toLowerCase();
            if (lower.includes("dashboard")) ProjectIcon = FiBarChart;
            else if (lower.includes("book") || lower.includes("rental")) ProjectIcon = FiBook;
            else if (lower.includes("weather")) ProjectIcon = FiCloud;

            const videoSrc = project.video ? videoMap[project.video] : null;
            const imgSrc = project.image ? imgMap[project.image] : null;

            // Debug (remove after confirming)
            if (project.video && !videoSrc) {
              console.warn(`No video found for key "${project.video}". Check ProjectsData.js and videoMap keys.`);
            }
            if (project.image && !imgSrc) {
              console.warn(`No image found for key "${project.image}". Check ProjectsData.js and imgMap keys.`);
            }

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

                {videoSrc && (
                  <video
                    className="project-media"
                    width="100%"
                    height="240"
                    controls
                    style={{ objectFit: "cover", marginBottom: "12px" }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}

                {!videoSrc && imgSrc && (
                  <img
                    className="project-media"
                    src={imgSrc}
                    alt={project.title}
                    style={{ width: "100%", height: "240px", objectFit: "cover", marginBottom: "12px", borderRadius: "6px" }}
                  />
                )}

                {/* Optional placeholder if neither found */}
                {!videoSrc && !imgSrc && (
                  <div style={{
                    width: "100%",
                    height: "240px",
                    background: "#e6e6e6",
                    color: "#555",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    borderRadius: "6px",
                    fontSize: "14px"
                  }}>
                    (No media)
                  </div>
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
