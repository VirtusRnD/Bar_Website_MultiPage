import React from 'react';
import { motion } from 'framer-motion';

export default function Concept({ activeTheme }) {
  const theme = activeTheme;

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 text-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto space-y-6 my-auto flex flex-col items-center justify-center"
      >
        <span className={`text-[11px] uppercase tracking-[0.3em] font-bold block ${theme?.accentText}`}>
          — KONSEPTİMİZ HAKKINDA —
        </span>

        <h2 className={`text-5xl sm:text-6xl font-extrabold tracking-tight text-white ${theme?.fontStyle}`}>
          Hakkımızda
        </h2>

        <div className={`w-12 h-[2px] mx-auto my-6 bg-current opacity-40 ${theme?.accentText}`} />

        <p className={`text-base sm:text-lg leading-relaxed font-light ${theme?.textColor}`}>
          "Ustaca harmanlanmış klasik tatlar, kendi imzamızı taşıyan deneysel kokteyller ve ruhu dinlendiren ritimlerle kapıdan girdiğiniz an başka bir dünyaya adım atacaksınız."
        </p>

        <p className="text-xs text-stone-400 font-light leading-relaxed max-w-lg mx-auto tracking-widest pt-2">
          Şehrin kalbinde gizlenmiş özel konseptimiz, yüksek kaliteli içki koleksiyonumuz ve samimi hizmet anlayışımızla hizmetinizdeyiz.
        </p>
      </motion.div>
    </section>
  );
}