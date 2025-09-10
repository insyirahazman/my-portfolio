
import "../App.css";

function SkillCard({ skill }) {
    return (
        <div className="skill-card">
            {skill.name}
        </div>
    );
}

export default SkillCard;