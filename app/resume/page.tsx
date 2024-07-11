"use client";
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import LinkItem from '../components/LinkItem';
import { FaToggleOff } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";

const Resume = () => {
  const degrees = [
    {
      title: "Bachelor of Computer Application",
      institution: "Allahabad State University, Prayagraj",
      percentage: "70%",
      year: "2020-2023",
    },
    {
      title: "MERN Stack",
      institution: "Ducat The IT Training School, Noida",
      year: "2023",
    },
  ];

  const experiences = [
    {
      title: "Ruloans Distribution Services Private Limited",
      duration: "September 2023 - Present",
      location: "Noida Sec-15",
      description: [
        "Developed a Comprehensive Finance Website: Designed and implemented a finance website using React, Tailwind CSS, JavaScript, Next.js, Node.js, Express, and MongoDB, enabling users to apply for loans and track their application status.",
        "Custom Dashboards for Various Roles: Created custom dashboards for customers, employees, team leaders, admins, and HR, ensuring tailored access and functionality based on user roles.",
        "Implemented JWT Authentication: Integrated JSON Web Token (JWT) authentication to secure user data and provide a seamless and secure login experience.",
        "Managed Large-Scale Data Handling: Successfully handled and managed over 20,000 data entries, ensuring efficient data processing and storage with MongoDB.",
        "Developed a Mobile Loan Application: Created the AddRupee loan application using React Native, available on the Play Store, ensuring data consistency between the website and the app for a cohesive user experience.",
      ],
      links: [
        {
          label: "Live Link",
          url: "https://addrupee.com",
        },
        {
          label: "Play Store Link",
          url: "https://play.google.com/store/apps/details?id=com.addrupees.demoappthree",
        },
      ],
    },
    {
      title: "Codexcelerate Pvt. Ltd.",
      duration: "July 2023 - September 2023",
      location: "Noida",
      description: [
        "Three-month Web Development Internship, Noida",
        "Collaborated on UI and backend web development, leading the creation of a cutting-edge website.",
        "Implemented API-based location search, improving site functionality and user experience.",
        "Managed backend functions, enhancing data flow and system reliability while reducing downtime.",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/codexcelerate33/uscodezip-website",
        },
      ],
    },
  ];

  const technicalSkills = [
    "Programming Languages: Frontend: HTML5, CSS3, JavaScript | Backend: Node.js, PHP, Express.js",
    "Databases: MongoDB, Mongoose",
    "Skills: Problem Solving, Debugging, DSA, Collaboration and Communication.",
    "Libraries, Frameworks & Version Control: REACT JS, NEXT JS, Bootstrap, Tailwind CSS || Git, GitHub",
  ];

  const projects = [
    {
      title: "Keeva.in",
      duration: "Sept. 2023",
      description: [
        "Furniture Website: Developed using Next.js, featuring categorized product pages, search functionality, and seamless order placement.",
        "Admin and User Management: Implemented backend capabilities for admin management, user login, and password recovery.",
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/karan-pandey15/keeva",
        },
        {
          label: "Live Link",
          url: "https://keeva.in",
        },
      ],
    },
  ];

  const resumeRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Function to handle download PDF
  const handleDownloadPDF = async () => {
    try {
      const element = resumeRef.current;

      if (!element) {
        throw new Error('Unable to find resume content');
      }

      const canvas = await html2canvas(element);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
      pdf.save('Karan_Pandey_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div style={{marginTop:80,  backgroundColor: isDarkMode ? '#1a202c' : '#ffffff', color: isDarkMode ? '#ffffff' : '#000000'  }}>
      <Head>
        <title>Karan Pandey&apos;s Resume</title>
        <meta name="description" content="Karan Pandey's Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto py-8 px-4" ref={resumeRef}>
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold">Karan Pandey</h1>
          <p className="text-lg text-gray-600">MERN Stack Developer</p>
          <p className="text-lg text-gray-600">pandeykaran1515@gmail.com</p>
          <p className="text-lg text-gray-600">+91 9569125048</p>
          <LinkItem label="LinkedIn" url="https://www.linkedin.com/in/karanpandey1115/" />
          <LinkItem label="GitHub" url="https://github.com/karan-pandey15" />
        </header>

        <div className="fixed top-24 right-4">
            {isDarkMode ? (
                <FaToggleOn
                    className="text-3xl cursor-pointer text-white bg-blue-500 rounded-full p-2"
                    onClick={toggleDarkMode}
                />
            ) : (
                <FaToggleOff
                    className="text-3xl cursor-pointer text-white bg-blue-500 rounded-full p-2"
                    onClick={toggleDarkMode}
                />
            )}
        </div>
        

        {/* Degrees/Certificates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Degree/Certificate</h2>
          {degrees.map((degree, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{degree.title}</h3>
              {degree.institution && <p>{degree.institution}</p>}
              {degree.percentage && <p>{degree.percentage}</p>}
              {degree.year && <p>{degree.year}</p>}
            </div>
          ))}
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{experience.title}</h3>
              {experience.duration && <p>{experience.duration}</p>}
              {experience.location && <p>{experience.location}</p>}
              {experience.description && (
                <ul className="list-disc list-inside">
                  {experience.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
              {experience.links && (
                <div className="mt-2">
                  {experience.links.map((link, idx) => (
                    <LinkItem key={idx} label={link.label} url={link.url} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          {technicalSkills.map((skill, index) => (
            <p key={index} className="mb-2">
              {skill}
            </p>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-medium">{project.title}</h3>
              {project.duration && <p>{project.duration}</p>}
              {project.description && (
                <ul className="list-disc list-inside">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
              {project.links && (
                <div className="mt-2">
                  {project.links.map((link, idx) => (
                    <LinkItem key={idx} label={link.label} url={link.url} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Download PDF Button */}
        <div className="text-center mt-8">
          <button
            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
            onClick={handleDownloadPDF}
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
