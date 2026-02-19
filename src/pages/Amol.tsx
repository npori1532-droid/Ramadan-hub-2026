import { RAMADAN_AMOL } from '../data/amol';
import { Star, Clock } from 'lucide-react';

export const Amol = () => {
  return (
    <div className="pb-24 space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-white leading-tight">রমজানের আমল</h2>
        <p className="text-xs text-emerald-200 font-bold uppercase tracking-wider">দৈনন্দিন ইবাদত</p>
      </div>

      <div className="space-y-4">
        {RAMADAN_AMOL.map((amol) => (
          <div key={amol.id} className="bg-white/10 backdrop-blur-md p-5 rounded-[2rem] border border-white/20 shadow-lg hover:bg-white/20 transition-all">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-black text-amber-300 text-lg flex items-center gap-2">
                <Star size={18} className="fill-amber-300" />
                {amol.title}
              </h4>
              <span className="text-[10px] bg-emerald-800/50 px-2 py-1 rounded-full text-emerald-100 flex items-center gap-1">
                <Clock size={10} />
                {amol.time}
              </span>
            </div>
            <p className="text-sm text-white/90 leading-relaxed font-medium">
              {amol.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
