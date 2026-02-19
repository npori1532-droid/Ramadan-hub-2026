import { useAudio } from '../../context/AudioContext';
import { Play, Pause, X, Disc } from 'lucide-react';

export const PlayerBar = () => {
  const { currentSurah, isPlaying, progress, togglePlay, closePlayer } = useAudio();

  if (!currentSurah) return null;

  return (
    <div
      className="fixed bottom-24 left-4 right-4 max-w-[calc(100%-2rem)] md:max-w-[26rem] mx-auto bg-emerald-900 text-white p-3 rounded-2xl shadow-2xl z-40 transition-all duration-300 animate-in slide-in-from-bottom-10 fade-in"
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center ${isPlaying ? 'animate-spin' : ''}`} style={{ animationDuration: '3s' }}>
          <Disc size={20} className="text-emerald-900" />
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="font-bold text-xs truncate">প্লে হচ্ছে: {currentSurah.name}</p>
          <div className="h-1 bg-white/20 rounded-full mt-1 w-full overflow-hidden">
            <div 
              className="h-full bg-amber-400 transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <button 
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full hover:bg-white/20 transition-colors"
        >
          {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" />}
        </button>
        <button 
          onClick={closePlayer}
          className="text-white/40 hover:text-white transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};
