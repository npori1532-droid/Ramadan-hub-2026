import { useState, useEffect } from 'react';
import { getPrayerTimes } from '../services/api';
import { HeroCard } from '../components/home/HeroCard';
import { PrayerGrid } from '../components/home/PrayerGrid';
import { Tracker } from '../components/home/Tracker';
import { PrayerTimes as PrayerTimesType, HijriDate } from '../types';
import { DISTRICTS } from '../data/districts';
import { MapPin, ChevronDown } from 'lucide-react';

export const Home = () => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesType | null>(null);
  const [hijriDate, setHijriDate] = useState<HijriDate | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS[0]); // Default Dhaka
  const [showDistrictSelector, setShowDistrictSelector] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getPrayerTimes(selectedDistrict.lat, selectedDistrict.lng);
        if (data) {
          setPrayerTimes(data.timings);
          setHijriDate(data.date.hijri);
          setError(null);
        } else {
          setError("তথ্য লোড করতে সমস্যা হয়েছে।");
        }
      } catch (err) {
        console.error(err);
        setError("একটি অপ্রত্যাশিত সমস্যা হয়েছে।");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDistrict]);

  return (
    <div className="space-y-6 pb-24">
      {/* District Selector */}
      <div className="relative z-40">
        <button 
          onClick={() => setShowDistrictSelector(!showDistrictSelector)}
          className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-bold shadow-lg mx-auto hover:bg-white/20 transition-all"
        >
          <MapPin size={16} className="text-amber-400" />
          <span>{selectedDistrict.name}, বাংলাদেশ</span>
          <ChevronDown size={16} className={`text-white/60 transition-transform ${showDistrictSelector ? 'rotate-180' : ''}`} />
        </button>

        {showDistrictSelector && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl max-h-64 overflow-y-auto p-2 border border-white/50">
            <div className="grid grid-cols-2 gap-1">
              {DISTRICTS.map((district) => (
                <button
                  key={district.id}
                  onClick={() => {
                    setSelectedDistrict(district);
                    setShowDistrictSelector(false);
                  }}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    selectedDistrict.id === district.id 
                      ? 'bg-emerald-600 text-white' 
                      : 'text-slate-700 hover:bg-emerald-50'
                  }`}
                >
                  {district.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <HeroCard prayerTimes={prayerTimes} hijriDate={hijriDate} />
      <PrayerGrid prayerTimes={prayerTimes} />
      <Tracker />
    </div>
  );
};
