"use client";

export default function About() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col items-center justify-center pt-20 px-4 md:px-20 ">
          <h1 className="text-[40px] font-bold text-white mb-4 ">Hakkımızda</h1>
          <p className="text-gray-300 text-center max-w-2xl">
            Araç takip sistemleri ve filo yönetimi çözümlerimiz ile işletmenizi
            daha verimli hale getirin
          </p>
        </div>
      </div>
    </main>
  );
}
