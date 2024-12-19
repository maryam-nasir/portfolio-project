import Link from "next/link";

import { SOCIAL_ACCOUNT_TYPE, SocialLinkType } from "@/data/socialAccounts";

const hoverClasses: Record<string, string> = {
  [SOCIAL_ACCOUNT_TYPE.GITHUB]: "hover:from-github hover:to-github/70",
  [SOCIAL_ACCOUNT_TYPE.LINKED_IN]: "hover:from-linked-in hover:to-linked-in/70",
  [SOCIAL_ACCOUNT_TYPE.X]: "hover:from-X hover:to-X/70",
  [SOCIAL_ACCOUNT_TYPE.FE_MENTOR]: "hover:from-FE-Mentor hover:to-FE-Mentor/70",
};

type SocialLinkProps = {
  link: SocialLinkType;
};

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <li>
      <Link
        href={link.link}
        target="_blank"
        className={`w-10 h-10 primary-bg-gradient flex items-center justify-center cursor-pointer rounded-full text-white ${
          hoverClasses[link.type]
        }`}
      >
        {link.icon}
      </Link>
    </li>
  );
};

export default SocialLink;
