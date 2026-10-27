/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { Compass, BarChart, ShieldCheck, Clock } from 'lucide-react';

interface WhyDokuProps {
  t: TranslationSchema;
}

export const WhyDoku: React.FC<WhyDokuProps> = ({ t }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-[#f59e0b]" />;
      case 1:
        return <BarChart className="w-5 h-5 text-[#f59e0b]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />;
      case 3:
      default:
        return <Clock className="w-5 h-5 text-[#f59e0b]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0b0e13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {t.whyDoku.smallLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase whitespace-pre-line text-balance">
            {t.whyDoku.headline}
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl mt-3">
            {t.whyDoku.subline}
          </p>
        </div>

        {/* 4 Advantage Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.whyDoku.pillars.map((pillar, idx) => (
            <div
              key={pillar.code}
              className="p-8 rounded-sm bg-[#11141b] border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/8">
                  <span className="p-2 rounded-sm bg-white/5 border border-white/10">
                    {getIcon(idx)}
                  </span>
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 text-[11px] font-mono text-neutral-600">
                PILLAR // {pillar.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
