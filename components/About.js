import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Users } from "lucide-react";
import MemberCard from "/components/MemberCard";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const members = [
    {
      name: "Professor Try Thy",
      role: "Professor",
      bio: "Professor Try Thy is a distinguished professor with a wealth of knowledge in healthcare and technology. He has been instrumental in advancing research and innovation in the field.",
      isMain: true,
    },
    {
      name: "Vichea",
      role: "Project Manager",
      bio: "Vichea brings 5 years of experience in healthcare project management, specializing in integrating innovative technologies into traditional healthcare systems.",
    },
    {
      name: "Rindy",
      role: "Lead Developer",
      bio: "With a strong background in full-stack development, Rindy leads our technical team in creating robust and scalable healthcare solutions.",
    },
    {
      name: "Smey",
      role: "UX/UI Designer",
      bio: "Smey expertise in user-centered design ensures our solutions are not only functional but also intuitive and accessible to all users.",
    },
    {
      name: "Reach",
      role: "Data Scientist",
      bio: "Reach specializes in healthcare analytics, using machine learning to derive actionable insights from complex medical data.",
    },
    {
      name: "Chungpat",
      role: "Security Specialist",
      bio: "With a focus on healthcare data protection, Chungpat ensures our systems meet the highest standards of security and compliance.",
    },
    {
      name: "Keteyos",
      role: "Healthcare Consultant",
      bio: "Keteyos background in healthcare administration provides valuable insights, ensuring our solutions address real-world healthcare challenges.",
    },
  ];

  return (
    <div className="bg-gray-100 py-20 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center" data-aos="fade-up">
          <Users className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Meet the brilliant minds behind Solution Group, driving innovation
            in healthcare technology.
          </p>
        </div>
        <div className="mt-10" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-3xl font-bold text-black text-center mb-8">
            Solution Group
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map((member, index) => (
              <MemberCard
                key={index}
                {...member}
                data-aos="fade-up"
                data-aos-delay={100 * index}
              />
            ))}
          </div>
        </div>
        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <p className="text-xl text-gray-600">
            Together, we&apos;re committed to revolutionizing healthcare through
            innovative solutions and dedication to excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
