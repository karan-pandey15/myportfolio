// components/ChatBox.js
"use client";
import { useState } from "react";

const ChatBox = ({ onClose }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! How can I help you?",
      options: ["Projects", "About Karan Pandey", "Experience"],
    },
  ]);
  const [input, setInput] = useState("");

  const handleOptionClick = (option) => {
    const newMessages = [...messages, { sender: "user", text: option }];
    setMessages(newMessages);

    setTimeout(() => {
      const response = getResponse(option);
      setMessages([
        ...newMessages,
        { sender: "bot", text: response.text, options: response.options },
      ]);
    }, 500);
  };

  const handleSend = () => {
    if (input.trim()) {
      const newMessages = [...messages, { sender: "user", text: input }];
      setMessages(newMessages);
      setInput("");

      setTimeout(() => {
        const response = getResponse(input);
        setMessages([
          ...newMessages,
          { sender: "bot", text: response.text, options: response.options },
        ]);
      }, 500);
    }
  };

  const getResponse = (question) => {
    switch (question.toLowerCase()) {
      case "projects":
        return {
          text: `Projects:
1. Keeva.in - Furniture Website: Developed using Next.js, featuring categorized product pages, search functionality, and seamless order placement. [GitHub](https://github.com/karan-pandey15/keeva) | [Live Link](https://keeva.in)
2. AddRupee - Mobile Loan Application: Created using React Native, available on the Play Store, ensuring data consistency between the website and the app for a cohesive user experience. [Play Store Link](https://play.google.com/store/apps/details?id=com.addrupees.demoappthree)
3. Ruloans - Comprehensive Finance Website: Designed and implemented a finance website using React, Tailwind CSS, JavaScript, Next.js, Node.js, Express, and MongoDB.`,
          options: ["More about Projects", "Back"],
        };
      case "about karan pandey":
        return {
          text: `Karan Pandey
MERN Stack Developer

pandeykaran1515@gmail.com

LinkedIn: https://www.linkedin.com/in/karanpandey1115/

GitHub: https://github.com/karan-pandey15

Enable Dark Mode`,
          options: ["More about Karan", "Back"],
        };
      case "experience":
        return {
          text: `Experience:
1. Ruloans Distribution Services Private Limited (September 2023 - Present): Developed a comprehensive finance website, custom dashboards for various roles, implemented JWT authentication, managed large-scale data handling, and developed a mobile loan application. [Live Link](https://addrupee.com)
2. Codexcelerate Pvt. Ltd. (July 2023 - September 2023): Three-month Web Development Internship. Collaborated on UI and backend web development, implemented API-based location search, managed backend functions. [GitHub](https://github.com/codexcelerate33/uscodezip-website)`,
          options: ["More about Experience", "Back"],
        };
      case "more about experience":
        return {
          text: `Ruloans Distribution Services Private Limited
September 2023 - Present

Noida Sec-15

Developed a Comprehensive Finance Website: Designed and implemented a finance website using React, Tailwind CSS, JavaScript, Next.js, Node.js, Express, and MongoDB, enabling users to apply for loans and track their application status.
Custom Dashboards for Various Roles: Created custom dashboards for customers, employees, team leaders, admins, and HR, ensuring tailored access and functionality based on user roles.
Implemented JWT Authentication: Integrated JSON Web Token (JWT) authentication to secure user data and provide a seamless and secure login experience.
Managed Large-Scale Data Handling: Successfully handled and managed over 20,000 data entries, ensuring efficient data processing and storage with MongoDB.
Developed a Mobile Loan Application: Created the AddRupee loan application using React Native, available on the Play Store, ensuring data consistency between the website and the app for a cohesive user experience.
Live Link: https://addrupee.com

Play Store Link: https://play.google.com/store/apps/details?id=com.addrupees.demoappthree

Codexcelerate Pvt. Ltd.
July 2023 - September 2023

Noida

Three-month Web Development Internship, Noida
Collaborated on UI and backend web development, leading the creation of a cutting-edge website.
Implemented API-based location search, improving site functionality and user experience.
Managed backend functions, enhancing data flow and system reliability while reducing downtime.
GitHub: https://github.com/codexcelerate33/uscodezip-website`,
          options: ["Back"],
        };
      case "more about karan":
        return {
          text: `Karan Pandey
MERN Stack Developer

Skills:
1. Programming Languages: 
   - Frontend: HTML5, CSS3, JavaScript
   - Backend: Node.js, PHP, Express.js
2. Databases: MongoDB, Mongoose
3. Skills: Problem Solving, Debugging, DSA, Collaboration and Communication.
4. Libraries, Frameworks & Version Control: 
   - REACT JS, NEXT JS, Bootstrap, Tailwind CSS
   - Git, GitHub`,
          options: ["Back"],
        };
      case "back":
        return {
          text: "Hi! How can I help you?",
          options: ["Projects", "About Karan Pandey", "Experience"],
        };
      default:
        return {
          text: "I'm sorry, I don't have information about that.",
          options: ["Back"],
        };
    }
  };

  return (
    <div className="fixed bottom-20 right-4 bg-gray-800 text-white rounded-lg w-11/12 max-w-sm h-3/5 shadow-lg flex flex-col">
      <div className="flex justify-between items-center bg-gray-900 p-4 rounded-t-lg">
        <h2 className="text-lg font-bold">Chat with Karan</h2>
        <button onClick={onClose} className="text-white">
          &times;
        </button>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`my-2 ${
              msg.sender === "user" ? "text-right" : "text-left"
            }`}
          >
            <div
              className={`inline-block p-2 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500" : "bg-gray-700"
              }`}
            >
              {msg.text}
            </div>
            {msg.options &&
              msg.options.map((option, j) => (
                <button
                  key={j}
                  onClick={() => handleOptionClick(option)}
                  className="mt-2 w-full text-blue-500 underline"
                >
                  {option}
                </button>
              ))}
          </div>
        ))}
      </div>
      <div className="p-4 bg-gray-900 rounded-b-lg">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-2 rounded-lg text-black"
          placeholder="Type your question..."
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="mt-2 w-full bg-blue-500 p-2 rounded-lg text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
