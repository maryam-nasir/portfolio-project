"use client";

import { useEffect, useState } from "react";

type TypingEffectProps = {
  text: string;
  delay?: number;
  writingDelay?: number;
};

const TypingEffect = ({
  text,
  delay = 0,
  writingDelay = 10,
}: TypingEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setStarted(true);
    }, delay);
  }, []);

  useEffect(() => {
    if (started) {
      const typingEffect = setInterval(() => {
        if (i < text.length) {
          setDisplayedText((prevState) => prevState + text.charAt(i));
          setI(i + 1);
        } else {
          clearInterval(typingEffect);
        }
      }, writingDelay);

      return () => {
        clearInterval(typingEffect);
      };
    }
  }, [i, started]);

  return <>{displayedText ? displayedText : ""}</>;
};

export default TypingEffect;
