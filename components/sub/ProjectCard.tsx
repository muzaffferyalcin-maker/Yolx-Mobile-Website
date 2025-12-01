import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: React.ReactNode;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] max-w-xs mx-auto">
      <Image
        src={src}
        alt={title}
        width={500}
        height={500}
        className="w-full object-contain"
      />

      <div className="relative p-4 flex flex-col justify-center items-center ">
        <h1 className="text-2xl font-semibold text-white text-center">
          {title}
        </h1>
        <p className="mt-4 text-gray-300 text-xl text-center">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
