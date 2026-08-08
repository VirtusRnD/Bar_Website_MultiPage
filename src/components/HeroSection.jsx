import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, Phone } from 'lucide-react';

export default function HeroSection({ activeTheme }) {
  const theme = activeTheme;
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8 relative z-10 my-auto flex flex-col items-center justify-center">
        
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`inline-block text-xs uppercase tracking-[0.3em] font-bold px-6 py-2 rounded-full bg-[#0d0c0e] border border-white/5 shadow-[inset_3px_3px_6px_#020203,inset_-3px_-3px_6px_#181619] ${theme?.accentText}`}
        >
          {theme?.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`text-4xl sm:text-7xl font-extrabold text-white tracking-tight leading-tight ${theme?.fontStyle}`}
        >
          {theme?.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-sm sm:text-base text-stone-300 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Özenle seçilmiş miksoloji kokteylleri, zengin mahzen seçkisi ve unutulmaz canlı performanslarla gecenize yön verin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
        >
          <button
            onClick={() => navigate('/reservation')}
            className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${theme?.buttonPrimary}`}
          >
            <Calendar size={16} /> Masa Rezerve Et
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="w-full sm:w-auto px-8 py-4 rounded-2xl text-xs uppercase tracking-widest font-bold text-white bg-[#0d0c0e] border border-white/5 shadow-[6px_6px_16px_#020203,-6px_-6px_16px_#181619] hover:shadow-[inset_3px_3px_6px_#020203,inset_-3px_-3px_6px_#181619] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Phone size={16} className={theme?.accentText} /> Bizi Arayın / Konum
          </button>
        </motion.div>

      </div>
    </section>
  );
}