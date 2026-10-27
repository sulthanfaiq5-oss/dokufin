/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSchema } from '../data/config';
import { ArrowUpRight, X, CheckCircle, FileCheck, Layers } from 'lucide-react';

interface PortfolioProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ t, onOpenContact }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeModalId, setActiveModalId] = useState<string | null>(null);

  const filteredCaseStudies =
    selectedCategory === 'all'
      ? t.portfolio.caseStudies
      : t.portfolio.caseStudies.filter((cs) => cs.categoryKey === selectedCategory);

  const activeCaseStudy = t.portfolio.caseStudies.find(
    (cs) => cs.id === activeModalId
  );

  return (
    <section id="portfolio" className="py-20 lg:py-28 border-b border-white/10 bg-[#0a0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.portfolio.smallLabel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              {t.portfolio.headline}
            </h2>
            <p className="text-base text-neutral-400 max-w-2xl mt-3">
              {t.portfolio.subline}
            </p>
          </div>
        </div>

        {/* Filter Tabs (Interactive Segmented Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {t.portfolio.categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap shrink-0 border ${
                selectedCategory === cat.id
                  ? 'bg-white text-black font-bold border-white'
                  : 'bg-[#12151c] text-neutral-400 hover:text-white border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies List */}
        <div className="space-y-16">
          {filteredCaseStudies.map((cs) => (
            <article
              key={cs.id}
              className="rounded-sm bg-[#101319] border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch group hover:border-white/25 transition-all"
            >
              {/* Image Column */}
              <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[460px] overflow-hidden bg-[#161a22]">
                <img
                  src={cs.featuredImage}
                  alt={cs.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Status Stamp */}
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1 text-xs font-mono text-neutral-300">
                  {cs.code}
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-neutral-400 flex items-center justify-between">
                  <span className="text-[#f59e0b] font-medium">{cs.status}</span>
                  <span className="text-white/60">DOKU ARCHIVE SYSTEM</span>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-2">
                    {cs.subtitle}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-4">
                    {cs.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                    {cs.description}
                  </p>

                  {/* 4 Quantitative Metrics */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-sm bg-black/40 border border-white/8 mb-8">
                    {cs.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-lg sm:text-xl font-bold font-mono text-white tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deliverables Bullet Badges */}
                  <div className="space-y-2 mb-8">
                    {cs.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                        <span className="text-[#f59e0b]">■</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-white/8 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalId(cs.id)}
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-white hover:text-[#f59e0b] transition-colors"
                  >
                    <span>{t.portfolio.viewDetails}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenContact(cs.title)}
                    className="px-4 py-2 text-xs font-mono font-semibold uppercase text-neutral-300 hover:text-white border border-white/15 hover:border-white/30 rounded-sm transition-colors"
                  >
                    INQUIRE SIMILAR
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal / Dossier */}
      {activeCaseStudy && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#101319] border border-white/20 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-sm p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalId(null)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label={t.portfolio.closeModal}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#f59e0b] mb-2 uppercase">
              <span>{activeCaseStudy.code}</span>
              <span>·</span>
              <span>{activeCaseStudy.status}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase mb-2">
              {activeCaseStudy.title}
            </h3>
            <p className="text-sm font-mono text-neutral-400 mb-6">
              {activeCaseStudy.subtitle}
            </p>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-sm bg-black/50 border border-white/10 mb-6">
              {activeCaseStudy.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xl font-bold font-mono text-white tabular-nums">
                    {m.value}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Quote */}
            <div className="p-5 rounded-sm bg-[#161a23] border-l-2 border-[#f59e0b] mb-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#f59e0b] block mb-2 font-bold">
                {t.portfolio.executiveSummary}
              </span>
              <p className="text-sm text-neutral-200 italic leading-relaxed">
                "{activeCaseStudy.reportPreviewQuote}"
              </p>
            </div>

            {/* Complete Deliverables Checklist */}
            <div className="space-y-3 mb-8">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block font-semibold">
                ARSIP DELIVERABLES LENGKAP:
              </span>
              {activeCaseStudy.deliverables.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setActiveModalId(null)}
                className="px-5 py-2.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors"
              >
                {t.portfolio.closeModal}
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveModalId(null);
                  onOpenContact(activeCaseStudy.title);
                }}
                className="px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm"
              >
                {t.nav.startProject}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
