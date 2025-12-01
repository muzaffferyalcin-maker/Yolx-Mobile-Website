"use client";

import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
        <HeroContent />
      </div>
    </section>
  );
};

export default Hero;
