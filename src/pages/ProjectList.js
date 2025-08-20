import React from "react";

function ProjectList({ title = "Projects", projects = [] }) {
  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {projects.length > 0 ? (
          projects.map((project, idx) => (
            <li key={idx}>{project}</li>
          ))
        ) : (
          <li>No projects found.</li>
        )}
      </ul>
    </div>
  );
}

export default ProjectList;
