import { PrayerTimes, HijriDate, Surah } from '../types';

const BASE_URL_ALADHAN = 'https://api.aladhan.com/v1';
const BASE_URL_QURAN = 'https://api.alquran.cloud/v1';

export const getPrayerTimes = async (lat: number, lng: number): Promise<{ timings: PrayerTimes; date: { hijri: HijriDate } } | null> => {
  try {
    const date = new Date().toLocaleDateString('en-GB').split('/').reverse().join('-');
    const response = await fetch(`${BASE_URL_ALADHAN}/timings/${date}?latitude=${lat}&longitude=${lng}&method=2&school=1`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    if (!data || !data.data) throw new Error('Invalid API response');
    return data.data;
  } catch (error) {
    console.error("Failed to fetch prayer times:", error);
    return null;
  }
};

export const getCalendar = async (lat: number, lng: number): Promise<any[]> => {
  try {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const response = await fetch(`${BASE_URL_ALADHAN}/calendar?latitude=${lat}&longitude=${lng}&method=2&school=1&month=${month}&year=${year}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch calendar:", error);
    return [];
  }
};

export const getSurahs = async (): Promise<Surah[]> => {
  try {
    const response = await fetch(`${BASE_URL_QURAN}/surah`);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Failed to fetch surahs:", error);
    return [];
  }
};

export const getAudioUrl = (surahNumber: number): string => {
  return `https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${surahNumber}.mp3`;
};

export const HIJRI_MONTHS_BN: Record<string, string> = {
  "Muharram": "মুহাররম",
  "Safar": "সফর",
  "Rabi' al-awwal": "রবিউল আউয়াল",
  "Rabi' al-thani": "রবিউস সানি",
  "Jumada al-ula": "জমাদিউল আউয়াল",
  "Jumada al-akhira": "জমাদিউস সানি",
  "Rajab": "রজব",
  "Sha'ban": "শাবান",
  "Ramadan": "রমজান",
  "Shawwal": "শাওয়াল",
  "Dhu al-Qi'dah": "জিলকদ",
  "Dhu al-Hijjah": "জিলহজ্জ"
};
