import React, { useState } from 'react';
import { 
  FABRINE_PROFILE, 
  SERVICES_DATA, 
  FEATURED_VIDEOS 
} from './data/contentData';
import { ServiceCardItem, VideoItem } from './types';
import { HeaderProfile } from './components/HeaderProfile';
import { InteractiveQuizBanner } from './components/InteractiveQuizBanner';
import { ServiceCard } from './components/ServiceCard';
import { SpotifyCard } from './components/SpotifyCard';
import { WhatsAppCommunityCard } from './components/WhatsAppCommunityCard';
import { VideoGallery } from './components/VideoGallery';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ModalDetail } from './components/ModalDetail';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';
import { 
  Globe, 
  Instagram, 
  Facebook, 
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceCardItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [showAbout, setShowAbout] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-scroll or open service if chosen from quiz
  const handleSelectServiceById = (serviceId: string) => {
    const found = SERVICES_DATA.find(s => s.id === serviceId);
    if (found) {
      setSelectedService(found);
    }
  };

  const filteredServices = SERVICES_DATA.filter(service => {
    // If it's the whatsapp community, we render it in its dedicated card
    if (service.id === 'comunidade-whatsapp') return false;

    const matchesFilter = filterCategory === 'all' || service.category === filterCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#E5DFD5] sm:py-8 px-0 sm:px-4 flex justify-center text-[#2C3038] selection:bg-[#C5A059]/30 selection:text-[#1F2329]">
      {/* Mobile-centric Frame (Natural Tones - Warm Light Luxury Theme) */}
      <main className="w-full max-w-xl bg-[#FAF8F5] sm:rounded-[36px] min-h-screen sm:min-h-[auto] shadow-xl border-x sm:border border-[#DCD5C9] relative overflow-hidden flex flex-col px-4 sm:px-6 pt-5 pb-8">
        
        {/* Subtle Ambient Golden Gradients */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#DFBA6B]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-[#FA4E74]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 rounded-full bg-[#68C9EA]/10 blur-3xl pointer-events-none"></div>


        {/* Profile & Identity Section */}
        <div className="relative z-10">
          <HeaderProfile 
            onOpenAbout={() => setShowAbout(true)} 
          />
        </div>

        {/* Interactive Fast Diagnosis Banner */}
        <div className="relative z-10">
          <InteractiveQuizBanner onSelectService={handleSelectServiceById} />
        </div>

        {/* Main Services Section Title */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between px-1 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C5A059]"></span>
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1F2329] font-display">
                Soluções, Cursos & Atendimentos
              </h2>
            </div>
            
            <span className="text-[11px] text-[#8C6D33] font-bold">
              {filteredServices.length} opções
            </span>
          </div>

          {/* Filter Pills in 2 Lines */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 text-xs">
            <button
              onClick={() => setFilterCategory('all')}
              className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl font-bold text-center transition-all shadow-xs ${
                filterCategory === 'all'
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#1F2329] border border-[#E5DFD5] hover:bg-[#FAF8F5]'
              }`}
            >
              Todos os Serviços
            </button>

            <button
              onClick={() => setFilterCategory('atendimento')}
              className={`flex-1 min-w-[120px] py-2 px-3 rounded-xl font-bold text-center transition-all shadow-xs ${
                filterCategory === 'atendimento'
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#1F2329] border border-[#E5DFD5] hover:bg-[#FAF8F5]'
              }`}
            >
              Avaliação Clínica
            </button>

            <button
              onClick={() => setFilterCategory('mapa')}
              className={`flex-1 min-w-[140px] py-2 px-3 rounded-xl font-bold text-center transition-all shadow-xs ${
                filterCategory === 'mapa'
                  ? 'bg-[#16A34A] text-white shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#1F2329] border border-[#E5DFD5] hover:bg-[#FAF8F5]'
              }`}
            >
              M.A.P.A. Acolhimento®
            </button>

            <button
              onClick={() => setFilterCategory('capacitacao')}
              className={`flex-1 min-w-[130px] py-2 px-3 rounded-xl font-bold text-center transition-all shadow-xs ${
                filterCategory === 'capacitacao'
                  ? 'bg-[#68C9EA] text-slate-950 shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#1F2329] border border-[#E5DFD5] hover:bg-[#FAF8F5]'
              }`}
            >
              Capacitações & Cursos
            </button>

            <button
              onClick={() => setFilterCategory('palestra')}
              className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl font-bold text-center transition-all shadow-xs ${
                filterCategory === 'palestra'
                  ? 'bg-[#DFBA6B] text-slate-950 shadow-sm'
                  : 'bg-white text-[#6B7280] hover:text-[#1F2329] border border-[#E5DFD5] hover:bg-[#FAF8F5]'
              }`}
            >
              Palestras
            </button>
          </div>
        </div>

        {/* Services Cards List */}
        <div className="space-y-3.5 mb-6 relative z-10">
          {filteredServices.map(service => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onOpenDetails={(item) => setSelectedService(item)} 
            />
          ))}
        </div>

        {/* Spotify Podcast Feature Card */}
        <div className="relative z-10">
          <SpotifyCard />
        </div>

        {/* WhatsApp Community Card */}
        <div className="relative z-10">
          <WhatsAppCommunityCard />
        </div>

        {/* Videos Gallery / In-App Player */}
        <div className="relative z-10">
          <VideoGallery onPlayVideo={(video) => setActiveVideo(video)} />
        </div>

        {/* Official Website & Social Fast Buttons */}
        <div className="relative z-10 mb-6 space-y-2.5">
          <div className="px-1 mb-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C8476] font-display">
              Canais Oficiais
            </h3>
          </div>

          <a
            href={FABRINE_PROFILE.socials.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white hover:bg-[#FDFBF7] border border-[#E5DFD5] hover:border-[#C5A059]/50 rounded-2xl p-4 flex items-center justify-between text-[#2C3038] transition-all duration-300 group shadow-xs hover:shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#C5A059]/15 text-[#8C6D33] flex items-center justify-center border border-[#C5A059]/30">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2329] group-hover:text-[#8C6D33] transition-colors">
                  Site Oficial de Fabrine Fernandes
                </h4>
                <p className="text-xs text-[#6B7280]">Artigos, blog, agenda e metodologia</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#8C8476] group-hover:text-[#8C6D33] group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href={FABRINE_PROFILE.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white hover:bg-[#FDFBF7] border border-[#E5DFD5] hover:border-pink-400/50 rounded-2xl p-4 flex items-center justify-between text-[#2C3038] transition-all duration-300 group shadow-xs hover:shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center border border-pink-200">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2329] group-hover:text-pink-600 transition-colors">
                  Instagram @psicofabrinefernandes
                </h4>
                <p className="text-xs text-[#6B7280]">Conteúdos diários, reels e dicas práticas</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#8C8476] group-hover:text-pink-600 group-hover:translate-x-0.5 transition-all" />
          </a>

          <a
            href={FABRINE_PROFILE.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-white hover:bg-[#FDFBF7] border border-[#E5DFD5] hover:border-blue-400/50 rounded-2xl p-4 flex items-center justify-between text-[#2C3038] transition-all duration-300 group shadow-xs hover:shadow-sm"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-200">
                <Facebook className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#1F2329] group-hover:text-blue-600 transition-colors">
                  Página no Facebook
                </h4>
                <p className="text-xs text-[#6B7280]">Acompanhe publicações e eventos</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#8C8476] group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
          </a>
        </div>

        {/* Footer with Easy Byz Creator Link */}
        <div className="relative z-10 mt-auto">
          <Footer />
        </div>

        {/* Modals */}
        <ModalDetail 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />

        <VideoPlayerModal 
          video={activeVideo} 
          onClose={() => setActiveVideo(null)} 
        />

        <AboutModal 
          isOpen={showAbout} 
          onClose={() => setShowAbout(false)} 
        />
      </main>
    </div>
  );
}
