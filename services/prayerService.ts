import { PrayerTimesData } from '../types';

export const getPrayerTimes = async (country: string, city: string): Promise<PrayerTimesData | null> => {
  try {
    const date = new Date();
    // Format: DD-MM-YYYY
    const dateStr = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity/${dateStr}?city=${city}&country=${country}&method=4`
    );
    
    if (!response.ok) return null;

    const data = await response.json();
    const timings = data.data.timings;
    
    return {
      Fajr: timings.Fajr,
      Sunrise: timings.Sunrise,
      Dhuhr: timings.Dhuhr,
      Asr: timings.Asr,
      Maghrib: timings.Maghrib,
      Isha: timings.Isha,
      date: data.data.date.readable
    };
  } catch (error) {
    console.error("Failed to fetch prayer times", error);
    return null;
  }
};