// Import necessary components and types

"use client";
import { useReducer, useState, useEffect } from "react";
import Image from "next/image";
import Socialmedia from "./components/Socialmedia";
import Connectform from "./components/Connectform";
import ChatBox from "./components/ChatBox";
import Experience from "./experience/page";
import ProjectsPage from "./projects/page";
import AboutPage from "./skills/page";
import { IoIosChatbubbles } from "react-icons/io";

type RoleObject = {
  role: string;
  index: number;
};

const messages = [
  "Bachelor in Computer Applications graduate (BCA) || MERN Stack Developer at Ruloans Distribution Services Private Limited || Passionate about ChatGpt",
  "Skills: HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB. Experience with backend technologies: Node.js, Express.js, php, MongoDB, Sql. Proficient in developing full-stack applications",
  "I am passionate about creating beautiful and functional designs using HTML, CSS, and JavaScript. Over the years, I have crafted numerous designs that are both visually appealing and user-friendly.",
];

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Fullstack Developer",
  "React-Native Developer",
];

const reducer = (state: RoleObject, action: { type: string }): RoleObject => {
  switch (action.type) {
    case "roleIncrement":
      return { ...state, role: roles[state.index] };
    case "indIncrement":
      return { ...state, index: state.index == 2 ? 0 : state.index + 1 };
  }
  return state;
};

export default function Page() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  
  const [state, dispatch] = useReducer(reducer, {
    role: "Frontend Developer",
    index: 1,
  });
  const [index, setIndex] = useState(0);
  const [showResume, setShowResume] = useState(false); // State to toggle resume visibility

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrevious = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: "roleIncrement" });
      dispatch({ type: "indIncrement" });
    }, 3000);

    return () => clearInterval(intervalID);
  }, [state]);

  const toggleResume = () => {
    setShowResume((prevShowResume) => !prevShowResume);
  };

  return (
    <>
      <div className="px-6 py-10 mx-auto md:w-9/12">
        <div className="pt-24 pb-20 grid grid-cols-1 justify-between gap-8 md:grid-cols-2 sm:pt-28">
          <div>
            <h1 className="text-7xl font-semibold">
              <span className="text-5xl flex gap-4 items-center">
                I{`'`} am
                <Image
                  src="/img/myself.png"
                  alt="skills"
                  width="64"
                  height="64"
                />
              </span>
              <span className=" block py-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 via-sky-300 to-teal-600 animate-pulse">
                Karan Pandey
              </span>
            </h1>
            <h3 className="text-2xl font-medium ">{state.role}</h3>
          </div>

          <div
            className="rounded-lg border-8 border-slate-900 bg-stone-900 relative"
            style={{ position: "relative" }}
          >
            <div className="flex gap-4 px-5 py-4 mb-4 bg-slate-900">
              <span className="w-4 h-4 rounded-full bg-red-500"></span>
              <span className="w-4 h-4 rounded-full bg-green-500"></span>
              <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
            </div>
            <div className="text-slider">
              <p className="px-5 pb-8 text-lg text-gray-300">
                {messages[index]}
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handlePrevious} style={{ fontSize: "25px" }}>
                  ⬅️
                </button>
                <button onClick={handleNext} style={{ fontSize: "25px" }}>
                  ➡️
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Experience />
      </div>

      <div>
        <ProjectsPage />
      </div>

      <div>
        <AboutPage />
      </div>

      {/* Connect to me section */}
      <div className="px-6 py-10 mx-auto md:w-9/12 ">
        <h2 className="pt-8 pb-12 underline text-5xl font-semibold text-center">
          Connect to Me
        </h2>
        <div className="grid grid-cols-1 gap-8 justify-between md:grid-cols-2">
          <div className="py-8 flex flex-col gap-4">
            <Socialmedia name={true} />
          </div>
          <div className="py-8 flex flex-col gap-4 md:items-center">
            <Connectform />
          </div>
        </div>
      </div>

      {/* Resume button
        <div className="text-center mt-8">
          <button
            onClick={toggleResume}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showResume ? "Close Resume" : "Open Resume"}
          </button>
        </div>

        {/* Render Resume if showResume is true 
        {showResume && <Resume />} */}

      <div className="relative">
        <button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg"
        >
          <IoIosChatbubbles />
        </button>
        {showChat && <ChatBox onClose={toggleChat} />}
      </div>
    </>
  );
}
