import React, { useState } from 'react';
import { Ticket, User, Phone, X, Calendar, Users } from 'lucide-react';
import { BAR_DATA } from '../theme/themeConfig';
import { submitForm } from '../lib/submitForm';

export default function Reservation({ activeTheme, selectedEvent, onClearEvent }) {
  const theme = activeTheme;
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  async function handleSubmit(e) {
    e.preventDefault();
    const values = { ...Object.fromEntries(new FormData(e.currentTarget)), event: selectedEvent?.title || '' };
    setStatus('sending');
    try {
      setStatus(await submitForm(values, { email: BAR_DATA.email, subject: 'Rezervasyon talebi' }));
    } catch {
      setStatus('error');
    }
  }

  return (
    <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center px-6 py-12 text-center relative z-10">
      <div className="w-full max-w-4xl mx-auto my-auto space-y-8 flex flex-col items-center justify-center">

        <div className="text-center space-y-3">
          <span className={`text-xs font-mono font-bold tracking-[0.3em] uppercase block ${theme?.accentText}`}>
            ONLINE RESERVATION
          </span>
          <h2 className={`text-4xl sm:text-6xl font-extrabold text-white tracking-tight ${theme?.fontStyle}`}>
            {selectedEvent ? 'Etkinlik Masası Rezerve Edin' : 'Masa Rezerve Edin'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 font-light max-w-lg mx-auto leading-relaxed">
            Özel geceleriniz ve grup katılımlarınız için masanızı önceden ayırtın.
          </p>
        </div>

        {selectedEvent && (
          <div className={`w-full p-4 rounded-2xl flex items-center justify-between transition-all ${theme?.cardBg}`}>
            <div className="flex items-center gap-3">
              <Ticket size={20} className={theme?.accentText} />
              <div className="text-left">
                <span className={`text-[10px] uppercase font-mono tracking-wider font-bold block ${theme?.accentText}`}>
                  Seçilen Etkinlik:
                </span>
                <h4 className="text-sm font-bold text-white">{selectedEvent.title}</h4>
              </div>
            </div>
            <button
              onClick={onClearEvent}
              className="p-2 rounded-xl bg-[#0d0c0e] shadow-[4px_4px_8px_#000,-4px_-4px_8px_rgba(255,255,255,0.05)] text-stone-300 hover:text-white transition-all cursor-pointer border border-white/5"
            >
              <X size={16} />
            </button>
          </div>
        )}

        <div className={`w-full p-8 sm:p-12 rounded-3xl text-left transition-all duration-500 ${theme?.cardBg}`}>
          {status === 'sent' || status === 'mailto' ? (
            <p role="status" className={`text-sm font-semibold ${theme?.accentText}`}>
              {status === 'sent' ? 'Rezervasyon talebiniz alındı! En kısa sürede sizi arayıp onaylayacağız.' : 'E-posta uygulamanız rezervasyon talebinizle açıldı. Göndere basmanız yeterli.'}
            </p>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-2">Ad Soyad</label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ahmet Yılmaz"
                    className="w-full bg-[#09080a] border border-white/5 rounded-2xl px-4 py-3.5 text-xs text-white outline-none focus:border-white/20 transition-all shadow-[inset_4px_4px_8px_#020203,inset_-4px_-4px_8px_#181619]"
                  />
                  <User size={16} className={`absolute right-4 top-4 opacity-50 ${theme?.accentText}`} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-2">Telefon</label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full bg-[#09080a] border border-white/5 rounded-2xl px-4 py-3.5 text-xs text-white outline-none focus:border-white/20 transition-all shadow-[inset_4px_4px_8px_#020203,inset_-4px_-4px_8px_#181619]"
                  />
                  <Phone size={16} className={`absolute right-4 top-4 opacity-50 ${theme?.accentText}`} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-2">Tarih</label>
                <div className="relative">
                  <input
                    type="date"
                    name="date"
                    required
                    className="w-full bg-[#09080a] border border-white/5 rounded-2xl px-4 py-3.5 text-xs text-white outline-none focus:border-white/20 transition-all shadow-[inset_4px_4px_8px_#020203,inset_-4px_-4px_8px_#181619]"
                  />
                  <Calendar size={16} className={`absolute right-4 top-4 opacity-50 ${theme?.accentText}`} />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-stone-300 block mb-2">Kişi Sayısı</label>
                <div className="relative">
                  <select name="guests" className="w-full bg-[#09080a] border border-white/5 rounded-2xl px-4 py-3.5 text-xs text-white outline-none focus:border-white/20 transition-all shadow-[inset_4px_4px_8px_#020203,inset_-4px_-4px_8px_#181619] appearance-none cursor-pointer">
                    <option value="2" className="bg-[#09080a] text-white">2 Kişilik Masa</option>
                    <option value="4" className="bg-[#09080a] text-white">4 Kişilik Masa</option>
                    <option value="6" className="bg-[#09080a] text-white">6+ VIP Lounge</option>
                  </select>
                  <Users size={16} className={`absolute right-4 top-4 opacity-50 pointer-events-none ${theme?.accentText}`} />
                </div>
              </div>

            </div>

            {status === 'error' && (
            <p role="alert" className="text-xs font-semibold text-red-400">
              Rezervasyon talebiniz gönderilemedi. Lütfen tekrar deneyin ya da {BAR_DATA.email} adresine yazın.
            </p>
          )}

            <button

              type="submit"

              disabled={status === 'sending'}
              className={`w-full py-4 rounded-2xl text-xs uppercase tracking-widest font-bold cursor-pointer ${theme?.buttonPrimary}`}
            >
              {selectedEvent ? `${selectedEvent.title} İçin Rezerve Et` : 'Rezervasyonu Tamamla'}
            </button>
          </form>
          )}
        </div>

      </div>
    </section>
  );
}