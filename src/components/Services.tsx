/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Camera, FileText, BarChart3, Archive, ArrowUpRight } from 'lucide-react';
import { TranslationSchema } from '../data/config';

interface ServicesProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ t, onOpenContact }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Camera className="w-5 h-5 text-[#f59e0b]" />;
      case 1:
        return <FileText className="w-5 h-5 text-[#f59e0b]" />;
      case 2:
        return <BarChart3 className="w-5 h-5 text-[#f59e0b]" />;
      case 3:
      default:
        return <Archive className="w-5 h-5 text-[#f59e0b]" />;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 border-b border-white/10 bg-[#0b0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.services.smallLabel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              {t.services.headline}
            </h2>
            <p className="text-base text-neutral-400 max-w-2xl mt-3">
              {t.services.subline}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onOpenContact()}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#f59e0b] hover:text-white transition-colors self-start md:self-auto"
          >
            <span>{t.nav.startProject}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {t.services.cards.map((card, idx) => (
            <div
              key={card.number}
              className="p-8 sm:p-10 rounded-sm bg-[#101319] border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Top: Number & Tag */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/8">
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    {card.number}
                  </span>
                  <div className="flex items-center gap-2">
                    {getIcon(idx)}
                    <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider">
                      {card.tag}
                    </span>
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-[#f59e0b] transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                  {card.description}
                </p>

                {/* Deliverables List */}
                <div className="pt-6 border-t border-white/8 space-y-2.5">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 block mb-3">
                    DELIVERABLES // SPESIFIKASI:
                  </span>
                  {card.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400">
                      <span className="text-[#f59e0b] font-mono select-none">■</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-8 pt-6 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500">
                  TIER {card.number} STANDARDS
                </span>
                <button
                  type="button"
                  onClick={() => onOpenContact(card.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-white hover:text-[#f59e0b] transition-colors font-medium"
                >
                  <span>INQUIRE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
