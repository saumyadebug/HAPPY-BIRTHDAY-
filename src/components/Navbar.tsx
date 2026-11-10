import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Music, Bell, Flame, ShieldAlert, Award, Heart, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

interface NavbarProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isPlayingBgm, setIsPlayingBgm] = useState(false);

  const toggleMusic = () => {
    const isPlaying = sound.toggleBGM((state) => setIsPlayingBgm(state));
    setIsPlayingBgm(isPlaying);
  };

  const navItems = [
    { id: 1, label: "Emergency", icon: ShieldAlert, color: "text-red-400" },
    { id: 2, label: "Idiot Report", icon: Award, color: "text-amber-400" },
    { id: 3, label: "Roast Gallery", icon: Flame, color: "text-orange-400" },
    { id: 4, label: "Plot Twist ❤️", icon: Heart, color: "text-pink-400" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/70 border-b border-red-500/20 px-4 py-3 transition-colors duration-500">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Logo */}
        <div
          onClick={() => {
            sound.playAlarm(400);
            setCurrentPage(1);
          }}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="p-2 bg-red-600/30 border border-red-500 rounded-lg group-hover:scale-105 transition-transform">
            <Bell className="w-5 h-5 text-red-500 animate-wiggle" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-tech text-xs tracking-wider text-red-400 font-bold uppercase">
                CONFIDENTIAL ROAST
              </span>
              <span className="bg-red-500/20 border border-red-500/50 text-red-300 text-[10px] px-1.5 py-0.2 rounded font-mono animate-pulse">
                LIVE
              </span>
            </div>
            <h1 className="font-digital text-sm md:text-base font-black tracking-tight text-white group-hover:text-yellow-400 transition-colors">
              ALARM_BIRTHDAY_v2.0
            </h1>
          </div>
        </div>

        {/* Page navigation pills */}
        <nav className="flex items-center gap-1 sm:gap-2 bg-neutral-900/80 p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 4) {
                    sound.playCheer();
                  } else {
                    sound.playAirHorn();
                  }
                  setCurrentPage(item.id);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-md shadow-red-600/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : item.color}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Controls: Audio & Airhorn */}
        <div className="flex items-center gap-2">
          {/* Airhorn Fun Button */}
          <button
            onClick={() => sound.playAirHorn()}
            title="Savage Airhorn!"
            className="flex items-center gap-1 px-2.5 py-1.5 bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-300 border border-yellow-400/30 rounded-lg text-xs font-mono font-bold transition hover:scale-105"
          >
            📢 <span className="hidden sm:inline">AIRHORN</span>
          </button>

          {/* Music Play/Pause */}
          <button
            onClick={toggleMusic}
            title={isPlayingBgm ? "Pause Party Music" : "Play Party Music (Safe Web Audio)"}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
              isPlayingBgm
                ? 'bg-green-500/20 border-green-500 text-green-300 shadow-[0_0_15px_rgba(34,197,94,0.3)] animate-pulse'
                : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
            }`}
          >
            <Music className={`w-3.5 h-3.5 ${isPlayingBgm ? 'text-green-400 animate-spin-slow' : 'text-gray-400'}`} />
            <span className="hidden sm:inline">
              {isPlayingBgm ? "MUSIC: PLAYING" : "PLAY MUSIC"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

