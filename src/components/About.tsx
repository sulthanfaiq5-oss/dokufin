/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema, DOKU_CONFIG } from '../data/config';

interface AboutProps {
  t: TranslationSchema;
}

export const About: React.FC<AboutProps> = ({ t }) => {
  return (
    <section id="about" className="py-24 lg:py-32 border-b border-white/10 bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Manifesto Quote */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.about.smallLabel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight mb-6 text-balance">
              {t.about.headline}
            </h2>

            <div className="p-5 rounded-sm bg-[#101319] border border-white/8 text-xs font-mono text-neutral-400 space-y-2">
              <div className="text-white font-bold">{DOKU_CONFIG.brandName}</div>
              <div>{t.nav.services} · {DOKU_CONFIG.location}</div>
              <div className="text-[#f59e0b]">{DOKU_CONFIG.website}</div>
            </div>
          </div>

          {/* Right Column: Description & 3 Core Principles */}
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8">
              {t.about.manifesto}
            </p>

            <blockquote className="p-6 rounded-sm bg-[#0e1218] border-l-2 border-[#f59e0b] text-base sm:text-lg text-white font-medium italic mb-12">
              "{t.about.coreIdea}"
            </blockquote>

            <div className="space-y-6 pt-6 border-t border-white/10">
              {t.about.principles.map((pr, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
                  <div className="font-mono text-xs text-[#f59e0b] font-bold shrink-0 sm:w-44 uppercase">
                    0{idx + 1} // {pr.title}
                  </div>
                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {pr.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
