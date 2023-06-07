import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20"></p>

        <br />

        <p className="text-xl">
          I am a highly skilled and experienced full stack developer with a
          passion for creating innovative and efficient solutions. With a strong
          background in web development, I possess expertise in both front-end
          and back-end technologies, including HTML, CSS, JavaScript, Reactjs,
          Nextjs , Nodejs , Expressjs , Nestjs and databases. From
          conceptualization to deployment, I excel in handling the entire
          development lifecycle. I am experienced in working with frameworks
          such as React, Angular, Django, and Node.js. My attention to detail
          ensures that my code is clean, scalable, and maintainable.
        </p>
        <p className="text-xl">
          I am a self-motivated professional who takes ownership of projects and
          delivers results. Continuously staying updated with the latest
          industry trends and technologies, I strive to deliver cutting-edge
          solutions. With strong communication skills and the ability to work in
          fast-paced environments, I am adept at collaborating with
          cross-functional teams. I am passionate about continuous learning and
          enjoy exploring new technologies and frameworks to further enhance my
          skills.
        </p>
      </div>
    </div>
  );
};

export default About;
