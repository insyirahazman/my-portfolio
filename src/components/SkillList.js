import SkillCard from "./SkillCard";

function SkillList({ skills = [] }) {
    return (
        <div className="skill-list">
            {skills.map(skill => (
                <SkillCard key={skill} skill={{ name: skill }} />
            ))}
        </div>
    );
}

export default SkillList;
