'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipWordsProps {
  words: string[];
  duration?: number;
  className?: string;
}

export const FlipWords: React.FC<FlipWordsProps> = ({
  words,
  duration = 3000,
  className,
}) => {
  // Pastikan kita hanya menerima string dalam array words
  const safeWords = words.filter((word) => typeof word === 'string');

  // Gunakan default value jika array kosong
  const [currentWord, setCurrentWord] = useState(
    safeWords.length > 0 ? safeWords[0] : ''
  );
  const [isAnimating, setIsAnimating] = useState(false);

  // thanks for the fix Julian - https://github.com/Julian-AT
  const startAnimation = useCallback(() => {
    if (safeWords.length === 0) return;

    const currentIndex = safeWords.indexOf(currentWord);
    const nextIndex =
      currentIndex + 1 < safeWords.length ? currentIndex + 1 : 0;
    const word = safeWords[nextIndex];

    setCurrentWord(word);
    setIsAnimating(true);
  }, [currentWord, safeWords]);

  useEffect(() => {
    if (!isAnimating && safeWords.length > 0) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation, safeWords]);

  // Jika tidak ada words yang valid, jangan render apa-apa
  if (safeWords.length === 0) {
    return null;
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: 'blur(8px)',
          scale: 2,
          position: 'absolute',
        }}
        className={cn(
          'z-10 inline-block relative text-left text-neutral-900 dark:text-neutral-100 px-2',
          className
        )}
        key={currentWord}
      >
        {/* edit suggested by Sajal: https://x.com/DewanganSajal */}
        {typeof currentWord === 'string' &&
          currentWord.split(' ').map((word, wordIndex) => (
            <motion.span
              key={`${word}-${wordIndex}`}
              initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{
                delay: wordIndex * 0.3,
                duration: 0.3,
              }}
              className="inline-block whitespace-nowrap"
            >
              {word.split('').map((letter, letterIndex) => (
                <motion.span
                  key={`${word}-${letterIndex}`}
                  initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    delay: wordIndex * 0.3 + letterIndex * 0.05,
                    duration: 0.2,
                  }}
                  className="inline-block text-purple-500 dark:text-purple-400 font-bold"
                >
                  {letter}
                </motion.span>
              ))}
              <span className="inline-block">&nbsp;</span>
            </motion.span>
          ))}
      </motion.div>
    </AnimatePresence>
  );
};
