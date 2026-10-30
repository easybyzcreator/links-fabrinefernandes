import React from 'react';
import { createPortal } from 'react-dom';
import { X, Award, CheckCircle, Heart, Brain, Calendar, Target } from 'lucide-react';
import { FABRINE_PROFILE } from '../data/contentData';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  if (typeof document === 'undefined') return null;

  const pillars = [
    { title: "Foco", desc: "Atenção e funções executivas", icon: Target, color: "#68C9EA" },
    { title: "Cognição", desc: "Estratégias de aprendizagem", icon: Brain, color: "#56C45F" },
    { title: "Afeto", desc: "Acolhimento e vínculo seguro", icon: Heart, color: "#FA4E74" },
    { title: "Rotina", desc: "Previsibilidade e autonomia", icon: Calendar, color: "#C5A059" }
  ];

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-xl bg-[#FAF8F5] border border-[#E5DFD5] rounded-3xl p-6 sm:p-7 shadow-2xl text-[#2C3038] relative max-h-[90vh] overflow-y-auto z-[100000]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 text-[#6B7280] hover:text-[#1F2329] flex items-center justify-center transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Top Header */}
        <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#E5DFD5]">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-md shrink-0">
            <img 
              src={FABRINE_PROFILE.avatarUrl} 
              alt={FABRINE_PROFILE.name} 
              className="w-full h-full object-cover object-top" 
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#C5A059]/15 text-[#8C6D33] border border-[#C5A059]/30">
                Sobre Mim
              </span>
              <span className="text-[10px] text-[#6B7280]">{FABRINE_PROFILE.registration}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#1F2329] font-display">
              {FABRINE_PROFILE.name}
            </h3>
            <p className="text-xs text-[#8C6D33] font-bold mt-0.5">
              {FABRINE_PROFILE.title}
            </p>
          </div>
        </div>

        {/* Story Text */}
        <div className="space-y-3.5 text-xs sm:text-sm text-[#555B66] leading-relaxed mb-6">
          <h4 className="text-base font-bold text-[#1F2329] font-display italic">
            "Uma trajetória dedicada ao desenvolvimento humano e à aprendizagem."
          </h4>

          <p>
            Sou mãe coruja da Júlia e do Júlio, líder de projetos com crianças, apaixonada por música, Palestrante e Neuropsicopedagoga Clínica e Institucional com mais de <strong className="text-[#1F2329]">24 anos de experiência</strong> em educação.
          </p>

          <p>
            Minha atuação foca na área da aprendizagem, área em que sou dedicada, criteriosa e intensa. Acredito que mais do que rótulos ou diagnósticos, <strong className="text-[#1F2329]">minha missão é com pessoas</strong>, gosto de olhar para o que está por trás do diagnóstico.
          </p>

          <p className="bg-white p-3.5 rounded-xl border border-[#E5DFD5] text-[#333842] shadow-xs">
            Possuo ampla formação nas áreas de <strong className="text-[#1F2329]">Educação Inclusiva, Neuropsicopedagogia/Psicopedagogia, AEE (Atendimento Educacional Especializado)</strong>, com certificações em TDAH, Dislexia, Alfabetização, capacitação em ABA (AT, ABA na prática, Manejo de comportamentos) e Sistema de Avaliação/Rastreio Padronizado do TEA (Autismo).
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-6">
          <h5 className="text-xs uppercase font-bold tracking-wider text-[#8C6D33] mb-3">
            Pilares da Minha Metodologia:
          </h5>
          <div className="grid grid-cols-2 gap-2.5">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <div key={idx} className="bg-white p-3 rounded-xl border border-[#E5DFD5] flex items-center gap-2.5 shadow-xs">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${pil.color}18`, color: pil.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="text-xs font-bold text-[#1F2329]">{pil.title}</h6>
                    <p className="text-[10px] text-[#6B7280]">{pil.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-3 border-t border-[#E5DFD5] flex justify-between items-center text-xs">
          <span className="text-[#6B7280]">ABPp 1242 • Registro Ativo</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#C5A059] text-white font-bold hover:bg-[#b8934a] transition-colors"
          >
            Voltar aos Links
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};
