"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import { HiPaperAirplane } from "react-icons/hi";
import { PiSpinnerGapBold } from "react-icons/pi";

import Button from "../common/Button";
import Container from "../common/Container";
import Heading from "../common/Heading";
import Input from "../common/Input";
import Paragraph from "../common/Paragraph";
import Textarea from "../common/Textarea";
import { useSendEmail } from "./useSendEmail";

import { isValidEmail, isEmpty } from "@/utils/validation";
import { SECTION_IDS } from "@/constants";

const ContactMe = () => {
  const { loading, sendEmail } = useSendEmail();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameError, setNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [messageError, setMessageError] = useState<string>("");

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const validateName = useCallback(
    (value: string, forceCheck: boolean = false) => {
      if (formSubmitted || forceCheck) {
        if (isEmpty(value)) {
          setNameError("Please enter your name.");
          return false;
        } else {
          setNameError("");
          return true;
        }
      }
      return true;
    },
    [formSubmitted]
  );

  const handleNameChange = useCallback(
    (value: string) => {
      setName(value);
      validateName(value);
    },
    [validateName]
  );

  const validateEmail = useCallback(
    (value: string, forceCheck: boolean = false) => {
      if (formSubmitted || forceCheck) {
        if (isEmpty(value)) {
          setEmailError("Please enter you email address.");
          return false;
        } else if (!isValidEmail(value)) {
          setEmailError("Please enter a valid email address.");
          return false;
        } else {
          setEmailError("");
          return true;
        }
      }
      return true;
    },
    [formSubmitted]
  );

  const handleEmailChange = useCallback(
    (value: string) => {
      setEmail(value);
      validateEmail(value);
    },
    [validateEmail]
  );

  const validateMessage = useCallback(
    (value: string, forceCheck: boolean = false) => {
      if (formSubmitted || forceCheck) {
        if (isEmpty(value)) {
          setMessageError("Please enter the message you want to send.");
          return false;
        } else {
          setMessageError("");
          return true;
        }
      }
      return true;
    },
    [formSubmitted]
  );

  const handleMessageChange = useCallback(
    (value: string) => {
      setMessage(value);
      validateMessage(value);
    },
    [validateMessage]
  );

  const resetForm = () => {
    // Clear data
    setName("");
    setEmail("");
    setMessage("");

    // Clear error messages
    setNameError("");
    setEmailError("");
    setMessageError("");

    // Clear form state
    setFormSubmitted(false);
  };

  const handleSubmit = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    setFormSubmitted(true);
    const isNameValid = validateName(name, true);
    const isEmailValid = validateEmail(email, true);
    const isMessageValid = validateMessage(message, true);

    if (isNameValid && isEmailValid && isMessageValid) {
      const isSuccess = await sendEmail({ name, email, message });

      if (isSuccess) {
        resetForm();
      }
    }
  };

  return (
    <section id={SECTION_IDS.CONTACT_ME}>
      <Container>
        <motion.div
          initial={{ x: -280, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { delay: 0.3 },
          }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto px-10 sm:px-20 py-16 flex flex-col items-center"
        >
          <Heading className="text-center">
            <span className="primary-text-gradient">Contact</span> Me
          </Heading>
          <Paragraph className="text-center my-4">
            Let’s build something great together! Reach out to me directly at{" "}
            <a
              href="mailto:maryamnasir555@yahoo.com"
              className="font-bold underline"
            >
              maryamnasir555@yahoo.com
            </a>{" "}
            or fill out the form below.
          </Paragraph>

          <div className="w-full sm:w-[460px] max-w-[460px] my-4">
            <form className="flex flex-col w-full gap-3">
              <Input
                id="name"
                label="Full name *"
                placeholder="Enter your name here..."
                value={name}
                error={nameError}
                onChange={handleNameChange}
              />

              <Input
                id="email"
                type="email"
                placeholder="Enter your email here..."
                label="Email address *"
                value={email}
                error={emailError}
                onChange={handleEmailChange}
              />

              <Textarea
                id="message"
                label="Message *"
                placeholder="Enter your message here..."
                value={message}
                error={messageError}
                onChange={handleMessageChange}
              />

              <Button
                className="self-end"
                type="submit"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <PiSpinnerGapBold size={16} className="animate-spin" />
                ) : (
                  <HiPaperAirplane
                    size={16}
                    className="rotate-45 -mt-1 -mr-1"
                  />
                )}
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactMe;
