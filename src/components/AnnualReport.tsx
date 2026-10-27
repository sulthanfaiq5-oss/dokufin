/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { TranslationSchema } from '../data/config';
import { CheckCircle2, BookOpen, BarChart3, TrendingUp, Calendar, ArrowRight } from 'lucide-react';

interface AnnualReportProps {
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const AnnualReport: React.FC<AnnualReportProps> = ({ t, onOpenContact }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'financials' | 'milestones'>('overview');

  return (
    <section className="py-20 lg:py-28 border-b border-white/10 bg-[#08090b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Proposition & Checklist */}
          <div className="lg:col-span-6">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.annualReport.smallLabel}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight uppercase leading-[1.1] mb-6 text-balance">
              {t.annualReport.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-8">
              {t.annualReport.subline}
            </p>

            {/* Checklist of 7 Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 pb-8 border-b border-white/10">
              {t.annualReport.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => onOpenContact('DOKU ANNUAL')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm"
            >
              <span>{t.annualReport.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column: Visual Mockup & Interactive Card */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Visual Photo of Printed Book & Tablet */}
            <div className="relative rounded-sm overflow-hidden border border-white/15 bg-[#12151b] group shadow-2xl">
              <img
                src="/src/assets/images/doku_annual_book_1793112397531.jpg"
                alt="DOKU Digital & Hardcover Annual Report Mockup"
                className="w-full h-[320px] sm:h-[380px] object-cover filter contrast-[1.05] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-white/15 px-3 py-1 text-xs font-mono text-[#f59e0b]">
                {t.annualReport.badge}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-neutral-300 flex items-center justify-between">
                <span>FORMAT: HARDCOVER DOSSIER + CLOUD PORTAL</span>
                <span className="text-emerald-400">INDEXED &amp; AUDITED</span>
              </div>
            </div>

            {/* Interactive Data Snapshot Card */}
            <div className="p-6 rounded-sm bg-[#101319] border border-white/10 shadow-lg">
              {/* Tabs */}
              <div className="flex items-center gap-1 p-1 bg-[#171b22] border border-white/10 rounded-sm mb-6">
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-1.5 text-xs font-mono transition-colors text-center ${
                    activeTab === 'overview'
                      ? 'bg-white text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.annualReport.sampleTabs.overview}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('financials')}
                  className={`flex-1 py-1.5 text-xs font-mono transition-colors text-center ${
                    activeTab === 'financials'
                      ? 'bg-white text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.annualReport.sampleTabs.financials}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('milestones')}
                  className={`flex-1 py-1.5 text-xs font-mono transition-colors text-center ${
                    activeTab === 'milestones'
                      ? 'bg-white text-black font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {t.annualReport.sampleTabs.milestones}
                </button>
              </div>

              {/* Tab Content 1: Overview KPIs */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-2 gap-4">
                  {t.annualReport.mockupKpis.map((kpi, idx) => (
                    <div key={idx} className="p-3.5 rounded-sm bg-black/40 border border-white/6">
                      <div className="text-[11px] font-mono text-neutral-400 uppercase">
                        {kpi.label}
                      </div>
                      <div className="text-xl font-bold font-mono text-white tabular-nums my-1">
                        {kpi.value}
                      </div>
                      <div className="text-[11px] text-neutral-500">
                        {kpi.note}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Tab Content 2: Financials */}
              {activeTab === 'financials' && (
                <div className="space-y-3.5">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-neutral-300">
                      <span>Alokasi Program Utama (68%)</span>
                      <span className="text-white font-bold">Rp 340.000.000</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="bg-[#f59e0b] h-full w-[68%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-neutral-300">
                      <span>Logistik &amp; Operasional Lapangan (22%)</span>
                      <span className="text-white font-bold">Rp 110.000.000</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[22%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1 text-neutral-300">
                      <span>Dokumentasi, Media &amp; Pelaporan (10%)</span>
                      <span className="text-white font-bold">Rp 50.000.000</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="bg-sky-400 h-full w-[10%]" />
                    </div>
                  </div>

                  <div className="pt-2 text-right text-[11px] font-mono text-neutral-500">
                    REALISASI TAHUNAN: 100% AUDIT BALANCE
                  </div>
                </div>
              )}

              {/* Tab Content 3: Milestones */}
              {activeTab === 'milestones' && (
                <div className="space-y-3 text-xs font-mono">
                  <div className="flex items-start gap-3 p-2.5 rounded-sm bg-black/30 border border-white/5">
                    <span className="text-[#f59e0b] font-bold">Q1</span>
                    <div>
                      <div className="text-white font-bold">Rapat Kerja &amp; Pelantikan Pengurus</div>
                      <div className="text-neutral-400 text-[11px]">8 Program kerja terpetakan · Berkas AD/ART terdokumentasi</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-sm bg-black/30 border border-white/5">
                    <span className="text-[#f59e0b] font-bold">Q2</span>
                    <div>
                      <div className="text-white font-bold">Festival Akbar &amp; Konferensi Wilayah</div>
                      <div className="text-neutral-400 text-[11px]">4.200 Peserta · Rekap media 1.800 foto &amp; video highlight</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-2.5 rounded-sm bg-black/30 border border-white/5">
                    <span className="text-[#f59e0b] font-bold">Q3-Q4</span>
                    <div>
                      <div className="text-white font-bold">Penyusunan LPJ &amp; Handover Arsip Digital</div>
                      <div className="text-neutral-400 text-[11px]">Penerbitan Buku Laporan Tahunan · Siap serah terima</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
