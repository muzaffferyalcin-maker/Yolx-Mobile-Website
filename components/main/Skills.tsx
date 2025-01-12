"use client";

import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import Image from "next/image";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      <section
        id="skills"
        className="flex flex-col md:flex-row items-center justify-center gap-8 h-full relative overflow-hidden p-6"
        style={{ transform: "scale(0.9)" }}
      >
        <div className="flex flex-1 items-center justify-center">
          <Image
            src="/car-rental.jpg"
            alt="Skills Illustration"
            width={500} // Görüntü genişliği
            height={500} // Görüntü yüksekliği
            className="w-full max-w-md h-auto object-contain rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-1 flex-col items-start justify-center text-center md:text-start gap-5">
          <h1 className="text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
            Trafik Kurallarına Uygunluk &amp; Sürüş Güvenliği
          </h1>
          <p className="text-[20px] text-white font-light mt-[10px] text-center md:text-start mb-[15px]">
            Araçların limit aşımlarının, ani fren ve manevralarının anlık olarak
            bildirilmesi sayesinde kaza oranlarının önemli ölçüde azalması
            sağlanır. Olası kaza veya acil durumlarda araçlardan alınan alarm
            mesajları sayesinde olaya en kısa sürede müdahale edilir.
          </p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-6 mx-auto md:mx-0"
          >
            Daha fazla bilgi
          </motion.a>
        </div>
      </section>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
