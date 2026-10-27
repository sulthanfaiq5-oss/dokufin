/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CheckCircle2, FolderX, FolderCheck } from 'lucide-react';
import { TranslationSchema } from '../data/config';

interface BeforeAfterProps {
  t: TranslationSchema;
}

export const BeforeAfter: React.FC<BeforeAfterProps> = ({ t }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'before' | 'after'>('all');

  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.beforeAfter.smallLabel}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight uppercase">
              {t.beforeAfter.headline}
            </h2>
            <p className="text-base text-neutral-400 max-w-2xl mt-3">
              {t.beforeAfter.subline}
            </p>
          </div>

          {/* View Filter Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#12151c] border border-white/10 rounded-sm self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-sm transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-black font-bold'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.beforeAfter.viewModeSide}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('before')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-sm transition-colors ${
                activeTab === 'before'
                  ? 'bg-red-500/20 text-red-300 font-bold border border-red-500/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.beforeAfter.before.badge}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('after')}
              className={`px-3 py-1.5 text-xs font-mono font-medium rounded-sm transition-colors ${
                activeTab === 'after'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {t.beforeAfter.after.badge}
            </button>
          </div>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* BEFORE DOKU CARD */}
          {(activeTab === 'all' || activeTab === 'before') && (
            <div className="p-8 sm:p-10 rounded-sm bg-[#101217] border border-red-500/25 relative flex flex-col justify-between overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500/50" />
              
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/8">
                  <div className="flex items-center gap-2">
                    <FolderX className="w-5 h-5 text-red-400" />
                    <span className="font-mono text-xs font-bold tracking-widest text-red-400 uppercase">
                      {t.beforeAfter.before.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">CONVENTIONAL</span>
                </div>

                <div className="space-y-6">
                  {t.beforeAfter.before.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-sm bg-black/40 border border-white/5 hover:border-red-500/30 transition-colors"
                    >
                      <div className="flex items-baseline gap-3 mb-1.5">
                        <span className="text-2xl sm:text-3xl font-extrabold text-neutral-200 font-mono tracking-tight">
                          {item.metric}
                        </span>
                        <span className="text-xs font-mono text-red-400/80">#UNSORTED</span>
                      </div>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/8 text-xs font-mono text-neutral-500 flex items-center justify-between">
                <span>RISK: DATA LOSS & LEADERSHIP AMNESIA</span>
                <span className="text-red-400 font-bold">FRAGILE</span>
              </div>
            </div>
          )}

          {/* AFTER DOKU CARD */}
          {(activeTab === 'all' || activeTab === 'after') && (
            <div className="p-8 sm:p-10 rounded-sm bg-[#0e141a] border border-[#f59e0b]/40 relative flex flex-col justify-between overflow-hidden shadow-xl shadow-black/60 group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f59e0b] to-emerald-400" />
              
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <FolderCheck className="w-5 h-5 text-[#f59e0b]" />
                    <span className="font-mono text-xs font-bold tracking-widest text-[#f59e0b] uppercase">
                      {t.beforeAfter.after.badge}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">STRUCTURED</span>
                </div>

                <div className="space-y-6">
                  {t.beforeAfter.after.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-sm bg-[#121820] border border-white/10 hover:border-[#f59e0b]/40 transition-colors"
                    >
                      <div className="flex items-baseline justify-between mb-1.5">
                        <span className="text-lg sm:text-xl font-bold font-mono text-white tracking-wide">
                          {item.code}
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      </div>
                      <p className="text-sm text-neutral-300 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 text-xs font-mono text-neutral-400 flex items-center justify-between">
                <span>OUTCOME: AUDIT-READY & EVERLASTING HERITAGE</span>
                <span className="text-emerald-400 font-bold">100% INDEXED</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
