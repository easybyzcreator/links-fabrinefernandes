import React, { useState } from 'react';
import { 
  CalendarCheck, 
  GraduationCap, 
  BookOpenCheck, 
  Mic, 
  Compass, 
  Users, 
  ArrowUpRight, 
  ChevronRight, 
  ChevronDown, 
  Sparkles,
  Info,
  Check
} from 'lucide-react';
import { ServiceCardItem } from '../types';

interface ServiceCardProps {
  service: ServiceCardItem;
  onOpenDetails: (service: ServiceCardItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails }) => {
  const [showSubOptions, setShowSubOptions] = useState(false);
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Icon selector
  const renderIcon = (name: string, color: string) => {
    const props = { className: "w-5 h-5", style: { color } };
    switch (name) {
      case 'CalendarCheck': return <CalendarCheck {...props} />;
      case 'GraduationCap': return <GraduationCap {...props} />;
      case 'BookOpenCheck': return <BookOpenCheck {...props} />;
      case 'Mic': return <Mic {...props} />;
      case 'Compass': return <Compass {...props} />;
      case 'Users': return <Users {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  const isMapa = service.category === 'mapa' && service.subOptions && service.subOptions.length > 0;

  return (
    <div className="w-full bg-white hover:bg-[#FDFBF8] border border-[#E5DFD5] hover:border-[#C5A059]/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden group">
      {/* Subtle top accent bar */}
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{ backgroundColor: service.accentColor }}
      />

      {/* Card Header */}
      <div className="flex items-start justify-between gap-3 mb-2.5">
        <div className="flex items-center gap-3">
          <div 
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 border border-black/5 shadow-xs"
            style={{ backgroundColor: `${service.accentColor}18` }}
          >
            {renderIcon(service.iconName, service.accentColor)}
          </div>
          <div>
            {service.badge && (
              <span 
                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border mb-1 inline-block"
                style={{ 
                  backgroundColor: `${service.accentColor}12`, 
                  borderColor: `${service.accentColor}35`,
                  color: service.accentColor === '#F9DC3F' ? '#997D0A' : service.accentColor 
                }}
              >
                {service.badge}
              </span>
            )}
            <h3 className="text-base sm:text-lg font-bold text-[#1F2329] leading-snug group-hover:text-[#8C6D33] transition-colors">
              {service.title}
            </h3>
            {service.subtitle && (
              <p className="text-xs text-[#8C6D33] font-semibold mt-0.5">
                {service.subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Target Audience Bar if MAPA */}
      {service.targetAudienceText && (
        <div className="mb-2.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl p-2 text-[10px] text-emerald-900 font-bold uppercase tracking-wide">
          {service.targetAudienceText}
        </div>
      )}

      {/* Compact Description Box with Expand Toggle */}
      <div className="bg-[#FAF8F5] rounded-xl p-3 border border-[#EBE5DC] mb-3">
        <div className="flex items-center justify-between gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#8C6D33] mb-1">
          <div className="flex items-center gap-1.5">
            <Info className="w-3 h-3 text-[#C5A059]" />
            <span>Sobre esta Solução</span>
          </div>
          <button
            type="button"
            onClick={() => setIsTextExpanded(!isTextExpanded)}
            className="text-[10px] lowercase font-semibold text-[#8C6D33] hover:text-[#1F2329] flex items-center gap-0.5 transition-colors cursor-pointer"
          >
            <span>{isTextExpanded ? 'recolher' : 'ler mais'}</span>
            <ChevronDown className={`w-3 h-3 transition-transform ${isTextExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <p className={`text-xs sm:text-[13px] text-[#4E5460] leading-relaxed ${!isTextExpanded ? 'line-clamp-2' : ''}`}>
          {isTextExpanded ? service.fullDescription || service.shortDescription : service.shortDescription}
        </p>

        {isTextExpanded && service.features && !isMapa && (
          <ul className="mt-2.5 pt-2 border-t border-[#E8E1D5] space-y-1 text-xs text-[#555B66]">
            {service.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Check className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* If it is M.A.P.A., render the 3 specialized versions toggleable */}
      {isMapa && service.subOptions && (
        <div className="mb-3 space-y-2">
          <button 
            type="button"
            onClick={() => setShowSubOptions(!showSubOptions)}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-emerald-50/70 hover:bg-emerald-50 border border-emerald-200/80 text-emerald-900 text-xs font-bold transition-all cursor-pointer shadow-xs active:scale-[0.99]"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span>{showSubOptions ? 'Recolher 3 Versões do M.A.P.A.' : 'Ver as 3 Versões (Kids, Adultos, Híbrido)'}</span>
            </span>
            <ChevronDown className={`w-3.5 h-3.5 text-emerald-700 transition-transform ${showSubOptions ? 'rotate-180' : ''}`} />
          </button>

          {showSubOptions && (
            <div className="space-y-2 pt-1 animate-fade-in">
              {service.subOptions.map((sub, idx) => (
                <div 
                  key={sub.id}
                  className="bg-[#FAF8F5] p-3 rounded-xl border border-[#E8E1D5] hover:border-emerald-400/40 transition-colors shadow-xs"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold text-[#1F2329] flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 text-[10px] flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {sub.title.replace(/^[0-9]\.\s*/, '')}
                    </h4>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                      {sub.tag}
                    </span>
                  </div>

                  <p className="text-xs text-[#5E6573] mb-2 leading-relaxed">
                    {sub.description}
                  </p>

                  <div className="flex items-center justify-between pt-1 text-[11px]">
                    <span className="text-[#7A8290] italic">Público: {sub.targetAudience.slice(0, 35)}...</span>
                    <a
                      href={sub.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold active:scale-95 transition-transform"
                    >
                      <span>Adquirir</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={() => onOpenDetails(service)}
          className="flex-1 py-2.5 px-3 rounded-xl bg-[#F5F2EB] hover:bg-[#EBE5DC] text-[#333842] text-xs font-semibold flex items-center justify-center gap-1.5 transition-all border border-[#E0D8CB] active:scale-98 cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>Ver Detalhes</span>
        </button>

        <a
          href={service.primaryActionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-3 rounded-xl text-slate-900 text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs hover:shadow transition-all transform active:scale-98"
          style={{ 
            backgroundColor: service.accentColor === '#F9DC3F' ? '#F9DC3F' : service.accentColor,
            color: service.accentColor === '#FA4E74' ? '#ffffff' : (service.accentColor === '#68C9EA' || service.accentColor === '#56C45F' || service.accentColor === '#F9DC3F' ? '#1c2024' : '#ffffff')
          }}
        >
          <span>{service.primaryActionLabel.split(' ')[0]} {service.primaryActionLabel.split(' ')[1] || ''}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
