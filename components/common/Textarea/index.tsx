"use client";

import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import Paragraph from "../Paragraph";

type TextareaProps = {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

const Textarea = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  error = "",
}: TextareaProps) => {
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

      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className={`w-full h-40 px-3 py-2 text-sm border border-solid rounded-lg mt-1.5 mb-1 resize-none focus:outline-none ${
          error
            ? "border-error focus:border-error"
            : "border-grey-light focus:border-primary"
        }`}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
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

export default Textarea;
