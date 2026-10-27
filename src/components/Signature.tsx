/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { Database, ShieldCheck, History } from 'lucide-react';

interface SignatureProps {
  t: TranslationSchema;
}

export const Signature: React.FC<SignatureProps> = ({ t }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Database className="w-5 h-5 text-[#f59e0b]" />;
      case 1:
        return <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />;
      case 2:
      default:
        return <History className="w-5 h-5 text-[#f59e0b]" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 border-b border-white/10 bg-[#050608] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(245,158,11,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
          <span className="tracking-widest uppercase font-semibold text-white/90">
            {t.signature.smallLabel}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase leading-[1.08] mb-8 text-balance">
          {t.signature.headline}
        </h2>

        <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed mb-16">
          {t.signature.description}
        </p>

        {/* 3 Pillars Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {t.signature.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#0d0f14] border border-white/8 hover:border-white/20 transition-colors"
            >
              <div className="mb-4">{getIcon(idx)}</div>
              <h3 className="text-base font-bold text-white mb-2 font-mono uppercase tracking-wide">
                {pt.label}
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {pt.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
