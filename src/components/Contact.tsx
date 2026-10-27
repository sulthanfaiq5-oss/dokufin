/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TranslationSchema, DOKU_CONFIG } from '../data/config';
import { Mail, MessageSquare, Instagram, MapPin, Globe, Send, CheckCircle2, X } from 'lucide-react';

interface ContactProps {
  t: TranslationSchema;
  initialPackage?: string;
  onClearInitialPackage?: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  t,
  initialPackage,
  onClearInitialPackage,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    org: '',
    email: '',
    whatsapp: '',
    projectType: 'campus',
    projectDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<string | undefined>(initialPackage);

  useEffect(() => {
    if (initialPackage) {
      setSelectedPkg(initialPackage);
    }
  }, [initialPackage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppUrl = () => {
    const pkgText = selectedPkg ? `\n*Paket/Proyek:* ${selectedPkg}` : '';
    const text = encodeURIComponent(
      `Halo DOKU® Team,\n\nSaya ingin berkonsultasi mengenai dokumentasi & pelaporan kegiatan:\n*Nama:* ${formData.name || '-'}\n*Organisasi:* ${formData.org || '-'}\n*Email:* ${formData.email || '-'}\n*WhatsApp:* ${formData.whatsapp || '-'}\n*Tipe Kegiatan:* ${formData.projectType}\n*Tanggal:* ${formData.projectDate || '-'}${pkgText}\n\n*Pesan:* ${formData.message || 'Mohon informasi penawaran dan ketersediaan jadwal.'}`
    );
    return `https://wa.me/${DOKU_CONFIG.whatsappCleanNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 lg:py-32 border-b border-white/10 bg-[#08090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Identity */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
              <span className="tracking-widest uppercase font-semibold text-white/90">
                {t.contact.smallLabel}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-[1.08] mb-6 text-balance">
              {t.contact.headline}
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-10">
              {t.contact.subline}
            </p>

            {/* Business Identity Cards */}
            <div className="space-y-4">
              {/* Location */}
              <div className="p-4 rounded-sm bg-[#0e1117] border border-white/8">
                <div className="flex items-center gap-3 mb-1">
                  <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {t.contact.identity.basedInLabel}
                  </span>
                </div>
                <div className="text-base font-bold text-white pl-7">
                  {DOKU_CONFIG.location}
                </div>
                <div className="text-xs text-neutral-500 pl-7 mt-1">
                  {DOKU_CONFIG.serviceArea[t.nav.home === 'Beranda' ? 'id' : 'en']}
                </div>
              </div>

              {/* Email */}
              <a
                href={`mailto:${DOKU_CONFIG.email}`}
                className="p-4 rounded-sm bg-[#0e1117] border border-white/8 hover:border-[#f59e0b]/40 transition-colors block group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {t.contact.identity.officialEmailLabel}
                  </span>
                </div>
                <div className="text-base font-bold text-white pl-7 group-hover:text-[#f59e0b] transition-colors">
                  {DOKU_CONFIG.email}
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${DOKU_CONFIG.whatsappCleanNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#0e1117] border border-white/8 hover:border-emerald-400/40 transition-colors block group"
              >
                <div className="flex items-center gap-3 mb-1">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                    {t.contact.identity.officialWhatsappLabel}
                  </span>
                </div>
                <div className="text-base font-bold text-white pl-7 group-hover:text-emerald-400 transition-colors">
                  {DOKU_CONFIG.whatsappNumber}
                </div>
              </a>

              {/* Instagram & Website */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={DOKU_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-sm bg-[#0e1117] border border-white/8 hover:border-white/20 transition-colors group block"
                >
                  <div className="flex items-center gap-2 mb-1 text-neutral-400">
                    <Instagram className="w-4 h-4 text-[#f59e0b]" />
                    <span className="font-mono text-xs uppercase">{t.contact.identity.instagramLabel}</span>
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#f59e0b]">
                    {DOKU_CONFIG.instagramUsername}
                  </div>
                </a>

                <a
                  href={DOKU_CONFIG.websiteUrl}
                  className="p-4 rounded-sm bg-[#0e1117] border border-white/8 hover:border-white/20 transition-colors group block"
                >
                  <div className="flex items-center gap-2 mb-1 text-neutral-400">
                    <Globe className="w-4 h-4 text-[#f59e0b]" />
                    <span className="font-mono text-xs uppercase">{t.contact.identity.websiteLabel}</span>
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-[#f59e0b]">
                    {DOKU_CONFIG.website}
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#101319] border border-white/10 shadow-2xl relative">
              {/* Selected Package Banner if Triggered */}
              {selectedPkg && (
                <div className="mb-6 p-3 rounded-sm bg-[#f59e0b]/10 border border-[#f59e0b]/30 flex items-center justify-between text-xs font-mono text-[#f59e0b]">
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{t.contact.form.selectedPackageNote}</span>
                    <span className="text-white font-semibold">{selectedPkg}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedPkg(undefined);
                      if (onClearInitialPackage) onClearInitialPackage();
                    }}
                    className="hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Org */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.org} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder={t.contact.form.orgPlaceholder}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>
                </div>

                {/* Email & WhatsApp */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.email} *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.whatsapp} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder={t.contact.form.whatsappPlaceholder}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>
                </div>

                {/* Project Type & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.projectType} *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
                    >
                      {t.contact.form.types.map((type) => (
                        <option key={type.id} value={type.id} className="bg-[#12151b] text-white">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                      {t.contact.form.projectDate} *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.projectDate}
                      onChange={(e) => setFormData({ ...formData, projectDate: e.target.value })}
                      className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm focus:outline-none focus:border-[#f59e0b] transition-colors"
                    />
                  </div>
                </div>

                {/* Tell us about your project */}
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-2">
                    {t.contact.form.tellUs} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.form.tellUsPlaceholder}
                    className="w-full px-4 py-3 rounded-sm bg-[#08090b] border border-white/10 text-white text-sm placeholder:text-neutral-600 focus:outline-none focus:border-[#f59e0b] transition-colors resize-y"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch">
                  <button
                    type="submit"
                    className="flex-1 py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>{t.contact.form.btnSubmit}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-400 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 transition-colors rounded-sm flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Langsung</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Success Dialog */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#12151c] border border-white/20 p-8 max-w-md w-full rounded-sm text-center shadow-2xl animate-in fade-in duration-200">
            <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white uppercase tracking-tight mb-2">
              {t.contact.form.successTitle}
            </h3>
            <p className="text-sm text-neutral-300 leading-relaxed mb-6">
              {t.contact.form.successMsg}
            </p>
            <div className="p-3 rounded-sm bg-black/50 border border-white/8 text-xs font-mono text-neutral-400 mb-6">
              KONFIRMASI: {formData.name || 'Mitra'} // {formData.org || 'Institusi'}
            </div>
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="w-full py-3 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
