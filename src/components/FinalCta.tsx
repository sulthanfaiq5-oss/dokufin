/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { ArrowRight } from 'lucide-react';

interface FinalCtaProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ t, onOpenContact }) => {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-black border-b border-white/10 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.08),transparent_65%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight uppercase leading-[1.04] mb-6 whitespace-pre-line text-balance">
          {t.finalCta.headline}
        </h2>

        <p className="text-lg sm:text-2xl text-neutral-400 font-normal max-w-xl mx-auto mb-12">
          {t.finalCta.supporting}
        </p>

        <button
          type="button"
          onClick={() => onOpenContact()}
          className="inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 text-xs sm:text-sm font-black uppercase tracking-widest text-black bg-white hover:bg-neutral-200 transition-all rounded-sm shadow-2xl hover:scale-[1.02]"
        >
          <span>{t.finalCta.btn}</span>
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </section>
  );
};
