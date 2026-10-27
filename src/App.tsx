/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TRANSLATIONS, Language } from './data/config';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { BeforeAfter } from './components/BeforeAfter';
import { Services } from './components/Services';
import { Signature } from './components/Signature';
import { HowItWorks } from './components/HowItWorks';
import { Portfolio } from './components/Portfolio';
import { ImpactStats } from './components/ImpactStats';
import { WhoWeServe } from './components/WhoWeServe';
import { WhyDoku } from './components/WhyDoku';
import { AnnualReport } from './components/AnnualReport';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('doku_preferred_lang');
      if (saved === 'id' || saved === 'en') return saved;
    }
    return 'id'; // Default language: Bahasa Indonesia as required
  });

  const [selectedPackage, setSelectedPackage] = useState<string | undefined>(undefined);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('doku_preferred_lang', newLang);
      document.documentElement.lang = newLang;
    }
  };

  const handleOpenContact = (pkgName?: string) => {
    if (pkgName) {
      setSelectedPackage(pkgName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = TRANSLATIONS[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-[#08090b] text-[#ebeef5] flex flex-col selection:bg-[#f59e0b]/30 selection:text-white">
      {/* 4. Sticky Navigation Bar with Language Switcher */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        t={t}
        onOpenContact={handleOpenContact}
      />

      <main className="flex-1">
        {/* 5. Hero Section */}
        <Hero t={t} onOpenContact={handleOpenContact} />

        {/* 6. Introduction Section */}
        <Intro t={t} />

        {/* 7. Before & After DOKU */}
        <BeforeAfter t={t} />

        {/* 8. Services */}
        <Services t={t} onOpenContact={handleOpenContact} />

        {/* 9. Signature Section */}
        <Signature t={t} />

        {/* 10. How It Works */}
        <HowItWorks t={t} />

        {/* 11. Portfolio / Selected Work */}
        <Portfolio t={t} onOpenContact={handleOpenContact} />

        {/* 12. Impact Statistics */}
        <ImpactStats t={t} />

        {/* 13. Who We Serve */}
        <WhoWeServe t={t} onOpenContact={handleOpenContact} />

        {/* 14. Why DOKU */}
        <WhyDoku t={t} />

        {/* 15. Annual Report */}
        <AnnualReport t={t} onOpenContact={handleOpenContact} />

        {/* 16. Pricing */}
        <Pricing t={t} onOpenContact={handleOpenContact} />

        {/* 17. About DOKU */}
        <About t={t} />

        {/* 18. Testimonials */}
        <Testimonials t={t} />

        {/* 19. Contact & Business Identity */}
        <Contact
          t={t}
          initialPackage={selectedPackage}
          onClearInitialPackage={() => setSelectedPackage(undefined)}
        />

        {/* 20. Final CTA */}
        <FinalCta t={t} onOpenContact={handleOpenContact} />
      </main>

      {/* 21. Footer */}
      <Footer
        t={t}
        lang={lang}
        onLanguageChange={handleLanguageChange}
      />
    </div>
  );
}
