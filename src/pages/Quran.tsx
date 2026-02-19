import { useState, useEffect } from 'react';
import { getSurahs } from '../services/api';
import { Surah } from '../types';
import { useAudio } from '../context/AudioContext';
import { Play, Pause } from 'lucide-react';

export const Quran = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const { playSurah, currentSurah, isPlaying, togglePlay } = useAudio();

  useEffect(() => {
    getSurahs().then(setSurahs);
  }, []);

  return (
    <div className="pb-24 space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-emerald-950 leading-tight">আল-কুরআন</h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">তেলাওয়াত ও বঙ্গানুবাদ</p>
      </div>
      
      <div className="space-y-3">
        {surahs.map((surah) => {
          const isCurrent = currentSurah?.number === surah.number;
          
          return (
            <div 
              key={surah.number}
              onClick={() => playSurah(surah.number, surah.name)}
              className={`p-4 rounded-3xl shadow-sm border flex items-center gap-4 cursor-pointer transition-all active:scale-95 ${
                isCurrent 
                  ? 'bg-emerald-50 border-emerald-200' 
                  : 'bg-white border-slate-100 hover:border-emerald-100'
              }`}
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                isCurrent ? 'bg-emerald-600 text-white' : 'bg-emerald-50 text-emerald-700'
              }`}>
                {surah.number}
              </div>
              
              <div className="flex-1">
                <h4 className={`font-bold ${isCurrent ? 'text-emerald-900' : 'text-slate-800'}`}>
                  {surah.name}
                </h4>
                <p className="text-[10px] text-slate-400 font-bold uppercase">{surah.englishName}</p>
              </div>
              
              <div className="text-emerald-600">
                {isCurrent && isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" />}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
