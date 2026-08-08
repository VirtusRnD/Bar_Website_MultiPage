import React from 'react';
import { BAR_DATA } from '../theme/themeConfig';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function InfoAndMap({ activeTheme }) {
  const theme = activeTheme;

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 py-12 text-center relative">
      <div className="w-full max-w-6xl mx-auto my-auto space-y-8 flex flex-col items-center justify-center">
        
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className={`text-xs uppercase font-bold tracking-[0.3em] block ${theme?.accentText}`}>
            KONUM & ÇALIŞMA SAATLERİ
          </span>
          <h2 className={`text-3xl sm:text-5xl font-extrabold text-white ${theme?.fontStyle}`}>
            Bizi Ziyaret Edin
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#0d0c0e] shadow-[15px_15px_40px_#040405,-15px_-15px_40px_#161417] flex flex-col justify-center items-center gap-3 text-center">
              
              <div className="flex flex-col items-center justify-center gap-1.5 text-center w-full py-1">
                <div className={`p-2.5 rounded-xl bg-[#0d0c0e] shadow-[inset_4px_4px_8px_#040405,inset_-4px_-4px_8px_#161417] border border-white/5 ${theme?.accentText}`}>
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-0.5">Adres</h4>
                  <p className="text-[11px] text-stone-300 font-light leading-snug max-w-xs mx-auto">
                    {BAR_DATA.location}
                  </p>
                </div>
              </div>

              <div className="w-4/5 h-[1px] bg-white/5 shadow-[0_1px_2px_#000]" />

              <div className="flex flex-col items-center justify-center gap-1.5 text-center w-full py-1">
                <div className={`p-2.5 rounded-xl bg-[#0d0c0e] shadow-[inset_4px_4px_8px_#040405,inset_-4px_-4px_8px_#161417] border border-white/5 ${theme?.accentText}`}>
                  <Phone size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-0.5">Telefon</h4>
                  <p className="text-[11px] text-stone-300 font-light">{BAR_DATA.phone}</p>
                </div>
              </div>

              <div className="w-4/5 h-[1px] bg-white/5 shadow-[0_1px_2px_#000]" />

              <div className="flex flex-col items-center justify-center gap-1.5 text-center w-full py-1">
                <div className={`p-2.5 rounded-xl bg-[#0d0c0e] shadow-[inset_4px_4px_8px_#040405,inset_-4px_-4px_8px_#161417] border border-white/5 ${theme?.accentText}`}>
                  <Clock size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs mb-0.5">Çalışma Saatleri</h4>
                  <p className="text-[11px] text-stone-300 font-light max-w-xs mx-auto">
                    {BAR_DATA.hours}
                  </p>
                </div>
              </div>

            </div>
          </div>

          <div className="lg:col-span-7 h-[360px] rounded-3xl border border-white/10 overflow-hidden relative shadow-[15px_15px_40px_#040405,-15px_-15px_40px_#161417] w-full">
            <iframe 
              title="Konum Haritası"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12502.502987019672!2d27.138383!3d38.437318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e48b1d9c3b%3A0x6a2c22cf3ff3e05!2sAlsancak%2C%20Konak%2FIzmir!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }} 
              allowFullScreen="" 
              loading="lazy" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}