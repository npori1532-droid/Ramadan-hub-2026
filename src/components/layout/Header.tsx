import { MapPin } from 'lucide-react';

import { DeveloperProfile } from '../profile/DeveloperProfile';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 relative group">
          <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-lg group-hover:bg-amber-400/30 transition-all duration-500"></div>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/4358/4358666.png" 
            alt="Ramadan Logo" 
            className="w-full h-full object-contain drop-shadow-2xl relative z-10 animate-pulse-slow hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div>
          <h1 className="font-black text-white leading-none text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-tight">
            Ramadan <span className="text-amber-400">Hub</span>
          </h1>
          <span className="text-[10px] font-bold text-emerald-200 tracking-[0.2em] uppercase drop-shadow-sm block mt-1">ইসলামিক হাব</span>
        </div>
      </div>
      
      <DeveloperProfile />
    </header>
  );
};
