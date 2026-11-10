import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Volume2, AlertCircle, X, Sparkles } from 'lucide-react';
import { sound } from '../utils/audio';

const ALARM_ROASTS = [
  "🚨 WAKE UP! SLEEP IS FOR THE WEAK!",
  "⚠️ SNOOZE DENIED! You have 0 snooze tokens remaining.",
  "😈 YOU CANNOT ESCAPE ME. I AM YOUR 6:00 AM NIGHTMARE.",
  "📚 EXAM STARTS IN 15 MINUTES! (Just kidding, but remember that panic?)",
  "⏰ BEEP BEEP BEEP! Rise and shine, Mr. Human Alarm Clock!",
  "💀 The only thing louder than this alarm is his voice at 6 AM.",
  "⚡ Fun fact: He was born at 120 decibels.",
  "😴 Thinking of sleeping in? Not on Adarsh's watch!",
  "☕ Drinking coffee? Cute. He has caffeine flowing in his veins naturally.",
  "🚫 Sleep privileges officially revoked by order of ALARM.",
];

export const FloatingAlarm: React.FC = () => {
  const [currentRoast, setCurrentRoast] = useState<string>("🚨 WAKE UP! SNOOZE DENIED!");
  const [showBubble, setShowBubble] = useState<boolean>(true);
  const [isRinging, setIsRinging] = useState<boolean>(false);
  const [clickCount, setClickCount] = useState<number>(0);

  // Rotate random roast every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * ALARM_ROASTS.length);
      setCurrentRoast(ALARM_ROASTS[randomIdx]);
      setShowBubble(true);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    sound.playAlarm();
    setIsRinging(true);
    setClickCount(prev => prev + 1);
    const nextRoast = ALARM_ROASTS[(clickCount + 1) % ALARM_ROASTS.length];
    setCurrentRoast(nextRoast);
    setShowBubble(true);

    setTimeout(() => {
      setIsRinging(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3 select-none">
      {/* Speech Bubble */}
      <AnimatePresence>
        {showBubble && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="relative max-w-xs bg-black/90 text-yellow-300 border-2 border-red-500 rounded-2xl p-3 shadow-2xl backdrop-blur-md hidden sm:block"
          >
            <button
              onClick={() => setShowBubble(false)}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-0.5 hover:bg-red-700 transition"
              title="Dismiss for now"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="text-xs font-tech font-bold leading-relaxed text-red-200">
              {currentRoast}
            </p>
            {/* Speech bubble arrow pointer */}
            <div className="absolute right-[-8px] bottom-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-red-500" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated Alarm Button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        animate={isRinging ? {
          rotate: [-15, 15, -15, 15, 0],
          scale: [1, 1.25, 1.1, 1.25, 1],
          transition: { repeat: Infinity, duration: 0.3 }
        } : {
          y: [0, -6, 0],
          transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" }
        }}
        title="Click to ring ALARM!"
        className="relative group p-4 bg-gradient-to-br from-red-600 via-rose-600 to-amber-600 text-white rounded-full shadow-[0_0_25px_rgba(255,26,64,0.6)] border-2 border-yellow-300 hover:shadow-[0_0_35px_rgba(255,26,64,0.9)] cursor-pointer focus:outline-none"
      >
        {/* Pulsing ring waves */}
        <span className="absolute -inset-1 rounded-full bg-red-500 opacity-40 group-hover:opacity-80 animate-ping" />
        
        {/* Alarm Clock Icon */}
        <div className="relative flex items-center justify-center">
          <Bell className="w-7 h-7 text-yellow-200 animate-pulse" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
          </span>
        </div>

        {/* Small badge */}
        <span className="absolute -bottom-2 -left-2 bg-yellow-400 text-black text-[9px] font-black px-1.5 py-0.5 rounded-full border border-black uppercase font-digital">
          ALARM
        </span>
      </motion.button>
    </div>
  );
};

