import { useState } from 'react';
import { User, X, Globe, Youtube, Send, Facebook } from 'lucide-react';

export const DeveloperProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-amber-400 shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform"
      >
        <img 
          src="https://www.gajarbotol.site/Tech_master/6725087e829496ef18b1bb00.gif" 
          alt="Developer Profile" 
          className="w-full h-full object-cover"
        />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 w-full max-w-xs rounded-[2rem] p-6 relative border border-emerald-500/30 shadow-2xl animate-in zoom-in-95 duration-200">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-emerald-200 hover:text-white bg-white/10 p-1 rounded-full transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col items-center text-center space-y-4 pt-2">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-400 shadow-xl shadow-amber-500/20">
                  <img 
                    src="https://res.cloudinary.com/dv62ty87r/image/upload/v1740003838/IMG_20250219_232333_591_x0w15o.jpg" 
                    alt="Developer Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-amber-400 text-emerald-950 text-[10px] font-black px-2 py-1 rounded-full shadow-lg border-2 border-emerald-900">
                  DEV
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-white">Tech Master</h3>
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-widest mt-1">Full Stack Developer</p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent my-2" />

              <div className="grid grid-cols-2 gap-3 w-full">
                <a 
                  href="https://www.facebook.com/share/1Dk7jpcp5t/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-blue-600/20 p-3 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all group"
                >
                  <Facebook size={20} className="text-blue-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-300">Facebook</span>
                </a>

                <a 
                  href="https://tech-master-web.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-emerald-600/20 p-3 rounded-2xl border border-white/10 hover:border-emerald-500/50 transition-all group"
                >
                  <Globe size={20} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-300">Website</span>
                </a>

                <a 
                  href="https://youtube.com/@masterjha2z720?si=EH7DuN1_WaqXnU_B" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-red-600/20 p-3 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all group"
                >
                  <Youtube size={20} className="text-red-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-300">Youtube</span>
                </a>

                <a 
                  href="https://t.me/tech_master_a2z" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 bg-white/5 hover:bg-sky-600/20 p-3 rounded-2xl border border-white/10 hover:border-sky-500/50 transition-all group"
                >
                  <Send size={20} className="text-sky-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-bold text-slate-300">Telegram</span>
                </a>
              </div>

              <div className="pt-2">
                <p className="text-[10px] text-emerald-400/60 font-medium">
                  © 2025 Tech Master. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
