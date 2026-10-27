/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { DOKU_CONFIG, Language, TranslationSchema } from '../data/config';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
  t: TranslationSchema;
  onOpenContact: (pkg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  t,
  onOpenContact,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.portfolio, href: '#portfolio' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[#08090b]/92 backdrop-blur-md border-white/10 shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#08090b]/75 backdrop-blur-sm border-white/8 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#home"
            className="flex items-baseline gap-0.5 text-xl font-extrabold tracking-tight text-white hover:text-[#f59e0b] transition-colors whitespace-nowrap shrink-0"
            aria-label="DOKU Homepage"
          >
            <span>{DOKU_CONFIG.brandMark}</span>
            <sup className="text-xs text-[#f59e0b] font-mono -top-2">{DOKU_CONFIG.registeredSymbol}</sup>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-white transition-colors relative py-1 hover:underline underline-offset-8 decoration-white/40 whitespace-nowrap shrink-0"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Language Switcher & Primary Action */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Language Switcher: ID | EN */}
            <div
              className="inline-flex items-center bg-[#12151b] border border-white/12 p-0.5 rounded text-xs font-mono"
              role="group"
              aria-label="Language selection"
            >
              <button
                type="button"
                onClick={() => onLanguageChange('id')}
                className={`px-2.5 py-1 rounded transition-all font-semibold ${
                  lang === 'id'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-pressed={lang === 'id'}
              >
                ID
              </button>
              <span className="text-white/20 select-none px-0.5">|</span>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded transition-all font-semibold ${
                  lang === 'en'
                    ? 'bg-white text-black shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>

            {/* Desktop CTA Button */}
            <button
              type="button"
              onClick={() => onOpenContact()}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm shadow-sm whitespace-nowrap shrink-0"
            >
              <span>{t.nav.startProject}</span>
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-300 hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#f59e0b]"
              aria-label={mobileMenuOpen ? t.nav.close : t.nav.menu}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e12] border-b border-white/12 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3 font-medium text-base text-neutral-200">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-colors rounded-sm"
            >
              <span>{t.nav.startProject}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
