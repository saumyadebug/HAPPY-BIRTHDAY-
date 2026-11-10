import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { FloatingAlarm } from './components/FloatingAlarm';
import { Page1Emergency } from './components/Page1Emergency';
import { Page2Report } from './components/Page2Report';
import { Page3Roast } from './components/Page3Roast';
import { Page4Celebration } from './components/Page4Celebration';
import { PhotoProvider } from './context/PhotoContext';
import { sound } from './utils/audio';

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const pageVariants = {
    initial: { opacity: 0, scale: 0.98, y: 15 },
    animate: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.98, y: -15, transition: { duration: 0.3 } },
  };

  return (
    <PhotoProvider>
      <div className="min-h-screen bg-[#080312] text-white flex flex-col font-sans selection:bg-red-500 selection:text-white">
        {/* Navigation Bar */}
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />

        {/* Page Content with Framer Motion transitions */}
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            {currentPage === 1 && (
              <motion.div
                key="page-1"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Page1Emergency onNext={() => setCurrentPage(2)} />
              </motion.div>
            )}

            {currentPage === 2 && (
              <motion.div
                key="page-2"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Page2Report onNext={() => setCurrentPage(3)} />
              </motion.div>
            )}

            {currentPage === 3 && (
              <motion.div
                key="page-3"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Page3Roast onNext={() => setCurrentPage(4)} />
              </motion.div>
            )}

            {currentPage === 4 && (
              <motion.div
                key="page-4"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Page4Celebration onRestart={() => setCurrentPage(1)} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Persistent Floating Alarm Clock Widget */}
        <FloatingAlarm />

        {/* Bottom subtle copyright / roast footer */}
        <footer className="w-full py-6 px-4 bg-black/90 border-t border-white/5 text-center text-xs text-gray-500 font-mono">
          <p>
            HAPPY BIRTHDAY ADARSH (ALARM) 🚨 • Crafted with savage love & zero sleep • 100% Guaranteed Non-Snoozable
          </p>
        </footer>
      </div>
    </PhotoProvider>
  );
};

export default App;

