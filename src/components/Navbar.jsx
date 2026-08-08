import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CalendarCheck } from 'lucide-react';

export default function Navbar({ activeTheme }) {
  const theme = activeTheme;
  const navigate = useNavigate();

  // Ana Sayfa butonu listeden çıkarıldı
  const navItems = [
    { name: 'Hakkımızda', path: '/about' },
    { name: 'Menü', path: '/menu' },
    { name: 'Etkinlikler', path: '/events' },
    { name: 'İletişim', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-2xl bg-black/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className={`text-2xl font-bold tracking-widest text-white ${theme?.fontStyle}`}>
          {theme?.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-widest font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-all ${isActive ? `${theme?.accentText} font-bold` : 'text-stone-300 hover:text-white'}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <button 
          onClick={() => navigate('/reservation')} 
          className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs uppercase tracking-widest transition-all ${theme?.buttonPrimary}`}
        >
          <CalendarCheck size={16} /> Masa Ayırt
        </button>
      </div>
    </header>
  );
}