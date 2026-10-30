import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sparkles, ArrowRight, X, Heart, BookOpen, User, Building, CheckCircle } from 'lucide-react';

interface InteractiveQuizBannerProps {
  onSelectService: (serviceId: string) => void;
}

export const InteractiveQuizBanner: React.FC<InteractiveQuizBannerProps> = ({ onSelectService }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: 'parent',
      icon: Heart,
      title: 'Mãe ou Pai',
      desc: 'Busco avaliação para meu filho(a) ou apoio com rotina e desenvolvimento em casa',
      recommendedId: 'avaliacao-infantil',
      color: '#C5A059'
    },
    {
      id: 'teacher',
      icon: BookOpen,
      title: 'Professora / Educadora',
      desc: 'Quero capacitação em TEA e estratégias práticas de inclusão escolar',
      recommendedId: 'capacitacao-tea',
      color: '#68C9EA'
    },
    {
      id: 'adult',
      icon: User,
      title: 'Adulto Neurodivergente',
      desc: 'Busco organização de rotina, foco e acolhimento com a Metodologia M.A.P.A.',
      recommendedId: 'mapa-acolhimento',
      color: '#16A34A'
    },
    {
      id: 'institution',
      icon: Building,
      title: 'Escola ou Empresa',
      desc: 'Quero contratar palestras, workshops ou treinamentos institucionais',
      recommendedId: 'palestras',
      color: '#DFBA6B'
    }
  ];

  const handleChoose = (role: typeof roles[0]) => {
    setSelectedRole(role.id);
    setTimeout(() => {
      setIsOpen(false);
      setSelectedRole(null);
      onSelectService(role.recommendedId);
    }, 300);
  };

  return (
    <>
      {/* Interactive Trigger Card */}
      <div 
        onClick={() => setIsOpen(true)}
        className="w-full bg-white hover:bg-[#FDFBF7] border border-[#E5DFD5] hover:border-[#C5A059]/50 rounded-2xl p-4 sm:p-4.5 flex items-center justify-between gap-3 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 transform active:scale-[0.99] group mb-5"
      >
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#DFBA6B] to-[#C5A059] flex items-center justify-center text-white shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <h2 className="text-sm sm:text-base font-bold text-[#1F2329] group-hover:text-[#8C6D33] transition-colors">
              Como posso te ajudar hoje?
            </h2>
            <p className="text-xs text-[#6B7280] line-clamp-1">
              Descubra em 1 clique o melhor caminho para você ou sua escola!
            </p>
          </div>
        </div>

        <div className="w-9 h-9 rounded-full bg-[#F5F2EB] group-hover:bg-[#C5A059] text-[#6B7280] group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Interactive Questionnaire Modal using Portal attached directly to document.body */}
      {isOpen && typeof document !== 'undefined' && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="w-full max-w-lg bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl p-6 sm:p-7 shadow-2xl text-[#2C3038] relative max-h-[88vh] overflow-y-auto z-[100000]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#6B7280] hover:text-[#1F2329] flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C6D33] bg-[#C5A059]/15 px-3 py-1 rounded-full border border-[#C5A059]/30">
                Guia Rápido de Acolhimento
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-[#1F2329] mt-2.5">
                Qual é o seu momento atual?
              </h3>
              <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                Selecione abaixo para direcionarmos você imediatamente à melhor solução de Fabrine Fernandes.
              </p>
            </div>

            <div className="space-y-3">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => handleChoose(role)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 ${
                      isSelected 
                        ? 'bg-[#C5A059]/15 border-[#C5A059] shadow-xs' 
                        : 'bg-white hover:bg-[#FDFBF7] border-[#E5DFD5] hover:border-[#C5A059]/40 shadow-xs'
                    }`}
                  >
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-xs"
                      style={{ backgroundColor: `${role.color}18`, color: role.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-sm sm:text-base text-[#1F2329]">{role.title}</h4>
                        {isSelected && <CheckCircle className="w-4 h-4 text-[#8C6D33]" />}
                      </div>
                      <p className="text-xs text-[#6B7280] mt-0.5 leading-relaxed">{role.desc}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E5DFD5] flex justify-between items-center text-xs text-[#6B7280]">
              <span>Atendimento humanizado e ético</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-[#8C6D33] font-semibold hover:underline"
              >
                Ver todos os links
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

