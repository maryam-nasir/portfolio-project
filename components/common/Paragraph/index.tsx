"use client";

import { forwardRef } from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
  animationProps?: HTMLMotionProps<"p">;
};

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  function Paragraph(
    { children, className, isAnimated = false, animationProps = {} },
    ref
  ) {
    if (isAnimated) {
      return (
        <motion.p
          className={`font-normal text-sm text-grey ${className}`}
          {...animationProps}
          ref={ref}
        >
          {children}
        </motion.p>
      );
    }

    return (
      <p className={`font-normal text-sm text-grey ${className}`} ref={ref}>
        {children}
      </p>
    );
  }
);

export default Paragraph;
