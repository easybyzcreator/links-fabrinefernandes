import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-6 pb-10 flex flex-col items-center justify-center text-center">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#E0D8CC] to-transparent mb-6"></div>

      {/* Credit as specified in Image 8 */}
      <a
        href="https://www.easybyzcreator.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col items-center justify-center gap-2 p-2.5 rounded-2xl hover:bg-black/5 transition-all duration-300 transform active:scale-95"
        title="Desenvolvido por Easy Byz Creator"
      >
        <span className="text-[10px] font-bold tracking-[0.25em] text-[#8C8476] group-hover:text-[#4A443A] uppercase transition-colors">
          DESENVOLVIDO POR
        </span>
        
        <div className="w-32 sm:w-36 py-1 flex items-center justify-center">
          <img
            src="https://i.ibb.co/XN3qK0f/logo-ebc-pdf.png"
            alt="Easy Byz Creator"
            className="w-full h-auto object-contain filter group-hover:opacity-100 opacity-90 transition-all"
          />
        </div>
      </a>

      <div className="mt-3 text-[10px] text-[#A0988A]">
        © {new Date().getFullYear()} Fabrine Fernandes • Todos os direitos reservados
      </div>
    </footer>
  );
};
