import { ALLAH_NAMES } from '../data/static';

export const Names = () => {
  return (
    <div className="pb-24 space-y-6">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-emerald-950 leading-tight">আল্লাহর ৯৯ নাম</h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">অর্থ ও ফজিলত</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {ALLAH_NAMES.map((name) => (
          <div key={name.id} className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center text-center group hover:border-emerald-200 transition-colors">
            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
              <span className="text-xl font-serif text-emerald-700" style={{ fontFamily: 'Amiri, serif' }}>
                {name.arabic}
              </span>
            </div>
            <h4 className="font-black text-slate-800 text-sm">{name.bangla}</h4>
            <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">{name.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
