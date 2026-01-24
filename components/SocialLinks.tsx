import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialData = [
  {
    title: "YouTube",
    icon: <Youtube width={20} height={20} />,
    link: "https://www.youtube.com/@artcrft1160",
  },
  {
    title: "GitHub",
    icon: <Github width={20} height={20} />,
    link: "https://github.com/farida-bano?tab=repositories",
  },
  {
    title: "LinkedIn", // Fixed capitalization
    icon: <Linkedin width={20} height={20} />,
    link: "https://www.linkedin.com/in/farida-bano-1b3b282b6/", // Corrected URL
  },
  {
    title: "Facebook",
    icon: <Facebook width={20} height={20} />,
    link: "https://www.facebook.com/profile.php?id=100010806577148&sk=about", // Corrected URL
  },
  {
    title: "Instagram", // Capitalized
    icon: <Instagram width={20} height={20} />,
    link: " https://www.instagram.com/invites/contact/?igsh=1tcgweicncc85&utm_content=2hlixo1", // Corrected URL
  },
  {
    title: "Twitter",
    icon: <Twitter width={20} height={20} />, // Fixed property name and closing tag
    link: "https://x.com/FaridaBano12?s=08", // Corrected URL
  },
]; // Removed extra closing brace

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-3" role="navigation" aria-label="Social media links">
      {socialData?.map((item) => (
        <div
          key={item?.title}
          className="text-lightSky/80 border border-lightSky/30 p-2.5 rounded-full hover:bg-lightSky/10 hover:border-lightSky hover:text-lightSky transition-all duration-300"
        >
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Follow me on ${item.title}`}
          >
            <span aria-hidden="true">{item?.icon}</span>
            <span className="sr-only">{item.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;