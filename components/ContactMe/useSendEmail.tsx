import { useState } from "react";
import { toast } from "react-toastify";

import Toast, { TOAST_TYPES } from "../common/Toast";

type MessageType = { name: string; email: string; message: string };

export const useSendEmail = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = async (data: MessageType) => {
    setLoading(true);
    try {
      const response = await fetch("/api/new-message", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast(
          <Toast
            message="Message sent to Maryam!"
            type={TOAST_TYPES.SUCCESS}
          />,
          {
            closeButton: false,
          }
        );
        return true;
      }
      toast(
        <Toast
          message="Couldn't send your message. Please try again later."
          type={TOAST_TYPES.ERROR}
        />,
        {
          closeButton: false,
        }
      );
      return false;
    } catch (error) {
      console.log(error);
      toast(
        <Toast
          message="Couldn't send your message. Please try again later."
          type={TOAST_TYPES.ERROR}
        />,
        {
          closeButton: false,
        }
      );
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendEmail };
};
