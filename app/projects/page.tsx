import Image from "next/image";
import {  projects } from "./data";


export default function ProjectsPage() {
    return (
        <>
            <div className="w-5/6 my-1 mx-auto md:w-1/2">
                <h2 className="pt-10 text-4xl font-bold text-white-900 text-center ">My Projects</h2>
                <div className="py-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {projects.map((project, i) => (
                        <div key={i} className="border border-slate-900 rounded-lg overflow-hidden">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <div style={{backgroundColor:"white"}} className={`w-full h-48 flex justify-center items-center`}>
                                    <Image src={`/img/${project.img}.png`} alt="skills" width="256" height="256" />
                                </div>
                            </a>
                            <div className="py-4 px-2 bg-slate-900">
                                <h3 className="text-xl font-semibold text-gray-200">
                                    {project.name}
                                </h3>
                                <p className="py-2 text-gray-300">
                                    {project.techstack.map((tech, i) => (
                                        <span key={i}>{tech}, </span>
                                    ))}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <a href="#" target="_blank" className="text-blue-500" rel="noopener noreferrer">
                                        Project Details
                                    </a>
                                    <a href={project.url} target="_blank" className="text-red-500" rel="noopener noreferrer">
                                        <Image src={`/img/github.png`} alt="github" width="32" height="32" />
                                    </a>
                                    <a href={project.link} target="_blank" className="text-blue-500" rel="noopener noreferrer">
                                        Live Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hidden">
                <div className="bg-[url('/img/bgamazon.png')]"></div>
                <div className="bg-[url('/img/bghackathon.png')]"></div>
            </div>
        </>
    );
}
