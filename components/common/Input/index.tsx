"use client";

import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import Paragraph from "../Paragraph";

type InputProps = {
  id: string;
  type?: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

const Input = ({
  id,
  type = "text",
  label,
  placeholder,
  value,
  onChange,
  error = "",
}: InputProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className={`font-normal text-sm cursor-pointer ${
          error ? "text-error" : "text-grey"
        } `}
      >
        {label}
      </label>

      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className={`w-full bg-white px-3 py-2 text-sm border border-solid rounded-lg mt-1.5 mb-1 focus:outline-none ${
          error
            ? "border-error focus:border-error"
            : "border-grey-light focus:border-primary"
        }`}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
      />

      {error && (
        <div className="flex items-center gap-1">
          <HiOutlineExclamationCircle size={16} className="text-error" />
          <Paragraph className="text-xs !text-error">{error}</Paragraph>
        </div>
      )}
    </div>
  );
};

export default Input;
