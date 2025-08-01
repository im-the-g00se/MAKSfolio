import SkillItem from "../ui/skill-item";
import { HomeSkills } from "./home-skills";
import { HomeTitle } from "./home-title";

const skillList = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Figma",
    "Node.js",
    "Git",
    "Python",
    "PostgreSQL",
    "FastAPI",
    "Apache",
];

export function Home() {
    return (
        <div className="w-min h-screen flex flex-col mx-auto justify-center gap-10">
            <HomeTitle />
            <HomeSkills
                skills={skillList.map((skill, index) => (
                    <SkillItem size="md" key={index}>
                        {skill}
                    </SkillItem>
                ))}
            />
        </div>
    );
}
