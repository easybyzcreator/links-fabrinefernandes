import React, { useState } from 'react';
import { Play, Pause, RotateCcw, RotateCw, Plus, Check, ExternalLink } from 'lucide-react';
import { SPOTIFY_EPISODE } from '../data/contentData';

export const SpotifyCard: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(35);
  const [saved, setSaved] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSkip = (seconds: number) => {
    setProgress((prev) => Math.min(100, Math.max(0, prev + (seconds > 0 ? 8 : -8))));
  };

  return (
    <div className="w-full bg-white border border-[#E5DFD5] rounded-3xl p-4.5 sm:p-5 shadow-xs relative overflow-hidden group mb-5">
      {/* Top Spotify Header */}
      <div className="flex items-center justify-between gap-3 mb-3.5 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full bg-[#1DB954]/15 border border-[#1DB954]/30 text-[#1DB954] flex items-center justify-center">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </div>
          <div>
            <h4 className="text-xs font-bold text-[#1F2329]">Spotify Podcast</h4>
            <p className="text-[11px] text-[#6B7280]">Fabrine Fernandes | Neuropsicopedagogia</p>
          </div>
        </div>

        <a
          href={SPOTIFY_EPISODE.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#1DB954] hover:text-[#169c46] font-semibold flex items-center gap-1 bg-[#1DB954]/10 hover:bg-[#1DB954]/20 px-2.5 py-1 rounded-full border border-[#1DB954]/25 transition-colors"
        >
          <span>Ouvir</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Podcast Audio Player Card */}
      <div className="bg-gradient-to-br from-[#7a353c] to-[#4c1e23] rounded-2xl p-4 text-white shadow-md relative z-10">
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md shrink-0 border border-white/20">
            <img 
              src={SPOTIFY_EPISODE.coverUrl} 
              alt="Capa Podcast" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[10px] uppercase font-bold tracking-wider text-rose-200 block">
              {SPOTIFY_EPISODE.releaseDate}
            </span>
            <h5 className="text-xs sm:text-sm font-bold text-white leading-tight line-clamp-2 mt-0.5">
              {SPOTIFY_EPISODE.title}
            </h5>
            <p className="text-[11px] text-rose-200/80 truncate mt-0.5">
              {SPOTIFY_EPISODE.show}
            </p>
          </div>
        </div>

        {/* Save button */}
        <div className="flex items-center justify-between mb-3 text-xs">
          <button 
            onClick={() => setSaved(!saved)}
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors"
          >
            {saved ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Plus className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{saved ? 'Salvo na sua biblioteca' : 'Salvar no Spotify'}</span>
          </button>
          <span className="text-[11px] text-white/70">{SPOTIFY_EPISODE.duration}</span>
        </div>

        {/* Audio Progress Bar */}
        <div className="w-full bg-white/25 rounded-full h-1.5 mb-3 cursor-pointer overflow-hidden relative">
          <div 
            className="bg-white h-full rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Player Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleSkip(-15)}
              className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              title="Voltar 15s"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <span className="text-[10px] text-white/70">15s</span>
          </div>

          {/* Big Play/Pause Button */}
          <button 
            onClick={togglePlay}
            className="w-10 h-10 rounded-full bg-white hover:bg-slate-100 text-[#4c1e23] flex items-center justify-center shadow-lg transition-transform active:scale-95"
            title={isPlaying ? "Pausar" : "Reproduzir"}
          >
            {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="flex items-center gap-3">
            <span className="text-[10px] text-white/70">15s</span>
            <button 
              onClick={() => handleSkip(15)}
              className="p-1.5 text-white/80 hover:text-white rounded-full hover:bg-white/10 transition-colors"
              title="Avançar 15s"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
