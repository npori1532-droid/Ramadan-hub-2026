import { PrayerTimes, HijriDate } from '../../types';

interface HeroCardProps {
  prayerTimes: PrayerTimes | null;
  hijriDate: HijriDate | null;
}

export const HeroCard = ({ prayerTimes, hijriDate }: HeroCardProps) => {
  if (!prayerTimes || !hijriDate) {
    return (
      <div className="h-64 bg-white/10 rounded-[2.5rem] animate-pulse" />
    );
  }

  return (
    <div 
      className="bg-gradient-to-br from-emerald-600/20 via-emerald-800/20 to-emerald-900/20 backdrop-blur-xl rounded-[2.5rem] p-6 text-white shadow-2xl relative overflow-hidden border border-white/10"
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-amber-300 font-bold text-sm drop-shadow-sm">আসসালামু আলাইকুম</p>
            <h2 className="text-2xl font-black mt-1 drop-shadow-md">পরবর্তী সালাত</h2>
            <p className="text-amber-200 font-black text-lg mt-1 tracking-tight drop-shadow-sm">
              {/* Placeholder for countdown logic */}
              নামাজের সময় দেখুন
            </p>
          </div>
          <div className="bg-emerald-950/40 backdrop-blur-md p-3 rounded-2xl text-center min-w-[80px] border border-emerald-500/30 shadow-inner">
            <span className="text-[10px] font-black block uppercase tracking-tighter text-emerald-200">
              {hijriDate.month.en}
            </span>
            <span className="text-2xl font-black leading-none text-white">
              {hijriDate.day}
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-emerald-950/40 backdrop-blur-md rounded-3xl p-4 border border-emerald-500/20 shadow-lg">
            <p className="text-[10px] text-emerald-200 font-bold uppercase mb-1">সেহরি শেষ</p>
            <p className="text-2xl font-black text-amber-400 drop-shadow-sm">{prayerTimes.Imsak}</p>
          </div>
          <div className="bg-emerald-950/40 backdrop-blur-md rounded-3xl p-4 border border-emerald-500/20 shadow-lg">
            <p className="text-[10px] text-emerald-200 font-bold uppercase mb-1">ইফতারের সময়</p>
            <p className="text-2xl font-black text-amber-400 drop-shadow-sm">{prayerTimes.Maghrib}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
