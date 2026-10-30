import React from 'react';
import { createPortal } from 'react-dom';
import { X, Check, ArrowUpRight, MessageCircle, Sparkles, ShieldCheck, Calendar, Users, BookOpen } from 'lucide-react';
import { ServiceCardItem } from '../types';

interface ModalDetailProps {
  service: ServiceCardItem | null;
  onClose: () => void;
}

export const ModalDetail: React.FC<ModalDetailProps> = ({ service, onClose }) => {
  if (!service) return null;

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl p-5 sm:p-7 shadow-2xl text-[#2C3038] relative max-h-[90vh] overflow-y-auto z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-5 right-4 sm:right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#6B7280] hover:text-[#1F2329] flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header */}
        <div className="mb-4 pr-8">
          {service.badge && (
            <span 
              className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border inline-block mb-2"
              style={{ 
                backgroundColor: `${service.accentColor}15`, 
                borderColor: `${service.accentColor}40`,
                color: service.accentColor === '#F9DC3F' ? '#997D0A' : service.accentColor 
              }}
            >
              {service.badge}
            </span>
          )}
          <h3 className="text-xl sm:text-2xl font-bold text-[#1F2329] font-display leading-tight">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className="text-xs sm:text-sm font-semibold text-[#8C6D33] mt-1">
              {service.subtitle}
            </p>
          )}
        </div>

        {/* Target Audience Bar if MAPA */}
        {service.targetAudienceText && (
          <div className="mb-4 bg-emerald-50/90 border border-emerald-200/90 rounded-xl p-2.5 text-[10px] sm:text-[11px] text-emerald-900 font-bold uppercase tracking-wide">
            {service.targetAudienceText}
          </div>
        )}

        {/* Full Detailed Description */}
        <div className="space-y-4 text-xs sm:text-sm text-[#555B66] leading-relaxed mb-6">
          <div className="bg-white p-4 rounded-2xl border border-[#E5DFD5] text-[#333842] shadow-xs space-y-2 whitespace-pre-line leading-relaxed">
            {service.fullDescription}
          </div>

          {/* SubOptions (M.A.P.A. Versions with Deliverables) */}
          {service.subOptions && service.subOptions.length > 0 && (
            <div className="space-y-3 pt-1">
              <h4 className="font-bold text-[#1F2329] text-sm flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                Versões do M.A.P.A. do Acolhimento®:
              </h4>
              {service.subOptions.map((sub) => (
                <div key={sub.id} className="bg-white p-4 rounded-2xl border border-[#E5DFD5] shadow-xs space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-bold text-emerald-700 text-sm">{sub.title}</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-full font-bold">{sub.tag}</span>
                  </div>
                  
                  <p className="text-xs text-[#555B66] leading-relaxed">{sub.description}</p>
                  
                  <div className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E8E1D5] text-[11px] text-[#4A505C]">
                    <strong className="text-[#1F2329] block mb-0.5">Para quem é:</strong>
                    <span>{sub.targetAudience}</span>
                  </div>

                  {/* Deliverables checklist if available */}
                  {sub.deliverables && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[11px] font-bold text-[#8C6D33] uppercase tracking-wider block">
                        O que ele entrega na prática:
                      </span>
                      {sub.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="bg-emerald-50/50 p-2 rounded-lg border border-emerald-100 text-[11px]">
                          <strong className="text-emerald-900 block font-semibold">{deliv.title}</strong>
                          <span className="text-[#555B66]">{deliv.description}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="pt-2">
                    <a
                      href={sub.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-xs flex items-center justify-center gap-1.5 active:scale-98"
                    >
                      <span>Adquirir {sub.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Features list (O que está incluso / Diferenciais) */}
          {service.features && service.features.length > 0 && (
            <div>
              <h4 className="font-bold text-[#1F2329] text-sm mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                O que está incluso & Diferenciais:
              </h4>
              <div className="space-y-2">
                {service.features.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-white p-2.5 rounded-xl border border-[#E5DFD5]">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-[#333842]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Schedule list if applicable */}
          {service.schedule && service.schedule.length > 0 && (
            <div>
              <h4 className="font-bold text-[#1F2329] text-sm mb-2.5 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                Cronograma de Acompanhamento:
              </h4>
              <div className="space-y-1.5 bg-white p-3 rounded-2xl border border-[#E5DFD5]">
                {service.schedule.map((aula, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs py-1 border-b border-[#F0EBE1] last:border-0">
                    <span className="w-5 h-5 rounded-full bg-[#C5A059]/15 text-[#8C6D33] font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-[#333842] leading-snug">{aula}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ideal For if applicable */}
          {service.idealFor && service.idealFor.length > 0 && (
            <div>
              <h4 className="font-bold text-[#1F2329] text-sm mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#8C6D33]" />
                Ideal para:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {service.idealFor.map((item, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-xl border border-[#E5DFD5] text-xs text-[#333842] flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-3 border-t border-[#E5DFD5] flex flex-col sm:flex-row gap-2.5">
          <a
            href={service.primaryActionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-5 rounded-xl text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-transform active:scale-98"
            style={{ 
              backgroundColor: service.accentColor,
              color: service.accentColor === '#F9DC3F' || service.accentColor === '#68C9EA' ? '#1c2024' : '#ffffff'
            }}
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>{service.primaryActionLabel}</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-white hover:bg-slate-50 text-[#555B66] border border-[#E5DFD5] text-xs font-semibold transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
