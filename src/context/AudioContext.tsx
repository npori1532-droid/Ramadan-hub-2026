import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  currentSurah: { number: number; name: string } | null;
  progress: number;
  playSurah: (number: number, name: string) => void;
  togglePlay: () => void;
  closePlayer: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSurah, setCurrentSurah] = useState<{ number: number; name: string } | null>(null);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.ontimeupdate = () => {
      if (audioRef.current) {
        setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
      }
    };
    audioRef.current.onended = () => {
      setIsPlaying(false);
      setProgress(0);
    };
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playSurah = (number: number, name: string) => {
    if (!audioRef.current) return;
    
    // If clicking the same surah, just toggle
    if (currentSurah?.number === number) {
      togglePlay();
      return;
    }

    audioRef.current.src = `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${number}.mp3`;
    audioRef.current.play();
    setIsPlaying(true);
    setCurrentSurah({ number, name });
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
    setCurrentSurah(null);
  };

  return (
    <AudioContext.Provider value={{ isPlaying, currentSurah, progress, playSurah, togglePlay, closePlayer }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
