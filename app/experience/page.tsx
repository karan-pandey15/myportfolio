import Image from "next/image";

export default function Experience() {
  const services = [
    {
      experience: "Ruloans Distribution Services Private Limited",
      imgName: "ruloans",
      role: "MERN Stack Developer",
      description: [
        "Developed a Comprehensive Finance Website: Designed and implemented a finance website using React, Tailwind CSS, JavaScript, Next.js, Node.js, Express, and MongoDB, enabling users to apply for loans and track their application status.",
        "Custom Dashboards for Various Roles: Created custom dashboards for customers, employees, team leaders, admins, and HR, ensuring tailored access and functionality based on user roles.",
        "Implemented JWT Authentication: Integrated JSON Web Token (JWT) authentication to secure user data and provide a seamless and secure login experience.",
        "Managed Large-Scale Data Handling: Successfully handled and managed over 20,000 data entries, ensuring efficient data processing and storage with MongoDB.",
        "Developed a Mobile Loan Application: Created the AddRupee loan application using React Native, available on the Play Store, ensuring data consistency between the website and the app for a cohesive user experience.",
      ],
    },
    {
      experience: "Codexcelerate Pvt. Ltd.",
      imgName: "codexcelerate",
      role: "Web Developer Intern",
      description: [
        "Collaborated on UI and backend web development, leading the creation of a cutting-edge website.",
        "Implemented API-based location search, improving site functionality and user experience.",
        "Managed backend functions, enhancing data flow and system reliability while reducing downtime.",
      ],
    },
    {
      experience: "DUCAT (The IT Training School) ",
      imgName: "ducat",
      role: "6 Month MERN Training Program",
      description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac massa placerat euismod.",
        "Sed feugiat nisi sit amet lectus vestibulum, ut maximus est vestibulum. In hac habitasse platea dictumst.",
        "Fusce auctor pretium lorem id ultricies. Integer tristique justo eu neque scelerisque, at fringilla elit rutrum.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 ">
      <h1 className="text-4xl font-bold text-center text-white relative pt-10  ">
        My Experience
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white-900"></div>
      </h1>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="max-w-4xl mx-auto p-8">
          {services.map((service, index) => (
            <div key={index} className="my-8">
              <h2 className="text-5xl md:text-xl font-bold text-gray-100 mt-10 mb-4">
                {service.experience}
              </h2>

              <h3 className="text-3xl font-semibold text-gray-300 mt-4 mb-2">
                {service.role}
              </h3>
              <div className="flex flex-col md:flex-row mt-4">
                <div className="md:order-2 md:ml-4">
                  {service.description.map((para, idx) => (
                    <p key={idx} className="text-lg text-gray-300 mb-4">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="md:order-1 md:mt-4">
                  <Image
                    src={`/img/${service.imgName}.png`}
                    alt={service.imgName}
                    width="128"
                    height="128"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
