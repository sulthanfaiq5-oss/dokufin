/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  t: TranslationSchema;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ t }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {t.testimonials.smallLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            {t.testimonials.headline}
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl mt-3">
            {t.testimonials.subline}
          </p>
        </div>

        {/* Testimonials 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.testimonials.quotes.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-sm bg-[#101319] border border-white/8 flex flex-col justify-between relative group hover:border-white/20 transition-all"
            >
              <div>
                <Quote className="w-6 h-6 text-[#f59e0b]/40 mb-6" />
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic mb-8">
                  "{item.text}"
                </p>
              </div>

              <div className="pt-6 border-t border-white/8">
                <div className="text-sm font-bold text-white mb-0.5">
                  {item.author}
                </div>
                <div className="text-xs font-mono text-[#f59e0b]">
                  {item.role}
                </div>
                <div className="text-xs text-neutral-500 mt-0.5">
                  {item.organization}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clearly marked placeholder notice */}
        <div className="mt-8 text-center text-[11px] font-mono text-neutral-600">
          {t.testimonials.placeholderNote}
        </div>
      </div>
    </section>
  );
};
