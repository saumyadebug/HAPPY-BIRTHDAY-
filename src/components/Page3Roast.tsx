import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Flame, 
  Sparkles, 
  AlertCircle, 
  HelpCircle, 
  ChevronRight, 
  ArrowRight,
  ShieldAlert,
  Moon,
  Sun,
  Smile,
  Frown,
  Radio,
  FileQuestion
} from 'lucide-react';
import { sound } from '../utils/audio';
import { PhotoUploader } from './PhotoUploader';

interface Page3Props {
  onNext: () => void;
}

interface MemeCard {
  id: number;
  title: string;
  scenario: string;
  punchline: string;
  emoji: string;
  tag: string;
  accent: string;
}

export const Page3Roast: React.FC<Page3Props> = ({ onNext }) => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [examSlider, setExamSlider] = useState<number>(50); // 0 = Before, 100 = After

  const memeCards: MemeCard[] = [
    {
      id: 1,
      title: "The Time Traveler",
      scenario: "When he says \"I'm coming\" but hasn't even started getting ready.",
      punchline: "\"Bro I'm 2 mins away\" — translation: He is currently sitting in a towel contemplating the universe while scrolling Instagram.",
      emoji: "🏃‍♂️💨",
      tag: "GPS NOT FOUND",
      accent: "from-blue-600 to-indigo-800"
    },
    {
      id: 2,
      title: "The Life Guru",
      scenario: "When he gives advice but his own life is a disaster.",
      punchline: "Bro gives relationship and career lectures while his own daily plan consists of waking up and choosing violence.",
      emoji: "🧘‍♂️💥",
      tag: "DON'T TRY AT HOME",
      accent: "from-amber-600 to-red-800"
    },
    {
      id: 3,
      title: "The Main Character",
      scenario: "When he thinks he's the main character.",
      punchline: "Walking into the room like background music is playing, but the music is just his own phone alarm blasting.",
      emoji: "🎬😎",
      tag: "OSCAR NOMINATED (SELF)",
      accent: "from-purple-600 to-pink-800"
    },
    {
      id: 4,
      title: "The Rare Phenomenon",
      scenario: "When he says something intelligent once every 6 months.",
      punchline: "Everyone in a 5-mile radius pauses. Scientists begin taking notes. A glitch in the matrix is officially confirmed.",
      emoji: "🧠✨",
      tag: "RARE EVENT (0.01%)",
      accent: "from-emerald-600 to-teal-800"
    },
    {
      id: 5,
      title: "The Comedian In Denial",
      scenario: "When someone asks him to be serious.",
      punchline: "Takes a deep breath, makes a poker face for 1.8 seconds, and then bursts out laughing at his own imaginary joke.",
      emoji: "😐💀",
      tag: "0 SECONDS OF CHILL",
      accent: "from-rose-600 to-red-900"
    },
    {
      id: 6,
      title: "The Unsolicited Wikipedia",
      scenario: "When he starts explaining something nobody asked about.",
      punchline: "Starts a 25-minute TedTalk about a conspiracy theory nobody mentioned, complete with hand gestures and aggressive eye contact.",
      emoji: "🗣️📢",
      tag: "TED TALK NOBODY ORDERED",
      accent: "from-cyan-600 to-blue-900"
    },
  ];

  const handleCardClick = (id: number) => {
    sound.playAirHorn();
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="relative min-h-screen py-12 px-4 bg-[#090314] text-white overflow-hidden">
      {/* Background neon flames */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-tech font-bold tracking-widest uppercase mb-3">
            <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
            UNFILTERED MEME DOSSIER
          </div>
          <h1 className="text-3xl sm:text-5xl font-digital font-black tracking-tight text-white uppercase drop-shadow-[0_2px_10px_rgba(255,100,0,0.5)]">
            THINGS THAT REMIND US OF YOU
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2 max-w-2xl mx-auto">
            A chaotic archive of his most iconic habits. Tap any card to unlock the uncensored truth!
          </p>
        </div>

        {/* 6 INTERACTIVE MEME CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {memeCards.map((card) => {
            const isRevealed = selectedCard === card.id;
            return (
              <motion.div
                key={card.id}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={() => handleCardClick(card.id)}
                className={`relative cursor-pointer rounded-3xl p-6 border-2 transition-all duration-300 backdrop-blur-md flex flex-col justify-between overflow-hidden shadow-xl ${
                  isRevealed
                    ? 'border-orange-500 bg-neutral-900 shadow-orange-500/20'
                    : 'border-white/10 hover:border-orange-500/60 bg-neutral-900/80 hover:bg-neutral-900'
                }`}
              >
                {/* Background subtle gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.accent} opacity-10 rounded-full blur-2xl pointer-events-none`} />

                <div>
                  {/* Top Bar with Emoji & Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{card.emoji}</span>
                    <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-orange-300 border border-white/5">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-xs font-tech font-extrabold text-orange-400 uppercase tracking-wider mb-2">
                    {card.title}
                  </h3>

                  <p className="text-lg sm:text-xl font-bold text-white leading-snug">
                    "{card.scenario}"
                  </p>
                </div>

                {/* Savage Punchline Reveal Area */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  {isRevealed ? (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-black/80 border border-orange-500/40 rounded-xl p-3"
                    >
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-yellow-400 mb-1">
                        <Flame className="w-3.5 h-3.5 text-orange-500" />
                        UNCENSORED PUNCHLINE:
                      </div>
                      <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed italic">
                        {card.punchline}
                      </p>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-between text-xs font-mono text-gray-400 group">
                      <span className="text-yellow-400 font-bold flex items-center gap-1">
                        👉 Click to reveal roast
                      </span>
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* SPECIAL SECTION: THE ALARM CHRONICLES – A STORY OF SLEEPLESS MORNINGS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative my-16 p-8 sm:p-12 rounded-3xl bg-neutral-900/90 border-2 border-red-500/50 shadow-[0_0_35px_rgba(255,26,64,0.25)] flex flex-col md:flex-row items-center gap-8 overflow-hidden"
        >
          {/* Large funny illustration of an old-fashioned alarm clock screaming */}
          <div className="shrink-0 w-48 h-48 sm:w-56 sm:h-56 relative flex items-center justify-center bg-black/60 rounded-3xl border border-red-500/40 p-4">
            <svg viewBox="0 0 120 120" className="w-full h-full animate-shake">
              {/* Ringing soundwaves left & right */}
              <path d="M 12 35 A 15 15 0 0 0 12 65" fill="none" stroke="#ff1a40" strokeWidth="4" strokeLinecap="round" />
              <path d="M 5 25 A 25 25 0 0 0 5 75" fill="none" stroke="#ff1a40" strokeWidth="3" strokeLinecap="round" />
              
              <path d="M 108 35 A 15 15 0 0 1 108 65" fill="none" stroke="#ff1a40" strokeWidth="4" strokeLinecap="round" />
              <path d="M 115 25 A 25 25 0 0 1 115 75" fill="none" stroke="#ff1a40" strokeWidth="3" strokeLinecap="round" />

              {/* Bells */}
              <circle cx="35" cy="30" r="14" fill="#ffd700" stroke="#333" strokeWidth="3" />
              <circle cx="85" cy="30" r="14" fill="#ffd700" stroke="#333" strokeWidth="3" />
              {/* Hammer */}
              <rect x="58" y="18" width="4" height="15" fill="#aaa" />
              <circle cx="60" cy="18" r="4" fill="#ff1a40" />

              {/* Clock Body */}
              <circle cx="60" cy="65" r="38" fill="#ff1a40" stroke="#ffd700" strokeWidth="4" />
              <circle cx="60" cy="65" r="30" fill="#ffffff" />

              {/* Screaming/Angry face on clock */}
              {/* Crazy Eyes */}
              <ellipse cx="49" cy="58" rx="6" ry="8" fill="#000" />
              <circle cx="51" cy="56" r="2.5" fill="#fff" />
              
              <ellipse cx="71" cy="58" rx="6" ry="8" fill="#000" />
              <circle cx="69" cy="56" r="2.5" fill="#fff" />

              {/* Screaming Mouth wide open */}
              <ellipse cx="60" cy="76" rx="10" ry="12" fill="#800" stroke="#000" strokeWidth="2" />
              <path d="M 54 82 Q 60 76 66 82" fill="#ff6b8b" />

              {/* Legs */}
              <line x1="38" y1="98" x2="28" y2="112" stroke="#ffd700" strokeWidth="5" strokeLinecap="round" />
              <line x1="82" y1="98" x2="92" y2="112" stroke="#ffd700" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <span className="absolute bottom-2 bg-red-600 text-[10px] font-digital font-black px-2 py-0.5 rounded text-white shadow">
              6:00 AM SHARP!
            </span>
          </div>

          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Radio className="w-5 h-5 text-red-500 animate-pulse" />
              <span className="font-tech text-xs tracking-widest text-red-400 font-extrabold uppercase">
                THE INSIDE JOKE ARCHIVE
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-digital font-black text-white leading-tight mb-4">
              THE ALARM CHRONICLES – <br />
              <span className="text-yellow-400">A STORY OF SLEEPLESS MORNINGS</span>
            </h2>

            <blockquote className="text-lg sm:text-xl font-medium text-gray-200 italic border-l-4 border-yellow-400 pl-4 py-1 my-4">
              "Some heroes don't wear capes. Some just call you early in the morning and ruin your sleep."
            </blockquote>

            <p className="text-sm text-gray-400 leading-relaxed">
              No snooze button in the universe could withstand his relentless calling. Even airplane mode was scared of his commitment to waking people up during exam season.
            </p>
          </div>
        </motion.div>

        {/* SECTION: MY EXAM MORNING EXPERIENCE (BEFORE / AFTER COMPARISON) */}
        <div className="my-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-digital font-bold text-white uppercase tracking-wider">
              MY EXAM MORNING EXPERIENCE
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              A scientific comparison of human existence before and after the ALARM phone call.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* BEFORE ALARM */}
            <div className="bg-neutral-900/80 border-2 border-cyan-500/40 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center text-center shadow-lg relative overflow-hidden">
              <div className="w-full flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
                  <Moon className="w-4 h-4" /> 5:58 AM (PEACE ERA)
                </span>
                <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 text-[10px] font-bold">
                  HEAVEN
                </span>
              </div>

              {/* Peaceful sleeping cartoon */}
              <div className="w-28 h-28 my-3 rounded-full bg-cyan-950/60 border-2 border-cyan-400/50 flex items-center justify-center text-5xl">
                😴
              </div>

              <h3 className="font-tech text-xl font-black text-white uppercase mt-2">
                BEFORE ALARM
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed font-medium">
                Sleeping peacefully, wrapped in blanket warmth, dreaming about passing exams without studying. Heart rate: 60 BPM. Total tranquility.
              </p>
            </div>

            {/* AFTER ALARM */}
            <div className="bg-neutral-900/80 border-2 border-red-500/60 rounded-3xl p-6 backdrop-blur-md flex flex-col items-center text-center shadow-lg relative overflow-hidden">
              <div className="w-full flex justify-between items-center mb-4">
                <span className="text-xs font-mono font-bold text-red-400 tracking-wider flex items-center gap-1.5">
                  <Sun className="w-4 h-4 animate-spin-slow" /> 6:01 AM (AFTERMATH)
                </span>
                <span className="px-2 py-0.5 rounded bg-red-950 text-red-300 text-[10px] font-bold animate-pulse">
                  PURE TRAUMA
                </span>
              </div>

              {/* Panic wide awake face */}
              <div className="w-28 h-28 my-3 rounded-full bg-red-950/60 border-2 border-red-500 flex items-center justify-center text-5xl animate-shake">
                😱
              </div>

              <h3 className="font-tech text-xl font-black text-red-400 uppercase mt-2 glow-red">
                AFTER ALARM
              </h3>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed font-medium">
                Wide awake, confused, phone ringing at max volume, questioning life decisions, wondering which chapter was even in the syllabus. Heart rate: 180 BPM.
              </p>
            </div>

          </div>

          {/* Prompt caption */}
          <div className="mt-6 text-center max-w-xl mx-auto p-4 bg-black/60 rounded-2xl border border-white/10">
            <p className="text-sm sm:text-base text-yellow-300 font-tech font-bold">
              "Thank you for making sure I never got enough sleep before my exams. Truly an unforgettable service. 💀"
            </p>
          </div>
        </div>

        {/* SECTION: FAKE WANTED POSTER */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative my-16 max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl bg-[#fdf6e2] text-neutral-900 shadow-2xl border-8 border-[#3d271d] text-center"
        >
          {/* Vintage Wanted Aesthetic */}
          <div className="border-4 border-dashed border-[#8c6239] p-6 rounded-xl">
            <div className="font-digital text-4xl sm:text-6xl font-black tracking-widest text-[#2b1810] uppercase mb-1">
              WANTED
            </div>
            
            <div className="font-tech text-xl sm:text-2xl font-black text-red-700 tracking-widest uppercase mb-4">
              ALIAS: ALARM (ADARSH)
            </div>

            {/* Photo placeholder with uploader */}
            <div className="flex justify-center my-4">
              <PhotoUploader 
                className="w-44 h-44 sm:w-52 sm:h-52 border-4 border-[#3d271d]" 
                badgeText="TAP TO PUT ADARSH ON POSTER"
              />
            </div>

            <div className="mt-4 space-y-3 text-left max-w-md mx-auto">
              <div className="bg-[#ebd9bd] p-3 rounded-lg border border-[#c4a47c]">
                <strong className="block text-xs font-mono font-bold text-red-800 uppercase tracking-wider">
                  CRIMES:
                </strong>
                <p className="text-sm font-tech font-bold text-neutral-900 mt-0.5">
                  Disturbing peaceful sleep, excessive morning notifications, refusing to let people snooze.
                </p>
              </div>

              <div className="bg-[#ebd9bd] p-3 rounded-lg border border-[#c4a47c]">
                <strong className="block text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  REWARD:
                </strong>
                <p className="text-sm font-tech font-bold text-neutral-900 mt-0.5">
                  One uninterrupted morning of sound, undisturbed sleep.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t-2 border-[#8c6239] text-xs font-mono font-extrabold text-[#5c3e21] flex justify-between items-center">
              <span>ISSUED BY: Sleep Victims Union</span>
              <span>BOUNTY: Priceless</span>
            </div>
          </div>
        </motion.div>

        {/* CTA TO PAGE 4 */}
        <div className="flex justify-center mt-12 mb-6">
          <button
            onClick={() => {
              sound.playCheer();
              onNext();
            }}
            className="group px-8 py-4 bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-tech font-extrabold text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(244,63,94,0.5)] hover:shadow-[0_0_45px_rgba(244,63,94,0.7)] transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer flex items-center gap-3 border-2 border-pink-300"
          >
            <span>OKAY, ENOUGH ROASTING... MAYBE ❤️</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};

