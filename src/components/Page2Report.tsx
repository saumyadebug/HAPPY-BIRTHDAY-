import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  AlertOctagon, 
  Award, 
  CheckCircle, 
  Sparkles, 
  Cpu, 
  Activity, 
  Flame, 
  ArrowRight,
  Stamp,
  BadgeAlert,
  UserCheck
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PhotoUploader } from './PhotoUploader';

interface Page2Props {
  onNext: () => void;
}

export const Page2Report: React.FC<Page2Props> = ({ onNext }) => {
  const [stamped, setStamped] = useState<string | null>("CLASSIFIED");

  const stats = [
    { label: "Brain cells", value: "2 (both on vacation)", percent: 5, color: "from-red-500 to-rose-600", note: "Out of office auto-reply active" },
    { label: "Maturity", value: "0%", percent: 2, color: "from-orange-500 to-amber-600", note: "Refuses to grow up" },
    { label: "Intelligence", value: "Currently buffering...", percent: 28, color: "from-yellow-400 to-orange-500", note: "Loading wheel spinning forever" },
    { label: "Attitude", value: "999+", percent: 100, color: "from-purple-500 to-pink-600", note: "Exceeds server capacity" },
    { label: "Common sense", value: "Premium subscription expired.", percent: 0, color: "from-zinc-500 to-neutral-700", note: "Free trial was never renewed" },
    { label: "Drama level", value: "Unlimited access.", percent: 98, color: "from-rose-500 to-red-600", note: "Netflix couldn't write this" },
    { label: "Friendship score", value: "Surprisingly high.", percent: 95, color: "from-emerald-400 to-green-600", note: "Against all scientific odds" },
    { label: "Alarm accuracy", value: "100% (Unfortunately).", percent: 100, color: "from-red-600 to-yellow-500", note: "Never late to ruin sleep" },
    { label: "Sleep disturbance record", value: "UNMATCHED.", percent: 100, color: "from-cyan-400 to-blue-600", note: "Guinness world record candidate" },
    { label: "Annoyance level", value: "Permanently switched ON.", percent: 100, color: "from-red-500 to-orange-500", note: "Power button broken" },
  ];

  const achievements = [
    {
      title: "Successfully woke someone up during exams",
      desc: "Called at 6:00 AM sharp without remorse or hesitation.",
      badge: "🚨 EXAM NIGHTMARE",
      icon: "📚"
    },
    {
      title: "Destroyed peaceful mornings without feeling guilty",
      desc: "Proudly ended the deepest REM sleep in human history.",
      badge: "😴 CRIME AGAINST SLEEP",
      icon: "💀"
    },
    {
      title: "Became an alarm clock without batteries",
      desc: "Requires zero power source, runs entirely on chaotic energy.",
      badge: "⚡ ETERNAL ENGINE",
      icon: "🔋"
    },
    {
      title: "Never understood the meaning of SNOOZE",
      desc: "Dictionary was confiscated; snooze simply doesn't exist.",
      badge: "🚫 SNOOZE DENIED",
      icon: "⏰"
    },
  ];

  const handleStamp = (stampName: string) => {
    sound.playAirHorn();
    setStamped(stampName);
  };

  return (
    <div className="relative min-h-screen py-12 px-4 bg-[#0a0515] text-gray-100 overflow-hidden">
      {/* Background Dossier Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Top Secret Investigation Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b-2 border-red-500/40 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-red-600 text-white font-tech font-extrabold text-[11px] px-2.5 py-0.5 rounded tracking-widest uppercase">
                DEPT OF SLEEP SECURITY • DOSSIER #404-ALARM
              </span>
              <span className="text-red-400 font-mono text-xs font-bold animate-pulse">
                [TOP SECRET]
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-digital font-black tracking-tight text-white flex flex-wrap items-center gap-3">
              SUBJECT: <span className="text-red-500 glow-red">ALARM</span>
            </h1>
            <p className="font-tech text-base sm:text-lg text-amber-300 font-bold mt-1 tracking-wide">
              STATUS: STILL AN ANNOYING HUMAN BEING.
            </p>
          </div>

          {/* Interactive Stamp & Seal */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="border-4 border-dashed border-red-500/80 rounded-xl p-3 transform -rotate-6 bg-red-950/40 text-center shadow-lg">
                <span className="font-tech text-sm md:text-base font-black text-red-500 tracking-widest uppercase block">
                  ★ {stamped} ★
                </span>
                <span className="text-[9px] font-mono text-gray-400 block">
                  VERIFIED BY MORNING VICTIMS
                </span>
              </div>
            </div>
            <button
              onClick={() => handleStamp(stamped === "GUILTY" ? "IRREDEEMABLE" : "GUILTY")}
              className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-tech font-bold rounded-lg transition hover:scale-105 shadow cursor-pointer"
            >
              STAMP GUILTY 🔨
            </button>
          </div>
        </div>

        {/* Suspect Identification Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Photo & ID Card */}
          <div className="bg-neutral-900/80 border-2 border-red-500/40 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center text-center shadow-xl relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-yellow-400 text-black text-[9px] font-black px-2 py-0.5 rounded font-mono uppercase">
              THREAT LEVEL: HIGH
            </div>

            <PhotoUploader 
              className="w-48 h-48 sm:w-52 sm:h-52" 
              badgeText="CLICK TO CHANGE ADARSH'S PIC"
            />

            <h3 className="font-digital text-xl font-black text-white mt-4">
              ADARSH ("ALARM")
            </h3>
            <p className="text-xs font-mono text-red-400 font-bold">
              ID: 00-WAKE-UP-EXAM-CALL
            </p>

            <div className="w-full mt-4 pt-4 border-t border-white/10 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-400">Primary Weapon:</span>
                <span className="text-yellow-400 font-bold">Phone calls at 6 AM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Favorite Hobby:</span>
                <span className="text-red-400 font-bold">Destroying peace</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Battery Level:</span>
                <span className="text-green-400 font-bold">∞ (Never runs out)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Guilt Factor:</span>
                <span className="text-gray-200 font-bold">0.000%</span>
              </div>
            </div>
          </div>

          {/* Sarcastic Stickers & Summary Note */}
          <div className="md:col-span-2 bg-neutral-900/80 border-2 border-white/10 rounded-3xl p-6 backdrop-blur-md flex flex-col justify-between shadow-xl relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-tech text-xs tracking-wider text-amber-400 font-bold flex items-center gap-1.5">
                  <FileText className="w-4 h-4" /> INVESTIGATION BRIEFING
                </span>
                <span className="text-xs font-mono text-gray-500">CASE #2026-BDAY</span>
              </div>

              <h2 className="text-2xl font-tech font-extrabold text-white mb-3">
                "Subject is completely incapable of letting anyone sleep in peace."
              </h2>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                According to confidential eyewitness testimonies, the subject known as <span className="text-red-400 font-bold">"ALARM"</span> was repeatedly observed initiating aggressive wake-up calls during critical exam preparations. Victims reported sudden disorientation, heart palpitations, and an overwhelming desire to smash their phones.
              </p>

              {/* Sarcastic stickers layout */}
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-full bg-red-600/30 border border-red-500/60 text-red-300 text-xs font-bold transform -rotate-2">
                  🚫 SNOOZE IS A MYTH
                </span>
                <span className="px-3 py-1 rounded-full bg-yellow-400/20 border border-yellow-400/60 text-yellow-300 text-xs font-bold transform rotate-3">
                  🚨 DANGER: EXAM CALLER
                </span>
                <span className="px-3 py-1 rounded-full bg-purple-600/30 border border-purple-500/60 text-purple-300 text-xs font-bold transform -rotate-1">
                  🤡 0% BRAIN USAGE
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-600/30 border border-cyan-500/60 text-cyan-300 text-xs font-bold transform rotate-2">
                  🏆 BEST WORST FRIEND
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>FIELD AGENT: Exhausted Friend</span>
              <span className="text-red-400 font-bold">VERDICT: GUILTY OF LOYALTY & CHAOS</span>
            </div>
          </div>
        </div>

        {/* SECTION: FUNNY ANIMATED STATISTICS */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-6 h-6 text-red-500 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-digital font-bold text-white uppercase tracking-wider">
              OFFICIAL BIOMETRIC & PSYCHOLOGICAL STATS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-neutral-900/90 border border-white/10 hover:border-red-500/50 rounded-2xl p-4 transition-all duration-300 hover:shadow-lg hover:shadow-red-950/40"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="font-tech text-sm sm:text-base font-bold text-gray-200">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs sm:text-sm font-extrabold text-yellow-300 text-right">
                    {item.value}
                  </span>
                </div>

                {/* Progress bar visual */}
                <div className="w-full bg-neutral-950 rounded-full h-2.5 overflow-hidden my-2 border border-white/5">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${Math.max(item.percent, 8)}%` }}
                  />
                </div>

                <div className="text-[11px] font-mono text-gray-400 italic">
                  💡 {item.note}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SECTION: OFFICIAL CERTIFICATE */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative my-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-amber-950/40 via-neutral-900/90 to-black border-4 border-yellow-500/70 shadow-[0_0_40px_rgba(255,215,0,0.25)] text-center overflow-hidden"
        >
          {/* Certificate decorative borders & ribbon */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-yellow-400 rounded-tl-2xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-24 h-24 border-t-4 border-r-4 border-yellow-400 rounded-tr-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-4 border-l-4 border-yellow-400 rounded-bl-2xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-yellow-400 rounded-br-2xl pointer-events-none" />

          {/* Golden Seal */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-tr from-yellow-600 via-yellow-400 to-amber-200 p-1 shadow-lg flex items-center justify-center">
            <div className="w-full h-full rounded-full bg-amber-950 border-2 border-yellow-300 flex items-center justify-center">
              <Award className="w-8 h-8 text-yellow-300 animate-wiggle" />
            </div>
          </div>

          <span className="font-tech text-xs tracking-widest text-yellow-400 font-extrabold uppercase">
            CERTIFICATE OF DUBIOUS DISTINCTION
          </span>

          <h3 className="font-digital text-2xl sm:text-4xl font-black text-white mt-2 mb-3 leading-tight tracking-tight">
            OFFICIALLY CERTIFIED AS THE <br />
            <span className="text-yellow-400 glow-gold">HUMAN ALARM CLOCK</span> OF THE YEAR
          </h3>

          <p className="max-w-xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed font-medium">
            This certifies that <strong className="text-white">Adarsh</strong> has demonstrated unmatched dedication to disturbing peaceful sleep, ringing phones during exams, and refusing to acknowledge the universal human right to sleep in.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-8 pt-6 border-t border-yellow-500/30 text-xs font-mono text-gray-400">
            <div>
              <span className="block text-yellow-300 font-bold">DATE OF INDUCTION</span>
              <span>Today (Forever and Always)</span>
            </div>
            <div>
              <span className="block text-yellow-300 font-bold">AUTHORIZED BY</span>
              <span className="font-marker text-base text-white">Sleep-Deprived Best Friend ✍️</span>
            </div>
            <div>
              <span className="block text-yellow-300 font-bold">NOISE LEVEL</span>
              <span className="text-red-400 font-bold">MAXIMUM DECIBELS</span>
            </div>
          </div>
        </motion.div>

        {/* SECTION: FAKE ACHIEVEMENTS */}
        <div className="my-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🏆</span>
            <h2 className="text-xl sm:text-2xl font-digital font-bold text-white uppercase tracking-wider">
              ACHIEVEMENTS UNLOCKED
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="bg-neutral-900/80 border-2 border-amber-500/30 hover:border-amber-400 rounded-2xl p-5 flex items-start gap-4 shadow-lg backdrop-blur-sm transition-all"
              >
                <div className="text-3xl p-3 bg-neutral-950 rounded-xl border border-white/10 shrink-0">
                  {ach.icon}
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-amber-400 tracking-wider uppercase block mb-1">
                    {ach.badge}
                  </span>
                  <h4 className="font-tech text-base font-bold text-white leading-tight mb-1">
                    {ach.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-snug">
                    {ach.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Next Page CTA Button */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => {
              sound.playAirHorn();
              onNext();
            }}
            className="group px-8 py-4 bg-gradient-to-r from-amber-500 via-orange-600 to-red-600 hover:from-amber-400 hover:to-red-500 text-white font-tech font-extrabold text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_45px_rgba(245,158,11,0.7)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center gap-3 border-2 border-yellow-300"
          >
            <span>NEXT LEVEL OF EMBARRASSMENT →</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

