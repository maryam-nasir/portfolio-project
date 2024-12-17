import Link from "next/link";

import { SocialLinkType } from "@/data/socialAccounts";

type SocialLinkProps = {
  link: SocialLinkType;
};

const SocialLink = ({ link }: SocialLinkProps) => {
  return (
    <Link href={link.link} target="_blank">
      <div className="flex items-center justify-center bg-transparent text-white rounded-full hover:opacity-80">
        {link.footerIcon}
      </div>
    </Link>
  );
};

export default SocialLink;
