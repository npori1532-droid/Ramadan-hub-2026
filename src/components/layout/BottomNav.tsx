import { Home, BookOpen, Heart, Activity, Sparkles, CalendarDays } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  const tabs = [
    { id: 'home', label: 'হোম', icon: Home },
    { id: 'calendar', label: 'সময়সূচী', icon: CalendarDays },
    { id: 'quran', label: 'কুরআন', icon: BookOpen },
    { id: 'amol', label: 'আমল', icon: Sparkles },
    { id: 'tasbeeh', label: 'তাসবিহ', icon: Activity },
    { id: 'dua', label: 'দোয়া', icon: Heart },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white/10 backdrop-blur-xl border-t border-white/20 px-2 py-3 flex justify-between items-center z-50 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.2)] overflow-x-auto">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 transition-all duration-300 p-2 rounded-xl min-w-[60px] ${
              isActive 
                ? 'text-amber-400 bg-emerald-900/50 scale-110' 
                : 'text-emerald-100/60 hover:text-emerald-100 hover:bg-emerald-900/30'
            }`}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[8px] font-black uppercase tracking-wide">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
