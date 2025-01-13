"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center  m-auto md:text-start text-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex justify-center sm:justify-start items-center sm:ml-0 ml-4"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px] text-center sm:text-left">
            Araç & Nesne Takip Sistemi
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            YolX Mobile
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500">
              {" "}
              filo yönetimi{" "}
            </span>
            markası
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Yolx Mobile&apos;in yapay zeka destekli teknolojisi ve tak-çalıştır
          çözüm portföyüyle endüstriyel operasyonlarınızı dijitalleştirin. İş
          kazalarını önleyin ve verimliliği artırın.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0 px-6"
        >
          Ürünlerimizi Keşfet!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full  justify-center items-center hidden  md:flex"
      >
        <Image
          src="/NavLogo1.png"
          alt="work icons"
          height={650}
          width={650}
          className="hidden md:block"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
