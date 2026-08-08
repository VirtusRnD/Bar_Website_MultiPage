import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BAR_DATA } from '../theme/themeConfig';
import { Sparkles } from 'lucide-react';

export default function Menu({ activeTheme }) {
  const theme = activeTheme;
  const [activeCategory, setActiveCategory] = useState('Tümü');
  
  const categories = ['Tümü', 'İmza Kokteyller', 'Klasikler'];
  const filteredItems = activeCategory === 'Tümü' 
    ? BAR_DATA.menu 
    : BAR_DATA.menu.filter(item => item.category === activeCategory);

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 py-12 text-center relative">
      <div className="w-full max-w-5xl mx-auto my-auto space-y-10 flex flex-col items-center justify-center">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className={`text-xs uppercase tracking-[0.3em] font-bold block ${theme?.accentText}`}>
            GİZLİ KOKTEYL SEÇKİSİ
          </span>
          <h2 className={`text-4xl sm:text-6xl font-extrabold text-white ${theme?.fontStyle}`}>
            Kokteyller & İçecekler
          </h2>

          <div className="flex justify-center gap-3 mt-6 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeCategory === cat 
                    ? `${theme?.buttonPrimary}` 
                    : 'bg-[#0d0c0e] text-stone-400 shadow-[6px_6px_14px_#020203,-6px_-6px_14px_#181619] hover:text-white border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className={`w-full p-8 sm:p-12 rounded-3xl transition-all duration-500 text-left ${theme?.cardBg}`}>
          <div className="space-y-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <h3 className={`text-lg sm:text-xl font-bold text-white group-hover:opacity-80 transition-opacity ${theme?.fontStyle}`}>
                      {item.name}
                    </h3>
                    {item.badge && (
                      <span className={`px-3 py-1 rounded-full text-[9px] uppercase font-bold tracking-wider ${theme?.badgeBg}`}>
                        <Sparkles size={9} className="inline mr-1" /> {item.badge}
                      </span>
                    )}
                  </div>
                  <div className="flex-1 border-b border-dotted border-white/20 mx-3 hidden sm:block" />
                  <span className={`text-lg sm:text-xl font-bold whitespace-nowrap ${theme?.accentText}`}>
                    {item.price}
                  </span>
                </div>

                <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-xs text-stone-300 font-light max-w-xl leading-relaxed">
                    {item.desc}
                  </p>
                  {item.profile && (
                    <span className={`text-[10px] tracking-wider uppercase px-3 py-1 rounded-xl shadow-[inset_2px_2px_5px_#000] bg-black/40 border border-white/5 w-fit ${theme?.accentText}`}>
                      {item.profile}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}