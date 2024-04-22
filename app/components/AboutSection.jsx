"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Next.js</li>
        <li>Java</li>
        <li>Python</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Unity</li>
        <li>Android Studio</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Arts in Computer Science - University of Rochester, NY</li>
        <li>Master of Science in Computer Science - Northwestern University, IL</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-indigo-400" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h1 className="text-4xl font-extrabold font-['ui-serif'] text-pink-200 mb-4">About Me</h1>
          <p className="text-base lg:text-lg font-['Georgia'] text-justify">
            As a computer science student, I am deeply passionate about exploring the realms of technology and coding. With a fervent curiosity
           for innovation and problem-solving, I have honed my skills in various programming languages such as Python, Java, and C++. 
           My proficiency extends to database management systems, web development, and software engineering, where I have demonstrated my 
           ability to develop robust and scalable solutions. Beyond the world of computers, I find joy and inspiration in the art of contemporary 
           dance and ballet. The fluidity of movement and expression in contemporary dance resonates with me deeply, while the grace and precision 
           of ballet captivate my imagination. These art forms not only provide a creative outlet but also instill discipline and perseverance,
            qualities that I bring to my academic and professional pursuits.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;