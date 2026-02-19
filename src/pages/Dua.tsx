import { DUAS } from '../data/static';
import { Star } from 'lucide-react';

export const Dua = () => {
  return (
    <div className="pb-24 space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-emerald-950 leading-tight">দোয়া ও জিকির</h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">মাসনুন দোয়া সমূহ</p>
      </div>

      <div className="space-y-6">
        {DUAS.map((dua) => (
          <div key={dua.id} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm space-y-4 hover:shadow-md transition-shadow">
            <h4 className="font-black text-emerald-900 text-lg flex items-center gap-2">
              <Star size={16} className="text-amber-500 fill-amber-500" /> 
              {dua.title}
            </h4>
            <p className="text-2xl text-right font-serif text-emerald-800 leading-relaxed dir-rtl" style={{ fontFamily: 'Amiri, serif' }}>
              {dua.arabic}
            </p>
            <div className="p-4 bg-emerald-50 rounded-2xl">
              <p className="text-[9px] font-black text-emerald-600 uppercase mb-1">উচ্চারণ</p>
              <p className="text-[13px] text-slate-700 font-medium leading-relaxed">{dua.pronunciation}</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl">
              <p className="text-[9px] font-black text-amber-600 uppercase mb-1">অনুবাদ</p>
              <p className="text-[13px] text-emerald-950 font-bold leading-relaxed">{dua.meaning}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
