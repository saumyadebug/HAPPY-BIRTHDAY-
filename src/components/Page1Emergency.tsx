import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  AlertTriangle, 
  Clock, 
  Siren, 
  Volume2, 
  Zap, 
  Skull, 
  Bed, 
  Coffee,
  XCircle,
  Radio,
  ArrowRight
} from 'lucide-react';
import { sound } from '../utils/audio';

interface Page1Props {
  onNext: () => void;
}

export const Page1Emergency: React.FC<Page1Props> = ({ onNext }) => {
  const [snoozeError, setSnoozeError] = useState<string | null>(null);
  const [clockSeconds, setClockSeconds] = useState(0);
  const [colonVisible, setColonVisible] = useState(true);

  // Digital clock blinking colon effect
  useEffect(() => {
    const timer = setInterval(() => {
      setColonVisible(prev => !prev);
      setClockSeconds(s => (s + 1) % 60);
    }, 600);
    return () => clearInterval(timer);
  }, []);

  const handleSnooze = () => {
    sound.playBuzzer();
    const roasts = [
      "⚠️ ERROR 404: SNOOZE FEATURE NOT SUPPORTED BY ADARSH!",
      "🚫 SNOOZE REJECTED: Subject 'ALARM' does not believe in letting you sleep!",
      "💀 YOU WISH! Alarm has called your phone 14 times already!",
      "📵 SNOOZE DENIED: Exam is coming and ALARM won't shut up!",
    ];
    setSnoozeError(roasts[Math.floor(Math.random() * roasts.length)]);
    setTimeout(() => setSnoozeError(null), 3500);
  };

  const handleDismiss = () => {
    sound.playAlarm();
    setSnoozeError("🚨 ACCESS DENIED: The Human Alarm Clock is permanently ON!");
    setTimeout(() => setSnoozeError(null), 3000);
  };

  return (
    <div className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 py-8 overflow-hidden siren-bg">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ff1a40_1px,transparent_1px)] [background-size:28px_28px] opacity-15 pointer-events-none" />
      
      {/* Flashing Police / Emergency Beacons */}
      <div className="absolute top-6 left-6 flex items-center gap-2 bg-red-600/30 border border-red-500/60 px-3 py-1.5 rounded-full backdrop-blur-md animate-pulse">
        <Siren className="w-4 h-4 text-red-500 animate-spin" />
        <span className="font-tech text-xs tracking-widest text-red-400 font-extrabold uppercase">
          DEFCON 1: ALARM DETECTED
        </span>
      </div>

      <div className="absolute top-6 right-6 flex items-center gap-2 bg-amber-500/20 border border-amber-500/60 px-3 py-1.5 rounded-full backdrop-blur-md">
        <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
        <span className="font-tech text-xs tracking-widest text-amber-300 font-bold uppercase">
          FREQUENCY: 120dB EXAM PANIC
        </span>
      </div>

      {/* Floating Animated Alarm Clocks */}
      <motion.div
        animate={{ y: [-10, 15, -10], rotate: [-10, 15, -10] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-28 left-4 md:left-16 opacity-30 md:opacity-60 pointer-events-none"
      >
        <div className="p-4 bg-red-950/80 border-2 border-red-500/50 rounded-2xl shadow-[0_0_20px_rgba(255,0,0,0.4)]">
          <Clock className="w-12 h-12 text-red-500" />
          <span className="text-[10px] font-digital text-red-300 block text-center mt-1">6:00 AM</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [15, -12, 15], rotate: [12, -8, 12] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-28 right-4 md:right-16 opacity-30 md:opacity-60 pointer-events-none"
      >
        <div className="p-4 bg-purple-950/80 border-2 border-cyan-500/50 rounded-2xl shadow-[0_0_20px_rgba(0,240,255,0.4)]">
          <Bell className="w-12 h-12 text-cyan-400 animate-bounce" />
          <span className="text-[10px] font-digital text-cyan-300 block text-center mt-1">NO SNOOZE</span>
        </div>
      </motion.div>

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
        
        {/* Fake System Notification Banner */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-red-950/90 border-2 border-red-500 text-red-200 shadow-[0_0_25px_rgba(255,26,64,0.6)] backdrop-blur-md"
        >
          <AlertTriangle className="w-5 h-5 text-red-400 animate-bounce" />
          <span className="font-tech text-xs md:text-sm font-extrabold tracking-wider uppercase text-yellow-300">
            WARNING: ALARM DETECTED. SLEEP PRIVILEGES REVOKED.
          </span>
        </motion.div>

        {/* Headings */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl md:text-3xl animate-bounce">🚨</span>
            <h2 className="font-tech text-xl md:text-2xl font-black tracking-widest text-red-500 uppercase glow-red">
              EMERGENCY ALERT
            </h2>
            <span className="text-2xl md:text-3xl animate-bounce">🚨</span>
          </div>

          <h1 className="font-digital text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight mb-4 drop-shadow-[0_4px_15px_rgba(255,0,0,0.5)]">
            THE HUMAN ALARM CLOCK <br />
            <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
              WAS BORN TODAY!
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-gray-300 font-medium leading-relaxed mb-8">
            <span className="text-yellow-400 font-bold">Breaking news:</span> The only person who can disturb someone's sleep without being paid for it is celebrating his birthday today.
          </p>
        </motion.div>

        {/* GIANT ANIMATED DIGITAL ALARM CLOCK */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-xl mx-auto my-4 p-6 sm:p-8 rounded-3xl bg-black/90 border-4 border-red-600/80 box-glow-red backdrop-blur-xl flex flex-col items-center"
        >
          {/* Top Clock Bells decoration */}
          <div className="absolute -top-6 flex justify-between w-48 px-4">
            <div className="w-12 h-6 bg-gradient-to-t from-red-700 to-amber-500 rounded-t-full border-2 border-yellow-300 shadow-md transform -rotate-12" />
            <div className="w-12 h-6 bg-gradient-to-t from-red-700 to-amber-500 rounded-t-full border-2 border-yellow-300 shadow-md transform rotate-12" />
          </div>

          {/* Clock Header */}
          <div className="flex items-center justify-between w-full mb-3 px-2 border-b border-red-900/60 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
              <span className="font-tech text-xs tracking-widest text-red-400 font-bold">
                SYSTEM: PERMANENT_ROAST
              </span>
            </div>
            <span className="font-tech text-xs text-yellow-400 font-bold">
              TARGET: ADARSH (ALARM)
            </span>
          </div>

          {/* Digital Clock Display */}
          <div className="bg-[#0e0004] w-full py-6 px-4 rounded-2xl border-2 border-red-500/50 flex flex-col items-center justify-center relative overflow-hidden">
            <div className="font-digital text-5xl sm:text-7xl md:text-8xl font-black text-red-500 tracking-wider flex items-center justify-center drop-shadow-[0_0_20px_rgba(255,26,64,0.9)]">
              <span>12</span>
              <span className={`mx-1 text-yellow-400 transition-opacity ${colonVisible ? 'opacity-100' : 'opacity-20'}`}>:</span>
              <span>00</span>
              <span className="text-xl sm:text-2xl md:text-3xl text-amber-400 ml-3 font-tech">AM</span>
            </div>
            
            <div className="mt-2 text-xs sm:text-sm font-mono text-red-300 tracking-widest uppercase flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-yellow-400 animate-bounce" />
              STATUS: LOUD & ANNOYING • 0 HOURS OF PEACE
            </div>
          </div>

          {/* Interactive Clock Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-5 w-full">
            <button
              onClick={handleSnooze}
              className="px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-yellow-300 font-tech font-bold text-sm rounded-xl border border-yellow-500/50 hover:border-yellow-400 transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md cursor-pointer"
            >
              <Bed className="w-4 h-4 text-yellow-400" />
              PRESS SNOOZE 😴
            </button>
            <button
              onClick={handleDismiss}
              className="px-5 py-2.5 bg-red-950 hover:bg-red-900 text-red-300 font-tech font-bold text-sm rounded-xl border border-red-500/50 hover:border-red-400 transition hover:scale-105 active:scale-95 flex items-center gap-2 shadow-md cursor-pointer"
            >
              <XCircle className="w-4 h-4 text-red-400" />
              DISMISS ALARM ❌
            </button>
          </div>

          {/* Error Message if Snooze clicked */}
          <AnimatePresence>
            {snoozeError && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-4 p-3 bg-red-900/90 border border-yellow-400 text-yellow-200 text-xs sm:text-sm font-bold font-tech rounded-xl text-center w-full shadow-lg"
              >
                {snoozeError}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Funny Cartoon Wake-up Illustration & Crime Record */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 w-full max-w-2xl bg-neutral-900/70 border border-white/10 rounded-2xl p-4 sm:p-5 backdrop-blur-md flex flex-col sm:flex-row items-center gap-4 text-left"
        >
          {/* Funny Angry Woken-up Cartoon SVG */}
          <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-red-600/30 to-purple-600/30 border-2 border-red-500/50 rounded-2xl flex items-center justify-center p-2 relative overflow-hidden shadow-inner">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Bed sheet / pillow */}
              <rect x="15" y="60" width="70" height="30" rx="6" fill="#4a5568" />
              <path d="M 10 75 Q 50 85 90 75 L 85 90 L 15 90 Z" fill="#2d3748" />
              {/* Angry woken up face */}
              <circle cx="50" cy="45" r="25" fill="#fbd38d" stroke="#c05621" strokeWidth="2" />
              {/* Disheveled crazy morning hair */}
              <path d="M 28 35 Q 35 15 45 28 Q 50 10 58 25 Q 68 12 72 35" fill="none" stroke="#2d3748" strokeWidth="5" strokeLinecap="round" />
              {/* Furious angry red eyes */}
              <circle cx="42" cy="42" r="5" fill="#ff0000" />
              <circle cx="42" cy="42" r="2" fill="#000" />
              <line x1="36" y1="35" x2="48" y2="40" stroke="#000" strokeWidth="2" />
              
              <circle cx="58" cy="42" r="5" fill="#ff0000" />
              <circle cx="58" cy="42" r="2" fill="#000" />
              <line x1="64" y1="35" x2="52" y2="40" stroke="#000" strokeWidth="2" />
              {/* Screaming open mouth */}
              <ellipse cx="50" cy="55" rx="8" ry="6" fill="#742a2a" />
              {/* Angry steam puff */}
              <path d="M 75 35 Q 85 30 80 20" stroke="#ff4d4d" strokeWidth="2" fill="none" />
              <path d="M 25 35 Q 15 30 20 20" stroke="#ff4d4d" strokeWidth="2" fill="none" />
            </svg>
            <span className="absolute bottom-1 bg-black/80 text-[9px] font-mono text-red-400 px-1 rounded">
              VICTIM #1
            </span>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <Skull className="w-4 h-4 text-red-400" />
              <span className="font-tech text-xs uppercase tracking-wider text-red-400 font-extrabold">
                CRIMINAL DOSSIER: MORNING DISRUPTION
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-200 font-semibold leading-snug">
              "Known for waking people up during exams. Wanted for crimes against peaceful mornings."
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Special ability: Can detect when someone is sleeping at 5:59 AM and call exactly at 6:00 AM with zero hesitation.
            </p>
          </div>
        </motion.div>

        {/* Big Animated CTA Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-8 mb-4 w-full max-w-md"
        >
          <button
            onClick={() => {
              sound.playAirHorn();
              onNext();
            }}
            className="group relative w-full py-4 px-6 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-tech font-extrabold text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(255,26,64,0.7)] hover:shadow-[0_0_45px_rgba(255,26,64,0.9)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center justify-center gap-3 border-2 border-yellow-300"
          >
            <span>WAKE UP AND ENTER YOUR OWN BIRTHDAY ROAST 💀</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </button>
          <p className="text-xs text-gray-500 mt-2 font-mono">
            Proceed with caution: Savage emotional damage guaranteed ahead.
          </p>
        </motion.div>

      </div>
    </div>
  );
};

