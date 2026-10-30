import React from 'react';
import { Play, Video, ChevronRight, Youtube } from 'lucide-react';
import { FEATURED_VIDEOS } from '../data/contentData';
import { VideoItem } from '../types';

interface VideoGalleryProps {
  onPlayVideo: (video: VideoItem) => void;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ onPlayVideo }) => {
  return (
    <div className="w-full mb-6">
      {/* Section Header */}
      <div className="flex items-center justify-between px-1 mb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
          <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F2329] font-display">
            Vídeos & Aulas em Destaque
          </h2>
        </div>

        <a
          href="https://www.youtube.com/@psicopedagoga.fabrine9631"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#8C6D33] hover:text-[#705523] font-semibold flex items-center gap-1.5 bg-[#C5A059]/15 hover:bg-[#C5A059]/25 px-3 py-1 rounded-full border border-[#C5A059]/30 transition-colors"
        >
          <Youtube className="w-3.5 h-3.5 text-red-600" />
          <span>Ver Canal Oficial</span>
        </a>
      </div>

      {/* Video Carousel / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {FEATURED_VIDEOS.map((vid) => (
          <div
            key={vid.id}
            onClick={() => onPlayVideo(vid)}
            className="bg-white hover:bg-[#FAF8F5] border border-[#E5DFD5] hover:border-[#C5A059]/50 rounded-2xl overflow-hidden shadow-xs hover:shadow-md cursor-pointer group transition-all duration-300 flex flex-col"
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
              <img
                src={vid.thumbnailUrl}
                alt={vid.title}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (vid.videoUrl.includes('youtu.be/')) {
                    const id = vid.videoUrl.split('youtu.be/')[1]?.split('?')[0];
                    if (id && target.src !== `https://img.youtube.com/vi/${id}/hqdefault.jpg`) {
                      target.src = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
                    }
                  }
                }}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Tag & Duration */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px]">
                {vid.tag && (
                  <span className="bg-black/75 backdrop-blur-xs text-amber-300 font-semibold px-2 py-0.5 rounded-md border border-white/10">
                    {vid.tag}
                  </span>
                )}
                {vid.duration && (
                  <span className="bg-black/75 backdrop-blur-xs text-white font-mono px-1.5 py-0.5 rounded">
                    {vid.duration}
                  </span>
                )}
              </div>
            </div>

            {/* Title & info */}
            <div className="p-3 flex-1 flex flex-col justify-between">
              <h3 className="text-xs font-bold text-[#1F2329] group-hover:text-[#8C6D33] transition-colors line-clamp-2 leading-tight">
                {vid.title}
              </h3>
              <div className="flex items-center justify-between text-[10px] text-[#6B7280] mt-2">
                <span>Assistir Aula</span>
                <ChevronRight className="w-3 h-3 text-[#C5A059] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

