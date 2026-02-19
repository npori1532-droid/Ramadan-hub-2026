import { useState, useEffect } from 'react';
import { getCalendar } from '../services/api';
import { DISTRICTS } from '../data/districts';
import { MapPin, Calendar as CalendarIcon, ChevronDown, Search } from 'lucide-react';

export const Calendar = () => {
  const [schedule, setSchedule] = useState<any[]>([]);
  const [selectedDistrict, setSelectedDistrict] = useState(DISTRICTS[0]);
  const [loading, setLoading] = useState(true);
  const [showDistrictSelector, setShowDistrictSelector] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCalendar(selectedDistrict.lat, selectedDistrict.lng);
      setSchedule(data);
      setLoading(false);
    };
    fetchData();
  }, [selectedDistrict]);

  const filteredDistricts = DISTRICTS.filter(d => 
    d.name.includes(searchTerm) || d.id.includes(searchTerm.toLowerCase())
  );

  const today = new Date().getDate();

  return (
    <div className="pb-24 space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-white leading-tight">রমজানের সময়সূচী</h2>
        <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">সেহরি ও ইফতারের সময়</p>
      </div>

      {/* District Selector */}
      <div className="relative z-40">
        <button 
          onClick={() => setShowDistrictSelector(!showDistrictSelector)}
          className="w-full flex items-center justify-between bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl text-white font-bold shadow-lg hover:bg-white/20 transition-all"
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-amber-400" />
            <span>{selectedDistrict.name}</span>
          </div>
          <ChevronDown size={18} className={`text-white/60 transition-transform ${showDistrictSelector ? 'rotate-180' : ''}`} />
        </button>

        {showDistrictSelector && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-emerald-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
            <div className="p-3 border-b border-white/10">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-300" />
                <input 
                  type="text" 
                  placeholder="জেলা খুঁজুন..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-black/20 text-white text-sm rounded-xl pl-9 pr-3 py-2 outline-none placeholder:text-emerald-500/50"
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-64 overflow-y-auto p-2 grid grid-cols-2 gap-1">
              {filteredDistricts.map((district) => (
                <button
                  key={district.id}
                  onClick={() => {
                    setSelectedDistrict(district);
                    setShowDistrictSelector(false);
                  }}
                  className={`text-left px-3 py-2 rounded-xl text-xs font-bold transition-colors ${
                    selectedDistrict.id === district.id 
                      ? 'bg-amber-500 text-emerald-950' 
                      : 'text-emerald-100 hover:bg-white/10'
                  }`}
                >
                  {district.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Schedule Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-[2rem] border border-white/20 overflow-hidden shadow-xl">
        <div className="grid grid-cols-4 bg-emerald-900/50 p-4 text-[10px] font-black text-emerald-200 uppercase tracking-wider text-center">
          <div>তারিখ</div>
          <div>বার</div>
          <div>সেহরি</div>
          <div>ইফতার</div>
        </div>
        
        <div className="divide-y divide-white/10 max-h-[60vh] overflow-y-auto">
          {loading ? (
            <div className="p-8 text-center text-emerald-200 animate-pulse">লোড হচ্ছে...</div>
          ) : (
            schedule.map((day, index) => {
              const date = new Date(day.date.readable);
              const dayNum = date.getDate();
              const isToday = dayNum === today;
              const dayName = date.toLocaleDateString('bn-BD', { weekday: 'short' });
              const dateStr = date.toLocaleDateString('bn-BD', { day: 'numeric', month: 'short' });

              return (
                <div 
                  key={index} 
                  className={`grid grid-cols-4 p-4 text-center items-center transition-colors ${
                    isToday ? 'bg-amber-500/20 text-amber-200 font-bold' : 'text-white hover:bg-white/5'
                  }`}
                >
                  <div className="text-xs">{dateStr}</div>
                  <div className="text-xs opacity-70">{dayName}</div>
                  <div className="text-sm font-black text-emerald-300">{day.timings.Imsak.replace(' (BST)', '')}</div>
                  <div className="text-sm font-black text-amber-400">{day.timings.Maghrib.replace(' (BST)', '')}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
