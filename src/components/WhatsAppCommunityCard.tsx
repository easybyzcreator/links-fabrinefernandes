import React from 'react';
import { MessageCircle, Users, ArrowRight, ShieldCheck, Sparkles, Bell } from 'lucide-react';
import { SERVICES_DATA } from '../data/contentData';

export const WhatsAppCommunityCard: React.FC = () => {
  const communityData = SERVICES_DATA.find(s => s.id === 'comunidade-whatsapp');
  const communityUrl = communityData?.primaryActionUrl || "https://chat.whatsapp.com/K0tt0o8O3yX762YF0GxbTq";

  return (
    <div className="w-full bg-white border border-[#E5DFD5] hover:border-emerald-500/40 rounded-3xl p-4.5 sm:p-5 shadow-xs transition-all mb-5 relative overflow-hidden group">
      {/* Subtle emerald top line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#56C45F]" />

      {/* Top Header with WhatsApp Icon */}
      <div className="flex items-center justify-between gap-3 mb-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-[#56C45F]/15 border border-[#56C45F]/30 text-[#1B7E24] flex items-center justify-center shadow-xs">
            <MessageCircle className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-[#1F2329]">
                Comunidade Educadores Inclusivos 🧩
              </h4>
              <span className="text-[10px] bg-[#56C45F]/15 text-[#1B7E24] font-bold px-2 py-0.5 rounded-full border border-[#56C45F]/30">
                Gratuito
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">
              Comunidade Oficial de Educação Inclusiva | Fabrine Fernandes 🧩
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Description Box */}
      <div className="bg-[#FAF8F5] rounded-2xl p-3.5 sm:p-4 border border-[#EBE5DC] mb-3.5 relative z-10 space-y-2.5">
        <p className="text-xs sm:text-sm text-[#4E5460] leading-relaxed">
          <strong className="text-[#1F2329]">Bem-vinda(o)!</strong> Este é o nosso espaço de troca e atualização para professores e profissionais da educação.
        </p>

        <div className="space-y-1.5 pt-1 text-xs text-[#333842]">
          <span className="font-bold text-[#1B7E24] flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#56C45F]" />
            Aqui você terá acesso a:
          </span>
          <ul className="space-y-1 pl-1 text-[11px] sm:text-xs text-[#4A505C]">
            <li className="flex items-start gap-1.5">
              <span className="text-[#56C45F] font-bold">•</span>
              <span>Materiais complementares e resumos de capacitações</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#56C45F] font-bold">•</span>
              <span>Avisos em primeira mão sobre cursos, mentorias e eventos</span>
            </li>
            <li className="flex items-start gap-1.5">
              <span className="text-[#56C45F] font-bold">•</span>
              <span>Conteúdos práticos sobre TEA, TDAH e inclusão na sala de aula</span>
            </li>
          </ul>
        </div>
        
        <div className="mt-2 pt-2 border-t border-[#E8E1D5] flex items-center justify-between text-[11px] text-[#6B7280]">
          <span className="flex items-center gap-1 text-[#8C6D33] font-medium">
            <Bell className="w-3.5 h-3.5 text-[#C5A059]" />
            Mantenha as notificações ativas!
          </span>
          <span className="flex items-center gap-1 text-[#1B7E24] font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-[#56C45F]" />
            Grupo Moderado
          </span>
        </div>
      </div>

      {/* Action Button */}
      <a
        href={communityUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 px-5 rounded-xl bg-[#56C45F] hover:bg-[#43ad4b] text-slate-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:shadow transition-all transform active:scale-98 relative z-10"
      >
        <span>Entrar na Comunidade Oficial</span>
        <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
};

