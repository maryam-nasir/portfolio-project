import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

import Paragraph from "../Paragraph";

export const TOAST_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type ToastType = (typeof TOAST_TYPES)[keyof typeof TOAST_TYPES];

const TOAST_TYPE_STYLES: Record<ToastType, string> = {
  [TOAST_TYPES.SUCCESS]: "bg-success-light border-success",
  [TOAST_TYPES.ERROR]: "bg-error-light border-error",
};

const TOAST_ICON_STYLES: Record<ToastType, string> = {
  [TOAST_TYPES.SUCCESS]: "bg-success",
  [TOAST_TYPES.ERROR]: "bg-error",
};

const getToastIcon = (type: ToastType): React.JSX.Element => {
  switch (type) {
    case TOAST_TYPES.SUCCESS:
      return <IoCheckmarkDoneOutline size={20} />;
    case TOAST_TYPES.ERROR:
      return <RiErrorWarningLine size={16} />;
  }
};

type ToastProps = {
  message: string;
  type?: ToastType;
};

const Toast = ({ message, type = TOAST_TYPES.SUCCESS }: ToastProps) => {
  return (
    <div
      className={`flex items-center justify-between w-72 p-3 rounded-lg border border-solid ${TOAST_TYPE_STYLES[type]}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex items-center justify-center rounded-full p-2 text-white ${TOAST_ICON_STYLES[type]}`}
        >
          {getToastIcon(type)}
        </span>
        <Paragraph className="!font-bold text-xs font-lato">
          {message}
        </Paragraph>
      </div>
    </div>
  );
};

export default Toast;
