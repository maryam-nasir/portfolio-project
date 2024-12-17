"use client";

import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

import { HEADING_LEVEL } from "@/constants/components";

type HeadingLevel = (typeof HEADING_LEVEL)[keyof typeof HEADING_LEVEL];

type HeadingProps = {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
  animationProps?: HTMLMotionProps<"h1" | "h2" | "h3" | "h4">;
};

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(function Heading(
  {
    level = HEADING_LEVEL.TWO,
    children,
    className,
    isAnimated = false,
    animationProps = {},
  },
  ref
) {
  if (isAnimated) {
    switch (level) {
      case HEADING_LEVEL.ONE:
        return (
          <motion.h1
            className={`font-black text-5xl text-grey-dark ${className}`}
            {...animationProps}
            ref={ref}
          >
            {children}
          </motion.h1>
        );

      case HEADING_LEVEL.TWO:
        return (
          <motion.h2
            className={`font-black text-4xl text-grey-dark ${className}`}
            {...animationProps}
            ref={ref}
          >
            {children}
          </motion.h2>
        );

      case HEADING_LEVEL.THREE:
        return (
          <motion.h3
            className={`font-bold text-3xl text-grey-dark ${className}`}
            {...animationProps}
            ref={ref}
          >
            {children}
          </motion.h3>
        );

      case HEADING_LEVEL.FOUR:
        return (
          <motion.h4
            className={`font-bold text-2xl text-grey-dark ${className}`}
            {...animationProps}
            ref={ref}
          >
            {children}
          </motion.h4>
        );
    }
  }

  switch (level) {
    case HEADING_LEVEL.ONE:
      return (
        <h1
          className={`font-black text-5xl text-grey-dark ${className}`}
          ref={ref}
        >
          {children}
        </h1>
      );

    case HEADING_LEVEL.TWO:
      return (
        <h2
          className={`font-black text-4xl text-grey-dark ${className}`}
          ref={ref}
        >
          {children}
        </h2>
      );

    case HEADING_LEVEL.THREE:
      return (
        <h3
          className={`font-bold text-3xl text-grey-dark ${className}`}
          ref={ref}
        >
          {children}
        </h3>
      );

    case HEADING_LEVEL.FOUR:
      return (
        <h4
          className={`font-bold text-2xl text-grey-dark ${className}`}
          ref={ref}
        >
          {children}
        </h4>
      );
  }
});

export default Heading;
