import SkillItem from "../ui/skill-item";
import { HomeLayout } from "./home-layout";
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
        <HomeLayout
            title={
                <HomeTitle
                    line1={
                        <>привет, <wbr />я макс</>
                    }
                    line2={<>веб-разработчик</>}
                />
            }
            skills={skillList.map((skill, index) => (
                <SkillItem size="md" key={index}>
                    {skill}
                </SkillItem>
            ))}
        />
    );
}
