import { useNavigate } from "react-router-dom";

function ProjectCard({ title, description, type }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/projects/${type}`);
  };

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: "pointer" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;