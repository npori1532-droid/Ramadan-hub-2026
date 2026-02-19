import { useState, useEffect } from 'react';
import { RotateCcw, Plus } from 'lucide-react';

export const Tasbeeh = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState(33);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('tasbeeh_count');
      if (saved) setCount(parseInt(saved) || 0);
    } catch (e) {
      console.error("Failed to parse tasbeeh count", e);
    }
  }, []);

  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('tasbeeh_count', newCount.toString());
    
    // Haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    if (newCount % target === 0 && navigator.vibrate) {
      navigator.vibrate([100, 50, 100]);
    }
  };

  const reset = () => {
    if (confirm('আপনি কি গণনা রিসেট করতে চান?')) {
      setCount(0);
      localStorage.setItem('tasbeeh_count', '0');
    }
  };

  return (
    <div className="pb-24 space-y-6 h-[calc(100vh-180px)] flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl font-black text-emerald-950 leading-tight">ডিজিটাল তাসবিহ</h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">গণনা করুন</p>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-full"></div>
          <div className="relative bg-white w-64 h-64 rounded-full shadow-2xl border-8 border-slate-50 flex items-center justify-center">
            <div className="text-center">
              <span className="text-6xl font-black text-emerald-900 tabular-nums block">{count}</span>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">মোট পাঠ</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4 w-full max-w-xs">
          <button
            onClick={reset}
            className="flex-1 bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold uppercase text-xs flex flex-col items-center gap-2 hover:bg-slate-200 transition-colors active:scale-95"
          >
            <RotateCcw size={20} />
            রিসেট
          </button>
          
          <button
            onClick={increment}
            className="flex-[2] bg-emerald-600 text-white py-4 rounded-2xl font-black uppercase text-lg shadow-lg shadow-emerald-600/30 flex flex-col items-center gap-2 hover:bg-emerald-700 transition-colors active:scale-95"
          >
            <Plus size={32} />
            গণনা
          </button>
        </div>

        <div className="flex gap-2">
            {[33, 99, 100].map(t => (
                <button 
                    key={t}
                    onClick={() => setTarget(t)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-colors ${target === t ? 'bg-emerald-100 text-emerald-700' : 'bg-white text-slate-400 border border-slate-100'}`}
                >
                    {t}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};
