/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { GraduationCap, School, Landmark, Users, Sparkles, HeartHandshake, ArrowRight } from 'lucide-react';

interface WhoWeServeProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const WhoWeServe: React.FC<WhoWeServeProps> = ({ t, onOpenContact }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <GraduationCap className="w-5 h-5 text-[#f59e0b]" />;
      case 1:
        return <School className="w-5 h-5 text-[#f59e0b]" />;
      case 2:
        return <Landmark className="w-5 h-5 text-[#f59e0b]" />;
      case 3:
        return <Users className="w-5 h-5 text-[#f59e0b]" />;
      case 4:
        return <Sparkles className="w-5 h-5 text-[#f59e0b]" />;
      case 5:
      default:
        return <HeartHandshake className="w-5 h-5 text-[#f59e0b]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {t.whoWeServe.smallLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            {t.whoWeServe.headline}
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl mt-3">
            {t.whoWeServe.subline}
          </p>
        </div>

        {/* 6 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.whoWeServe.sectors.map((sector, idx) => (
            <div
              key={sector.code}
              className="p-8 rounded-sm bg-[#0e1117] border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/8">
                  <div className="p-2 rounded-sm bg-white/5 border border-white/10">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs text-neutral-500 font-semibold">
                    SECTOR // {sector.code}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight mb-3 group-hover:text-[#f59e0b] transition-colors">
                  {sector.title}
                </h3>

                <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/8 flex items-center justify-between">
                <span className="text-xs font-mono text-neutral-500 truncate max-w-[190px]">
                  {sector.examples}
                </span>
                <button
                  type="button"
                  onClick={() => onOpenContact(sector.title)}
                  className="text-xs font-mono text-white/70 hover:text-white flex items-center gap-1"
                >
                  <span>INQUIRE</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
