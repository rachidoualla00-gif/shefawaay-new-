import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AppSettings {
    language: 'ar' | 'fr';
    darkMode: boolean;
    prayerNotifications: boolean;
    adhanAudio: boolean;
    hadithDuaReminder: boolean;
}

interface UserLocation {
    latitude: number | null;
    longitude: number | null;
    city: string | null;
    country: string | null;
    timezone: string | null;
}

interface AppState {
    lastReadPage: number;
    quranBookmarks: number[];
    settings: AppSettings;
    location: UserLocation;
    setLastReadPage: (page: number) => void;
    toggleBookmark: (page: number) => void;
    updateSettings: (newSettings: Partial<AppSettings>) => void;
    setLocation: (loc: Partial<UserLocation>) => void;
}

export const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            lastReadPage: 1,
            quranBookmarks: [],
            settings: {
                language: 'ar',
                darkMode: false,
                prayerNotifications: true,
                adhanAudio: true,
                hadithDuaReminder: true,
            },
            location: {
                latitude: null,
                longitude: null,
                city: 'الدار البيضاء',
                country: 'المغرب',
                timezone: 'Africa/Casablanca',
            },
            setLastReadPage: (page) => set({ lastReadPage: page }),
            toggleBookmark: (page) =>
                set((state) => ({
                    quranBookmarks: state.quranBookmarks.includes(page)
                        ? state.quranBookmarks.filter((p) => p !== page)
                        : [...state.quranBookmarks, page],
                })),
            updateSettings: (newSettings) =>
                set((state) => ({ settings: { ...state.settings, ...newSettings } })),
            setLocation: (loc) =>
                set((state) => ({ location: { ...state.location, ...loc } })),
        }),
        {
            name: 'shefaaway-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
