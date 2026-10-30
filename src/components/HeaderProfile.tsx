import React from 'react';
import { FABRINE_PROFILE } from '../data/contentData';
import { 
  Globe, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Info,
  Sparkles
} from 'lucide-react';

interface HeaderProfileProps {
  onOpenAbout: () => void;
}

export const HeaderProfile: React.FC<HeaderProfileProps> = ({ onOpenAbout }) => {
  return (
    <header className="w-full flex flex-col items-center text-center pt-2 pb-5 px-3">
      {/* Top action pill */}
      <div className="w-full flex justify-between items-center mb-5 px-1">
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-[#E5DFD5] text-[11px] font-semibold text-[#8C6D33] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Atendimento Clínico
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAbout}
            aria-label="Conhecer Fabrine"
            className="flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 border border-[#E5DFD5] text-xs text-[#424750] font-medium shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            <Info className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Sobre Mim</span>
          </button>
        </div>
      </div>

      {/* Avatar Container with Golden Ring (+40% size) */}
      <div className="relative mb-8 sm:mb-9 group cursor-pointer" onClick={onOpenAbout}>
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#DFBA6B] via-[#FA4E74] to-[#68C9EA] opacity-60 blur-xs group-hover:opacity-100 transition duration-500"></div>
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 rounded-full p-1.5 bg-white shadow-xl">
          <img
            src={FABRINE_PROFILE.avatarUrl}
            alt={FABRINE_PROFILE.name}
            className="w-full h-full rounded-full object-cover object-top border-2 border-[#C5A059]/80"
            loading="eager"
          />
        </div>
        {/* Logo badge in place of old award icon */}
        <div 
          className="absolute bottom-1 right-1.5 sm:bottom-1.5 sm:right-2 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white p-1.5 shadow-lg border-2 border-[#C5A059] flex items-center justify-center transition-transform group-hover:scale-110" 
          title="Fabrine Fernandes"
        >
          <img 
            src={FABRINE_PROFILE.logoUrl} 
            alt="Logo Fabrine Fernandes" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Brand & Name */}
      <div className="flex flex-col items-center gap-1 mb-2">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1F2329] font-display">
            {FABRINE_PROFILE.name}
          </h1>
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#C5A059]/15 text-[#8C6D33] border border-[#C5A059]/30">
            {FABRINE_PROFILE.registration}
          </span>
        </div>

        <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[#8C6D33] flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          {FABRINE_PROFILE.title}
        </p>
      </div>

      {/* Tagline / Headline */}
      <p className="text-xs sm:text-sm text-[#555B66] max-w-md leading-relaxed mb-4 px-2">
        {FABRINE_PROFILE.tagline}
      </p>

      {/* Social Media Quick Bar (Clean circular icons as in Natural Tones mockup) */}
      <div className="flex items-center justify-center gap-2.5 sm:gap-3 flex-wrap">
        <a
          href={FABRINE_PROFILE.socials.website}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white hover:bg-[#C5A059] text-[#555B66] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#E5DFD5] shadow-xs active:scale-95"
          title="Site Oficial"
        >
          <Globe className="w-4 h-4" />
        </a>

        <a
          href={FABRINE_PROFILE.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white hover:bg-[#FA4E74] text-[#555B66] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#E5DFD5] shadow-xs active:scale-95"
          title="Instagram"
        >
          <Instagram className="w-4 h-4" />
        </a>

        <a
          href={FABRINE_PROFILE.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white hover:bg-[#56C45F] text-[#555B66] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#E5DFD5] shadow-xs active:scale-95"
          title="WhatsApp Direto"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        <a
          href={FABRINE_PROFILE.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white hover:bg-[#68C9EA] text-[#555B66] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#E5DFD5] shadow-xs active:scale-95"
          title="Facebook"
        >
          <Facebook className="w-4 h-4" />
        </a>

        <a
          href={FABRINE_PROFILE.socials.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white hover:bg-[#1DB954] text-[#555B66] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#E5DFD5] shadow-xs active:scale-95"
          title="Spotify Podcast"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </a>
      </div>
    </header>
  );
};
