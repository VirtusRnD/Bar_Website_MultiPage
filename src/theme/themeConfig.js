// =========================================================================
// BURADAN TEK BİR STRİNG DEĞİŞTİREREK TÜM SİTENİN TEMASINI DEĞİŞTİREBİLİRSİN:
// Seçenekler: 'dillerRoom' | 'noirRooftop' | 'velvetJazz' | 'speakeasyParlour' | 'crystalSuite'
// =========================================================================
export const CURRENT_THEME_KEY = 'dillerRoom';

export const THEMES = {
  dillerRoom: {
    id: 'dillerRoom',
    name: 'THE DILLER ROOM',
    heroTitle: 'Taste Quality in Our Handcrafted Cocktails',
    tagline: 'SINCE 1894 • SEATTLE\'S FINEST COCKTAIL BAR',
    bgClass: 'bg-[#121114]',
    textColor: 'text-[#f5f2eb]',
    fontStyle: 'font-serif',
    accentText: 'text-[#e6d5b8]',
    heroBgImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1920&auto=format&fit=crop&q=80',
    cardBg: 'glass-card bg-[#121114]/75 border border-[#e6d5b8]/20 shadow-[12px_12px_30px_rgba(0,0,0,0.8),-8px_-8px_20px_rgba(255,255,255,0.03)]',
    buttonPrimary: 'neo-btn bg-[#e6d5b8] text-[#0d0c0e] font-serif font-bold uppercase tracking-[0.2em] shadow-[6px_6px_18px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(255,255,255,0.2)] hover:shadow-[0_0_20px_rgba(230,213,184,0.4)]',
    badgeBg: 'glass-card bg-[#121114]/90 text-[#e6d5b8] border border-[#e6d5b8]/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]',
    specialFeature: {
      title: 'Sommelier Reserve Pairing',
      desc: 'Nadir şaraplar ve puro koleksiyonumuz için Sommelier danışmanlığı dahildir.',
      badge: 'Private Reserve'
    }
  },

  noirRooftop: {
    id: 'noirRooftop',
    name: 'AURA PANORAMIC SUITE',
    heroTitle: 'ELEVATED MIXOLOGY ABOVE THE CLOUDS',
    tagline: 'PRIVATE ROOFTOP & HELIPAD LOUNGE',
    bgClass: 'bg-[#0a1220]',
    textColor: 'text-slate-200',
    fontStyle: 'font-sans',
    accentText: 'text-sky-300',
    heroBgImage: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=1920&auto=format&fit=crop&q=80',
    cardBg: 'glass-card bg-[#0a1220]/75 border border-sky-400/20 shadow-[12px_12px_30px_rgba(0,0,0,0.8),-8px_-8px_20px_rgba(56,189,248,0.05)]',
    buttonPrimary: 'neo-btn bg-sky-400 text-slate-950 font-sans font-bold uppercase tracking-[0.2em] shadow-[6px_6px_18px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]',
    badgeBg: 'glass-card bg-[#0a1220]/90 text-sky-300 border border-sky-400/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]',
    specialFeature: {
      title: 'VIP Chauffeur & Yacht Transfer',
      desc: 'VIP masa rezervasyonlarında rezidansınızdan helikopter veya yat transfer seçeneği sunulur.',
      badge: 'Skyline Concierge'
    }
  },

  velvetJazz: {
    id: 'velvetJazz',
    name: 'THE VELVET ROOM',
    heroTitle: 'SOULFUL RHYTHMS & AGED SPIRITS',
    tagline: 'MIDNIGHT JAZZ & VINTAGE COCKTAIL SANCTUARY',
    bgClass: 'bg-[#180a0d]',
    textColor: 'text-rose-100',
    fontStyle: 'font-serif',
    accentText: 'text-rose-300',
    heroBgImage: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&auto=format&fit=crop&q=80',
    cardBg: 'glass-card bg-[#180a0d]/75 border border-rose-500/20 shadow-[12px_12px_30px_rgba(0,0,0,0.8),-8px_-8px_20px_rgba(244,63,94,0.05)]',
    buttonPrimary: 'neo-btn bg-rose-600 text-white font-serif font-bold uppercase tracking-[0.2em] shadow-[6px_6px_18px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(244,63,94,0.3)] hover:shadow-[0_0_25px_rgba(244,63,94,0.5)]',
    badgeBg: 'glass-card bg-[#180a0d]/90 text-rose-300 border border-rose-500/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]',
    specialFeature: {
      title: 'Acoustic Stage Front Seating',
      desc: 'Canlı caz ve blues performansları için sahne önü akustik localar ayrılır.',
      badge: 'Live Session VIP'
    }
  },

  speakeasyParlour: {
    id: 'speakeasyParlour',
    name: 'MEMBERS ONLY PARLOUR',
    heroTitle: 'DISCREET LUXURY BEHIND CLOSED DOORS',
    tagline: 'PASSWORD REQUIRED • MEMBERS & INVITED GUESTS ONLY',
    bgClass: 'bg-[#101610]',
    textColor: 'text-stone-300',
    fontStyle: 'font-serif',
    accentText: 'text-emerald-400',
    heroBgImage: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=1920&auto=format&fit=crop&q=80',
    cardBg: 'glass-card bg-[#101610]/75 border border-emerald-500/20 shadow-[12px_12px_30px_rgba(0,0,0,0.8),-8px_-8px_20px_rgba(16,185,129,0.05)]',
    buttonPrimary: 'neo-btn bg-emerald-500 text-stone-950 font-serif font-bold uppercase tracking-[0.25em] shadow-[6px_6px_18px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]',
    badgeBg: 'glass-card bg-[#101610]/90 text-emerald-400 border border-emerald-500/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]',
    specialFeature: {
      title: 'Secret Door Password',
      desc: 'Girişte güvenlik kapısına iletilmesi gereken günlük üye parolası SMS ile gönderilir.',
      badge: 'Confidential'
    }
  },

  crystalSuite: {
    id: 'crystalSuite',
    name: 'CRYSTAL & OAK SUITE',
    heroTitle: 'PURITY OF FLAVOR & CRYSTAL ELEGANCE',
    tagline: 'ULTRA-PREMIUM LIQUID GASTRONOMY',
    bgClass: 'bg-[#14161d]',
    textColor: 'text-slate-100',
    fontStyle: 'font-sans',
    accentText: 'text-stone-100',
    heroBgImage: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=1920&auto=format&fit=crop&q=80',
    cardBg: 'glass-card bg-[#14161d]/75 border border-white/20 shadow-[12px_12px_30px_rgba(0,0,0,0.8),-8px_-8px_20px_rgba(255,255,255,0.05)]',
    buttonPrimary: 'neo-btn bg-white text-black font-sans font-extrabold uppercase tracking-[0.25em] shadow-[6px_6px_18px_rgba(0,0,0,0.7),-4px_-4px_12px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]',
    badgeBg: 'glass-card bg-[#14161d]/90 text-stone-100 border border-white/30 shadow-[inset_3px_3px_6px_rgba(0,0,0,0.8)]',
    specialFeature: {
      title: 'Molecular Ice & Crystal Tasting',
      desc: 'Kişiye özel şekillendirilen elmas buz kesimleri ve moleküler sunum şovları dahildir.',
      badge: 'Molecular Art'
    }
  }
};

export const activeThemeConfig = THEMES[CURRENT_THEME_KEY];

export const BAR_DATA = {
  hours: 'Salı - Pazar: 18:00 - 04:00 (Özel Üye Girişi: 17:00)',
  location: 'Alsancak Mahallesi, Kordon Çıkmazı No: 12 VIP Suites, İzmir',
  phone: '+90 (232) 444 00 26',
  menu: [
    {
      id: 1,
      name: 'The Imperial Platinum Elixir',
      category: 'İmza Kokteyller',
      price: '₺750',
      desc: 'Safran İnfüze Cin, Platin Esanslı Likör, Mürver Çiçeği Özü & Fransız Şampanyası.',
      profile: 'Prestij • İpeksi • Çiçeksi',
      badge: 'Iconic Signature'
    },
    {
      id: 2,
      name: 'Smoked Vintage Single Barrel',
      category: 'İmza Kokteyller',
      price: '₺820',
      desc: '21 Yıllık Meşe Fıçıda Dinlendirilmiş Bourbon, İsli Akçaağaç Özü & Tütsülenmiş Biberiye Yağı.',
      profile: 'Gövdeli • İsli • Karamel Bitiş',
      badge: 'Limited Edition'
    },
    {
      id: 3,
      name: 'Black Truffle Manhattan',
      category: 'İmza Kokteyller',
      price: '₺890',
      desc: 'Rye Viski, Siyah İtalyan Trüf Mantarı Yağı Damlaları, Kırmızı Vermut & Bitter Çikolata.',
      profile: 'Kompleks • Gurme • Yoğun',
      badge: 'Chef Selection'
    },
    {
      id: 4,
      name: 'Lagavulin 16 Yrs Islay Reserve (4 cl)',
      category: 'Klasikler',
      price: '₺950',
      desc: 'İskoçya Islay Bölgesi Single Malt, Yoğun Turba İsi ve İyot Aromaları.',
      profile: 'Saf Turba • Ağır Gövdeli',
      badge: 'Private Vault'
    }
  ],
  events: [
    {
      id: 1,
      title: 'Exclusive Saxophone & Deep Lounge Ritual',
      date: 'Bu Cuma • 22:30',
      performer: 'DJ Markus & Live Sax Suite',
      desc: 'Canlı saksafon eşliğinde şampanya tadımı ve özel lounge atmosferi.',
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Analog Vinyl & Rare Spirits Night',
      date: 'Cumartesi • 21:30',
      performer: 'The Master Collectors',
      desc: 'Nadir 70-80’ler plak kayıtları eşliğinde mahzen tadım gecesi.',
      image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=600&auto=format&fit=crop&q=80'
    }
  ]
};