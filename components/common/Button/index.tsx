"use client";

import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
  isFullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};
const Button = ({
  children,
  isFullWidth = false,
  className = "",
  type = "button",
  onClick = () => {},
  disabled = false,
}: ButtonProps) => {
  return (
    <motion.button
      type={type}
      whileTap={{
        scale: disabled ? 1.0 : 0.9,
      }}
      className={`flex items-center px-5 py-2.5 bg-gradient-to-r from-primary to-primary-light rounded-lg text-sm text-white font-bold gap-2 hover:shadow-lg hover:shadow-primary-light/50 focus:outline-none focus:shadow-lg focus:shadow-primary-light/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:shadow-none ${
        isFullWidth ? "w-full" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};

export default Button;
