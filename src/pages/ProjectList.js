import SkillCard from "../components/SkillCard";

function ProjectList({ title = "Projects", projects = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <div className="project-list">
        <ul>
          {projects.length > 0 ? (
            projects.map((project, idx) => (
              <li key={project.id || idx}>
                <h3>{project.title}</h3>
                <h5>{project.description}</h5>
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View GitHub</a>
                )}
                <br></br>
                {project.video && (
                  <video width="320" height="240" controls>
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {project.tags && project.tags.length > 0 && (
                  <div className="project-tags">
                    <h4>Skills:</h4>
                    {project.tags.map((tag, tagIdx) => (
                      <SkillCard key={tagIdx} skill={{ name: tag }} />
                    ))}
                  </div>
                )}
              </li>
            ))
          ) : (
            <li>No projects found.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
