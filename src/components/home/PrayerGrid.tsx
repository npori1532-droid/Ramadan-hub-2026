import { PrayerTimes } from '../../types';
import { Sunrise, Sun, Sunset, Moon, CloudSun } from 'lucide-react';

interface PrayerGridProps {
  prayerTimes: PrayerTimes | null;
}

export const PrayerGrid = ({ prayerTimes }: PrayerGridProps) => {
  if (!prayerTimes) return <div className="h-40 bg-white/10 rounded-3xl animate-pulse mt-6" />;

  const prayers = [
    { name: 'ফজর', time: prayerTimes.Fajr, icon: Sunrise },
    { name: 'যোহর', time: prayerTimes.Dhuhr, icon: Sun },
    { name: 'আসর', time: prayerTimes.Asr, icon: CloudSun },
    { name: 'মাগরিব', time: prayerTimes.Maghrib, icon: Sunset },
    { name: 'এশা', time: prayerTimes.Isha, icon: Moon },
    { name: 'সূর্যোদয়', time: prayerTimes.Sunrise, icon: Sun },
  ];

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-black text-white text-lg drop-shadow-md">নামাজের সময়সূচী</h3>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {prayers.map((prayer) => (
          <div
            key={prayer.name}
            className="bg-white/10 backdrop-blur-md p-4 rounded-3xl shadow-lg border border-white/10 flex flex-col items-center hover:bg-white/20 transition-all group"
          >
            <prayer.icon size={24} className="text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-bold text-emerald-100 uppercase tracking-wide">{prayer.name}</span>
            <span className="text-[13px] font-black text-white mt-1">{prayer.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
