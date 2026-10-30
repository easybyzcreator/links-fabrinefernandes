import React from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Play } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoPlayerModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({ video, onClose }) => {
  if (!video) return null;
  if (typeof document === 'undefined') return null;

  const getEmbedUrl = (url: string) => {
    try {
      if (url.includes('youtu.be/')) {
        const id = url.split('youtu.be/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('youtube.com/watch')) {
        const urlParams = new URLSearchParams(url.split('?')[1]);
        const id = urlParams.get('v');
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('youtube.com/live/')) {
        const id = url.split('youtube.com/live/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('youtube.com/shorts/')) {
        const id = url.split('youtube.com/shorts/')[1]?.split('?')[0];
        return `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
      }
      if (url.includes('instagram.com/reel') || url.includes('instagram.com/p/')) {
        return `${url.split('?')[0]}embed`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const embedSrc = getEmbedUrl(video.videoUrl);
  const isEmbeddable = embedSrc.includes('youtube') || embedSrc.includes('instagram') || embedSrc.includes('embed');

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl overflow-hidden shadow-2xl relative flex flex-col max-h-[92vh] z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#E5DFD5] bg-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-bold text-[#8C6D33] uppercase tracking-wider">
              {video.tag || 'Vídeo em Destaque'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#6B7280] hover:text-[#1F2329] flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="w-full bg-black aspect-video relative flex items-center justify-center overflow-hidden">
          {isEmbeddable ? (
            <iframe
              src={embedSrc}
              title={video.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="p-6 text-center text-slate-200 flex flex-col items-center">
              <Play className="w-12 h-12 text-amber-400 mb-2" />
              <p className="text-sm font-medium mb-3">{video.title}</p>
              <a
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#C5A059] text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5"
              >
                <span>Assistir no App Original</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>

        {/* Description / Actions footer */}
        <div className="p-5 overflow-y-auto bg-white">
          <h3 className="text-base sm:text-lg font-bold text-[#1F2329] mb-1.5 font-display">
            {video.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#555B66] leading-relaxed mb-4">
            {video.description}
          </p>

          <div className="flex items-center justify-between pt-3 border-t border-[#E5DFD5] text-xs">
            <span className="text-[#6B7280]">Fabrine Fernandes • Neuropsicopedagogia</span>
            <a
              href={video.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8C6D33] hover:text-[#705523] font-bold flex items-center gap-1"
            >
              <span>Abrir link original</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
