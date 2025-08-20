import { useParams } from "react-router-dom";
import projects from "../data/ProjectsData";
import SkillList from "../components/SkillList";

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => String(p.id) === id);

  if (!project) {
    return <div>Project not found.</div>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      {project.status && <p>Status: {project.status}</p>}
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <img src="/assets/github.png" alt="GitHub" width="30" height="30" style={{ verticalAlign: "middle" }} />
        </a>
      )}
      {project.video && (
        <video width="320" height="240" controls>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {project.tags && project.tags.length > 0 && (
        <div className="project-tags">
          <h4>Tech Stack:</h4>
          <SkillList tags={project.tags} />
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
