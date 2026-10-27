/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TranslationSchema, DOKU_CONFIG, Language } from '../data/config';
import { Mail, MessageSquare, Instagram, MapPin, Globe } from 'lucide-react';

interface FooterProps {
  t: TranslationSchema;
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, lang, onLanguageChange }) => {
  return (
    <footer className="py-16 lg:py-20 bg-[#050608] border-t border-white/10 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/8">
          {/* Brand Info & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-baseline gap-1 text-2xl font-black tracking-tight text-white">
              <span>{DOKU_CONFIG.brandMark}</span>
              <sup className="text-xs text-[#f59e0b] font-mono -top-2">{DOKU_CONFIG.registeredSymbol}</sup>
            </div>

            <div className="text-xs font-mono uppercase tracking-widest text-[#f59e0b] font-bold">
              {lang === 'id' ? DOKU_CONFIG.fullName.id : DOKU_CONFIG.fullName.en}
            </div>

            <p className="text-sm text-neutral-300 max-w-sm leading-relaxed font-medium">
              {t.footer.tagline}
            </p>

            <div className="pt-2 text-xs font-mono text-neutral-500">
              {lang === 'id' ? DOKU_CONFIG.brandCategory.id : DOKU_CONFIG.brandCategory.en}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">
                  {t.nav.portfolio}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2.5 text-neutral-300">
                <MapPin className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>{DOKU_CONFIG.location}</span>
              </div>

              <div>
                <a
                  href={`mailto:${DOKU_CONFIG.email}`}
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-neutral-300"
                >
                  <Mail className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>{DOKU_CONFIG.email}</span>
                </a>
              </div>

              <div>
                <a
                  href={`https://wa.me/${DOKU_CONFIG.whatsappCleanNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-neutral-300"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{DOKU_CONFIG.whatsappNumber}</span>
                </a>
              </div>

              <div>
                <a
                  href={DOKU_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 hover:text-white transition-colors text-neutral-300"
                >
                  <Instagram className="w-4 h-4 text-[#f59e0b] shrink-0" />
                  <span>{DOKU_CONFIG.instagramUsername}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <div>{t.footer.copyright}</div>

          <div className="flex items-center gap-4">
            <span>{t.footer.language}:</span>
            <div className="inline-flex items-center bg-[#101319] border border-white/10 p-0.5 rounded text-xs">
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`px-2 py-0.5 rounded transition-all font-semibold ${
                  lang === 'id' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                ID
              </button>
              <span className="text-white/20 select-none px-0.5">|</span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-0.5 rounded transition-all font-semibold ${
                  lang === 'en' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
