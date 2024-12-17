import Container from "../common/Container";
import SocialLink from "./SocialLink";

import { SOCIAL_LINKS } from "@/data/socialAccounts";

const Footer = () => {
  return (
    <footer className="w-full bg-footer">
      <Container>
        <div className="flex flex-col sm:flex-row max-sm:gap-4 items-center sm:justify-between py-6">
          <p className="flex items-center text-white text-sm gap-1">
            &copy; {new Date().getFullYear()} Maryam Nasir. All rights reserved.
          </p>

          <ul className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <SocialLink key={link.type} link={link} />
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
