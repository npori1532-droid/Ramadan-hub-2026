import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

export const Tracker = () => {
  const [progress, setProgress] = useState<Record<string, boolean>>({
    fajr: false, dhuhr: false, asr: false, maghrib: false, isha: false
  });

  useEffect(() => {
    try {
      const saved = localStorage.getItem('ramadan_hub_tracker');
      if (saved) {
        setProgress(JSON.parse(saved));
      }
    } catch (e) {
      console.error("Failed to parse tracker data", e);
      localStorage.removeItem('ramadan_hub_tracker');
    }
  }, []);

  const togglePrayer = (key: string) => {
    const newProgress = { ...progress, [key]: !progress[key] };
    setProgress(newProgress);
    localStorage.setItem('ramadan_hub_tracker', JSON.stringify(newProgress));
  };

  const completedCount = Object.values(progress).filter(Boolean).length;
  const percentage = (completedCount / 5) * 100;

  const prayers = [
    { key: 'fajr', label: 'ফজর' },
    { key: 'dhuhr', label: 'যোহর' },
    { key: 'asr', label: 'আসর' },
    { key: 'maghrib', label: 'মাগরিব' },
    { key: 'isha', label: 'এশা' },
  ];

  return (
    <div 
      className="mt-6 bg-gradient-to-br from-emerald-900/80 to-emerald-950/80 backdrop-blur-md rounded-[2.5rem] p-6 text-white shadow-2xl relative overflow-hidden border border-emerald-500/30"
    >
      <div className="flex justify-between items-end mb-4">
        <div>
          <h4 className="font-black text-amber-400">সালাত ট্র্যাকার</h4>
          <p className="text-[10px] text-emerald-200 uppercase font-bold tracking-widest">দৈনিক ইবাদত</p>
        </div>
        <span className="text-3xl font-black text-white">{percentage}%</span>
      </div>
      
      <div className="h-3 bg-emerald-950/50 rounded-full overflow-hidden mb-6 border border-emerald-800/50">
        <div 
          className="h-full bg-gradient-to-r from-amber-600 to-amber-300 transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(245,158,11,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {prayers.map((p) => (
          <button
            key={p.key}
            onClick={() => togglePrayer(p.key)}
            className={`flex flex-col items-center py-2 rounded-2xl border transition-all duration-300 ${
              progress[p.key]
                ? 'bg-amber-500 border-amber-400 text-emerald-950 scale-105 shadow-lg shadow-amber-500/20'
                : 'bg-emerald-800/30 border-emerald-700/30 text-emerald-200 hover:bg-emerald-800/50'
            }`}
          >
            {progress[p.key] && <Check size={12} className="mb-1" />}
            <span className="text-[9px] font-black">{p.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
