/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';

interface IntroProps {
  t: TranslationSchema;
}

export const Intro: React.FC<IntroProps> = ({ t }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0b0d11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.intro.smallLabel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white uppercase tracking-tight leading-tight text-balance">
              {t.intro.headline}
            </h2>
          </div>

          {/* Right Column: Statement & 4 Pillars */}
          <div className="lg:col-span-7">
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed font-normal mb-12">
              {t.intro.bodyText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {t.intro.highlights.map((item) => (
                <div
                  key={item.step}
                  className="p-5 rounded-sm bg-[#11141a] border border-white/8 hover:border-white/20 transition-all group"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xl sm:text-2xl font-black tracking-wider text-white group-hover:text-[#f59e0b] transition-colors">
                      {item.word}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 font-bold">
                      {item.step}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-normal">
                    {item.sub}
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
