/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, ChevronRight, Camera } from 'lucide-react';
import { TranslationSchema, DOKU_CONFIG } from '../data/config';

interface HeroProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onOpenContact }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 border-b border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(245,158,11,0.06),rgba(8,9,11,0))] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-400 mb-5">
                <span className="inline-block w-2 h-2 bg-[#f59e0b] rounded-full" />
                <span className="tracking-widest font-semibold uppercase text-white/90">
                  {t.hero.smallLabel}
                </span>
                <span className="text-white/30">·</span>
                <span className="text-neutral-400 uppercase tracking-wider">
                  {DOKU_CONFIG.location}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] uppercase mb-6 whitespace-pre-line text-balance">
                {t.hero.headline}
              </h1>

              <p className="text-lg sm:text-xl text-neutral-300 max-w-xl font-normal leading-relaxed mb-8">
                {t.hero.supportingText}
              </p>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-mono text-neutral-400 mb-10 pb-6 border-b border-white/8">
                {t.hero.categories.map((cat, idx) => (
                  <React.Fragment key={cat}>
                    <span className="text-neutral-300 font-medium tracking-wider">
                      {cat}
                    </span>
                    {idx < t.hero.categories.length - 1 && (
                      <span className="text-white/20 select-none">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm shadow-sm"
              >
                <span>{t.hero.btnPrimary}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-white bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/40 transition-colors rounded-sm"
              >
                <span>{t.hero.btnSecondary}</span>
                <ChevronRight className="w-4 h-4 text-neutral-400" />
              </a>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative h-full min-h-[380px] lg:min-h-[460px] w-full rounded-sm overflow-hidden border border-white/12 bg-[#12151b] group">
              {!imgError ? (
                <img
                  src="/src/assets/images/doku_hero_event_1793112376061.jpg"
                  alt="DOKU® documentary capture of an auditorium summit"
                  className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.92] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  onError={() => setImgError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-full min-h-[380px] flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#12151b] to-[#0c0e12] text-neutral-400">
                  <Camera className="w-12 h-12 text-[#f59e0b] mb-4" />
                  <p className="font-mono text-xs uppercase tracking-wider text-white mb-2">
                    DOKU® Master Visual Archive
                  </p>
                  <p className="text-xs text-center text-neutral-500 max-w-xs">
                    Documentary Photography &amp; Quantitative Reporting
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 bg-[#0a0c10]/90 backdrop-blur-md border border-white/15 p-3.5 rounded-sm flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-white font-medium tracking-wide">
                    {t.hero.liveBadge}
                  </span>
                </div>
                <div className="text-neutral-400 hidden sm:block">
                  {t.hero.archiveCode}
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm border border-white/15 px-2.5 py-1 text-[11px] font-mono text-neutral-300">
                REF // SUMMIT-JKT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
