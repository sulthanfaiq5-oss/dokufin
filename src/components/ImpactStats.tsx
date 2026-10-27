/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { TranslationSchema } from '../data/config';

interface ImpactStatsProps {
  t: TranslationSchema;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ t }) => {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          t.stats.items.forEach((item, idx) => {
            const target = item.number;
            const duration = 1200;
            const steps = 30;
            const stepTime = duration / steps;
            let current = 0;
            const increment = target / steps;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = Math.round(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [t.stats.items]);

  const formatDisplay = (idx: number, item: typeof t.stats.items[0]) => {
    if (!animatedRef.current) return item.value;
    const count = counts[idx];
    if (item.number >= 1000) {
      return `${Math.round(count / 1000)}K${item.suffix}`;
    }
    return `${count}${item.suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-20 lg:py-24 border-b border-white/10 bg-[#060709]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
            <span className="tracking-widest uppercase font-semibold text-white/90">
              {t.stats.smallLabel}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight uppercase">
            {t.stats.headline}
          </h2>
        </div>

        {/* 4 Statistics Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.stats.items.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-sm bg-[#0e1117] border-l-2 border-[#f59e0b] border-t border-r border-b border-white/8 hover:border-white/20 transition-all"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono tracking-tight tabular-nums mb-3">
                {formatDisplay(idx, stat)}
              </div>
              <div className="text-base font-bold text-neutral-200 mb-1.5">
                {stat.label}
              </div>
              <div className="text-xs text-neutral-500 leading-normal">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
