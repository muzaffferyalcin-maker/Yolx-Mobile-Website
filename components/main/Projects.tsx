import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-500 py-20 text-center">
        Neden Yolx Mobile'ı Tercih Etmelisiniz?
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <ProjectCard
          src="/trust-company.jpg"
          title="Güvenilir"
          description={
            <>
              <p>5 yıldan fazla Araç Takip teknoloji deneyimi</p>
              <p>Profesyonel hizmet</p>
              <p>Güvenilir iş ortaklığı</p>
              <p>Yüksek müşteri memnuniyeti</p>
            </>
          }
        />
        <ProjectCard
          src="/inovative-company.jpg"
          title="Yenilikçi"
          description={
            <>
              <p>
                Maksimum güvenilirlik için derin öğrenme algoritmaları ve yapay
                zekanın etkin kullanımı
              </p>
              <p>Sürekli ARGE</p>
              <p>Güvenilir iş ortaklığı</p>
            </>
          }
        />
        <ProjectCard
          src="/rich-product.jpg"
          title="Ürün Çeşitliliği"
          description={
            <>
              <p>Kaliteli ürünler</p>
              <p>Profesyonel hizmet</p>
              <p>Güvenilir iş ortaklığı</p>
            </>
          }
        />
      </div>
    </div>
  );
};

export default Projects;
