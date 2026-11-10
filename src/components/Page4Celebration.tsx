import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Heart, 
  Gift, 
  RotateCcw, 
  PartyPopper, 
  Flame, 
  Check, 
  Cake as CakeIcon,
  Smile,
  Clock,
  Volume2
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PhotoUploader } from './PhotoUploader';

interface Page4Props {
  onRestart: () => void;
}

export const Page4Celebration: React.FC<Page4Props> = ({ onRestart }) => {
  const [candlesLit, setCandlesLit] = useState<boolean>(true);
  const [giftOpen, setGiftOpen] = useState<boolean>(false);
  const [confettiCount, setConfettiCount] = useState<number>(0);

  // Trigger grand confetti shower on mount
  useEffect(() => {
    fireConfetti();
    const timer = setTimeout(() => {
      fireConfetti();
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const fireConfetti = () => {
    sound.playCheer();
    setConfettiCount(c => c + 1);

    // Golden & pink celebration confetti blast
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ffd700', '#ff69b4', '#e6e6fa', '#ff1493', '#fff2a3']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ff69b4', '#00f0ff']
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffd700', '#ff69b4', '#00f0ff']
      });
    }, 250);
  };

  const handleBlowCandles = () => {
    sound.playCheer();
    setCandlesLit(false);
    fireConfetti();
  };

  const handleOpenGift = () => {
    sound.playAirHorn();
    setGiftOpen(true);
    fireConfetti();
  };

  return (
    <div className="relative min-h-screen py-16 px-4 bg-gradient-to-b from-[#1f0b24] via-[#2d1238] to-[#12051b] text-neutral-100 overflow-hidden">
      
      {/* Warm Glowing Ambient Backdrops (Pink, Lavender, Golden Lighting) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/20 via-purple-500/15 to-amber-400/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-pink-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-300/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Animated Balloons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          { color: "bg-pink-500", left: "8%", delay: 0, duration: 14 },
          { color: "bg-amber-400", left: "22%", delay: 3, duration: 16 },
          { color: "bg-purple-400", left: "75%", delay: 1, duration: 15 },
          { color: "bg-rose-400", left: "88%", delay: 4, duration: 17 },
          { color: "bg-yellow-300", left: "50%", delay: 2, duration: 18 },
        ].map((balloon, idx) => (
          <motion.div
            key={idx}
            initial={{ y: "110vh", opacity: 0.8 }}
            animate={{ y: "-20vh" }}
            transition={{
              repeat: Infinity,
              duration: balloon.duration,
              delay: balloon.delay,
              ease: "linear"
            }}
            style={{ left: balloon.left }}
            className="absolute flex flex-col items-center"
          >
            <div className={`w-12 h-14 rounded-full ${balloon.color} shadow-lg shadow-pink-500/20 relative`} />
            <div className="w-0.5 h-10 bg-white/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Plot Twist Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-pink-500/30 to-amber-500/30 border border-pink-400/50 text-pink-200 text-xs sm:text-sm font-tech font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(255,105,180,0.3)] mb-4"
        >
          <Sparkles className="w-4 h-4 text-yellow-300 animate-spin-slow" />
          <span>PAGE 4 • THE PLOT TWIST</span>
          <Heart className="w-4 h-4 text-pink-400 fill-pink-400 animate-pulse" />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center font-digital text-2xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight mb-8"
        >
          OKAY, JOKES APART, <br />
          <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,215,0,0.4)]">
            MY FAVOURITE HUMAN ALARM...
          </span>
        </motion.h1>

        {/* Main Heartfelt Birthday Letter Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full bg-white/[0.07] border-2 border-pink-400/40 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(244,114,182,0.25)] relative overflow-hidden"
        >
          {/* Subtle corner sparkles */}
          <div className="absolute top-4 right-4 text-amber-300">✨</div>
          <div className="absolute bottom-4 left-4 text-pink-300">💖</div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
            <div className="shrink-0 text-center">
              <PhotoUploader 
                className="w-28 h-28 sm:w-32 sm:h-32 border-2 border-pink-300 rounded-2xl shadow-lg"
                badgeText="ADARSH'S BIRTHDAY PIC"
              />
              <span className="inline-block mt-2 font-mono text-[11px] text-pink-300 font-bold">
                THE ONE & ONLY 🌟
              </span>
            </div>

            <div className="flex-1 space-y-4 text-gray-200 text-base sm:text-lg leading-relaxed font-normal">
              <p className="font-tech text-xl sm:text-2xl font-black text-yellow-300 flex items-center gap-2">
                <span>Happy Birthday, ALARM! 😂❤️</span>
              </p>

              <p>
                I still don't know whether to thank you or file a complaint against you for all those early morning wake-up calls during my exams.
              </p>

              <p className="font-medium text-pink-100">
                You have officially become the only alarm I never asked for but somehow got permanently installed in my life.
              </p>

              <p>
                Jokes apart, I'm genuinely glad to have you as a friend. Thank you for all the random conversations, laughs, memories and little things that make our friendship special.
              </p>

              <p>
                I hope this year brings you unlimited happiness, success, good health, amazing opportunities and everything you've been wishing for.
              </p>

              <p>
                May you achieve all your dreams, keep annoying everyone around you, and please, for once, let people sleep peacefully.
              </p>

              <p className="font-semibold text-yellow-200">
                Stay the same crazy person you are.
              </p>

              <div className="pt-2 text-xl sm:text-2xl font-black font-digital text-pink-400 tracking-wide glow-red">
                HAPPY BIRTHDAY, ALARM! 🥳❤️
              </div>
            </div>
          </div>
        </motion.div>

        {/* SECTION: BEAUTIFUL ANIMATED BIRTHDAY CAKE */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="my-14 w-full max-w-lg bg-black/40 border-2 border-yellow-400/40 rounded-3xl p-8 backdrop-blur-md shadow-2xl flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2 mb-2 text-yellow-300 font-tech font-bold text-xs uppercase tracking-widest">
            <CakeIcon className="w-4 h-4 text-yellow-400" />
            VIRTUAL CELEBRATION CAKE
          </div>

          <h3 className="text-xl sm:text-2xl font-digital font-extrabold text-white mb-6">
            {candlesLit ? "MAKE A WISH & BLOW OUT THE CANDLES!" : "🎉 WISH GRANTED! HAPPY BIRTHDAY! 🎉"}
          </h3>

          {/* Interactive Birthday Cake SVG */}
          <div className="relative w-64 h-56 flex items-center justify-center my-2">
            <svg viewBox="0 0 200 180" className="w-full h-full">
              {/* Cake Plate */}
              <ellipse cx="100" cy="165" rx="85" ry="12" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
              <ellipse cx="100" cy="163" rx="80" ry="10" fill="#f8fafc" />

              {/* Tier 1 (Bottom) */}
              <rect x="35" y="110" width="130" height="45" rx="8" fill="#ec4899" />
              {/* Frosting drips */}
              <path d="M 35 110 Q 45 125 55 110 Q 65 128 75 110 Q 85 124 95 110 Q 105 128 115 110 Q 125 125 135 110 Q 145 127 155 110 Q 160 120 165 110 L 165 105 L 35 105 Z" fill="#fdf2f8" />
              
              {/* Tier 2 (Top) */}
              <rect x="55" y="65" width="90" height="42" rx="6" fill="#f59e0b" />
              {/* Golden chocolate drips */}
              <path d="M 55 65 Q 65 78 75 65 Q 85 80 95 65 Q 105 78 115 65 Q 125 80 135 65 Q 140 75 145 65 L 145 60 L 55 60 Z" fill="#fef3c7" />

              {/* Candles */}
              {/* Candle 1 */}
              <rect x="75" y="32" width="6" height="30" rx="2" fill="#38bdf8" />
              <line x1="78" y1="28" x2="78" y2="32" stroke="#333" strokeWidth="2" />

              {/* Candle 2 (Center) */}
              <rect x="97" y="28" width="6" height="34" rx="2" fill="#a855f7" />
              <line x1="100" y1="24" x2="100" y2="28" stroke="#333" strokeWidth="2" />

              {/* Candle 3 */}
              <rect x="119" y="32" width="6" height="30" rx="2" fill="#fb7185" />
              <line x1="122" y1="28" x2="122" y2="32" stroke="#333" strokeWidth="2" />

              {/* Candle Flames if Lit */}
              {candlesLit ? (
                <>
                  <ellipse cx="78" cy="20" rx="4.5" ry="8" fill="#ffd700" className="animate-pulse" />
                  <ellipse cx="78" cy="21" rx="2" ry="4" fill="#ff4500" />

                  <ellipse cx="100" cy="16" rx="5" ry="9" fill="#ffd700" className="animate-pulse" />
                  <ellipse cx="100" cy="17" rx="2.5" ry="5" fill="#ff4500" />

                  <ellipse cx="122" cy="20" rx="4.5" ry="8" fill="#ffd700" className="animate-pulse" />
                  <ellipse cx="122" cy="21" rx="2" ry="4" fill="#ff4500" />
                </>
              ) : (
                /* Smoke puffs if blown out */
                <>
                  <path d="M 78 24 Q 74 15 80 8" stroke="#aaa" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                  <path d="M 100 20 Q 95 10 102 4" stroke="#aaa" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                  <path d="M 122 24 Q 126 15 120 8" stroke="#aaa" strokeWidth="2" fill="none" strokeDasharray="3,3" />
                </>
              )}
            </svg>
          </div>

          {/* Blow Candles Action */}
          {candlesLit ? (
            <button
              onClick={handleBlowCandles}
              className="mt-4 px-6 py-3 bg-gradient-to-r from-pink-500 to-amber-500 hover:from-pink-400 hover:to-amber-400 text-white font-tech font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-pink-500/50 transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>💨 CLICK TO BLOW CANDLES</span>
            </button>
          ) : (
            <div className="mt-4 flex items-center gap-3">
              <span className="text-sm font-tech font-bold text-green-400 flex items-center gap-1.5">
                <Check className="w-4 h-4" /> Candles Blown Out!
              </span>
              <button
                onClick={() => setCandlesLit(true)}
                className="text-xs text-yellow-300 underline hover:text-white transition"
              >
                Relight candles 🕯️
              </button>
            </div>
          )}
        </motion.div>

        {/* SECTION: SURPRISE GIFT BOX THAT OPENS ON CLICKING */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="my-10 w-full max-w-xl bg-gradient-to-br from-amber-950/40 via-purple-950/50 to-pink-950/40 border-2 border-amber-400/50 rounded-3xl p-8 backdrop-blur-xl shadow-[0_0_35px_rgba(255,215,0,0.25)] text-center relative overflow-hidden"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 text-xs font-mono font-bold mb-4">
            <Gift className="w-4 h-4" /> MYSTERY BIRTHDAY PACKAGE
          </div>

          <h3 className="text-2xl sm:text-3xl font-digital font-black text-white mb-6">
            YOUR BIRTHDAY GIFT HAS ARRIVED 🎁
          </h3>

          {!giftOpen ? (
            /* Closed Box Animation */
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: [-2, 2, -2] }}
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
                onClick={handleOpenGift}
                className="cursor-pointer p-6 bg-gradient-to-tr from-pink-600 to-amber-500 rounded-3xl shadow-[0_0_30px_rgba(244,114,182,0.6)] border-4 border-yellow-300 relative group"
              >
                <Gift className="w-24 h-24 text-white group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-3 -right-3 bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded-full font-mono animate-bounce">
                  TAP ME!
                </span>
              </motion.div>
              <p className="text-xs sm:text-sm text-yellow-200 mt-4 font-tech font-bold tracking-wide">
                👇 Click the gift box to unlock your official present!
              </p>
            </div>
          ) : (
            /* Open Gift Reveal */
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-black/80 border-2 border-yellow-400 rounded-2xl p-6 sm:p-8 text-center"
            >
              <div className="text-4xl mb-3">🎉 ⏰ 🎁</div>
              
              <div className="text-xs font-mono text-yellow-400 font-bold uppercase tracking-widest mb-2">
                OFFICIAL REDEMPTION VOUCHER
              </div>

              <div className="font-digital text-xl sm:text-2xl font-black text-white leading-snug my-3">
                YOUR GIFT: <br />
                <span className="text-yellow-400 glow-gold">
                  One FREE DAY WITHOUT DISTURBING ANYONE'S SLEEP.
                </span>
              </div>

              <p className="font-mono text-xs sm:text-sm text-red-400 font-bold uppercase tracking-wider mt-2">
                VALID FOR 24 HOURS ONLY. 😂
              </p>

              <p className="text-xs text-gray-400 mt-4 italic">
                *Terms & conditions apply: Any unauthorized phone calls at 6:00 AM will forfeit your friendship privileges for 1 week.
              </p>

              <button
                onClick={() => setGiftOpen(false)}
                className="mt-6 text-xs text-gray-400 hover:text-white underline font-mono"
              >
                Close gift box
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* FINAL FUNNY LINE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="my-10 text-center max-w-lg"
        >
          <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <Clock className="w-6 h-6 text-yellow-400 mx-auto mb-2 animate-spin-slow" />
            <p className="font-marker text-lg sm:text-2xl text-yellow-300 tracking-wide">
              "Once an alarm, always an alarm. Some things never change."
            </p>
          </div>
        </motion.div>

        {/* BUTTON: REPLAY THE ROAST */}
        <div className="mt-8 mb-16 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => {
              sound.playAirHorn();
              onRestart();
            }}
            className="group px-8 py-4 bg-gradient-to-r from-red-600 via-rose-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-tech font-extrabold text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(255,26,64,0.6)] hover:shadow-[0_0_45px_rgba(255,26,64,0.8)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center gap-3 border-2 border-yellow-300"
          >
            <RotateCcw className="w-5 h-5 group-hover:-rotate-90 transition-transform" />
            <span>REPLAY THE ROAST 😂</span>
          </button>

          <button
            onClick={fireConfetti}
            className="px-6 py-4 bg-white/10 hover:bg-white/20 text-yellow-300 font-tech font-bold text-sm sm:text-base rounded-2xl border border-white/20 transition hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <PartyPopper className="w-5 h-5 text-yellow-400" />
            <span>MORE CONFETTI! ({confettiCount})</span>
          </button>
        </div>

      </div>
    </div>
  );
};

