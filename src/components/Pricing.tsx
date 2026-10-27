/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema } from '../data/config';
import { Check, ArrowRight } from 'lucide-react';

interface PricingProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ t, onOpenContact }) => {
  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#0b0d12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {t.pricing.smallLabel}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
            {t.pricing.headline}
          </h2>
          <p className="text-base text-neutral-400 max-w-2xl mt-3">
            {t.pricing.subline}
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.pricing.packages.map((pkg) => {
            const isFeatured = pkg.isFeatured;
            return (
              <div
                key={pkg.id}
                className={`p-8 sm:p-10 rounded-sm flex flex-col justify-between transition-all relative ${
                  isFeatured
                    ? 'bg-[#10141d] border-2 border-[#f59e0b] shadow-2xl shadow-black/80 lg:-translate-y-2'
                    : 'bg-[#0f1117] border border-white/10 hover:border-white/20'
                }`}
              >
                {/* Most Requested Badge */}
                {isFeatured && (
                  <div className="absolute -top-3.5 right-6 bg-[#f59e0b] text-black font-mono text-[11px] font-bold tracking-wider uppercase px-3 py-1 rounded-sm shadow-sm">
                    {t.pricing.badgeMostRequested}
                  </div>
                )}

                <div>
                  {/* Package Header */}
                  <div className="mb-8 pb-6 border-b border-white/8">
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-1">
                      TIER // {pkg.id.toUpperCase()}
                    </span>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-normal mb-6">
                      {pkg.forWho}
                    </p>
                    <div className="text-sm font-mono font-bold text-white uppercase tracking-wide bg-white/5 py-2 px-3 rounded-sm border border-white/8">
                      {pkg.priceTag}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-10">
                    {pkg.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onOpenContact(pkg.name)}
                  className={`w-full py-3.5 px-4 text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 ${
                    isFeatured
                      ? 'bg-white text-black hover:bg-neutral-200 shadow-md'
                      : 'bg-white/5 text-white hover:bg-white/10 border border-white/15 hover:border-white/30'
                  }`}
                >
                  <span>
                    {pkg.id === 'annual'
                      ? t.pricing.ctaAnnual
                      : t.pricing.ctaComplete}
                  </span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
