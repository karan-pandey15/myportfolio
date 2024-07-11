"use client"
import { useState } from "react";
import Image from "next/image";

// Define the type for category
type CategoryType = 'frontend' | 'backend' | 'databases' | 'skills' | 'libraries' | null;

export default function AboutPage() {
    const skills = [
        // Frontend
        { skillName: "HTML5", imgUrl: "reactjs", category: "frontend" },
        { skillName: "CSS3", imgUrl: "reactjs", category: "frontend" },
        { skillName: "JavaScript", imgUrl: "reactjs", category: "frontend" },

        // Backend
        { skillName: "Node.js", imgUrl: "nodejs", category: "backend" },
        { skillName: "PHP", imgUrl: "reactjs", category: "backend" },
        { skillName: "Express.js", imgUrl: "reactjs", category: "backend" },

        // Databases
        { skillName: "MongoDB", imgUrl: "mongodb", category: "databases" },
        { skillName: "Mongoose", imgUrl: "reactjs", category: "databases" },

        // Skills
        { skillName: "Problem Solving", imgUrl: "reactjs", category: "skills" },
        { skillName: "Debugging", imgUrl: "reactjs", category: "skills" },
        { skillName: "DSA", imgUrl: "reactjs", category: "skills" },

        // Libraries, Frameworks & Version Control
        { skillName: "React JS", imgUrl: "reactjs", category: "libraries" },
        { skillName: "Next JS", imgUrl: "nextjs", category: "libraries" },
        { skillName: "Bootstrap", imgUrl: "reactjs", category: "libraries" },
        { skillName: "Tailwind CSS", imgUrl: "tailwindcss", category: "libraries" },
        { skillName: "Git", imgUrl: "reactjs", category: "libraries" },
        { skillName: "GitHub", imgUrl: "github", category: "libraries" },
    ];

    const [category, setCategory] = useState<CategoryType>(null);

    const filteredSkills = skills.filter(skill => category ? skill.category === category : true);

    return (
        <>
            <div className="w-5/6 my-16 mx-auto md:w-1/2">
                <h2 className="py-8 font-bold text-3xl text-gray-100 flex items-center gap-4">
                    My Skills
                    <Image src="/img/skills.png" alt="skills" width="50" height="50" />
                </h2>
                <div className="py-6 flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => setCategory("frontend")}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Frontend
                    </button>
                    <button
                        onClick={() => setCategory("backend")}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    >
                        Backend
                    </button>
                    <button
                        onClick={() => setCategory("databases")}
                        className="px-4 py-2 bg-yellow-500 text-white rounded-lg"
                    >
                        Databases
                    </button>
                    <button
                        onClick={() => setCategory("skills")}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                        Skills
                    </button>
                    <button
                        onClick={() => setCategory("libraries")}
                        className="px-4 py-2 bg-purple-500 text-white rounded-lg"
                    >
                        Libraries & Tools
                    </button>
                </div>
                <div className="py-6 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                    {filteredSkills.map((skill, i) => (
                        <div
                            className="px-2 py-4 flex flex-col justify-center items-center bg-red-200 rounded-xl"
                            key={i}
                        >
                            <Image
                                src={`/img/${skill.imgUrl}.png`}
                                alt={skill.skillName}
                                width="64"
                                height="64"
                            />
                            <p className="pt-2 text-lg font-medium text-gray-800">
                                {skill.skillName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
