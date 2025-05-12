'use client';

import { useEffect, useState } from 'react';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      // const wordsArray = words.map((word) => word.text)
      // const textToType = wordsArray.join("")

      const typewriter = async () => {
        await animate(
          'span',
          {
            display: 'inline-block',
            opacity: 1,
          },
          {
            duration: 0.1,
            delay: stagger(0.1),
            ease: 'easeInOut',
          }
        );
      };

      typewriter();
    }
  }, [isInView, animate, started, words]);

  const renderWords = () => {
    return (
      <div className={cn('inline', className)}>
        {words.map((word, idx) => {
          return (
            <div key={`${word.text}-${idx}`} className="inline-block">
              {word.text.split('').map((char, index) => (
                <motion.span
                  initial={{
                    opacity: 0,
                    display: 'none',
                  }}
                  key={`${char}-${index}`}
                  className={cn('inline-block', word.className)}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div ref={scope} className="inline-block">
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block h-4 w-[2px] rounded-full bg-primary',
          cursorClassName
        )}
      />
    </div>
  );
};
