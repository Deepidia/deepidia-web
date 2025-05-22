"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const menuItems = [
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Team", href: "#team" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
  { label: "Terms", href: "#terms" },
];

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {menuItems.map((item) => (
            <div key={item.label} className="px-5 py-2">
              <a
                href={item.href}
                className="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                {item.label}
              </a>
            </div>
          ))}
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          {[
            { label: "Instagram", icon: faInstagram },
            { label: "X-Twitter", icon: faXTwitter, href: "https://x.com/DeepidiaAi" },
            { label: "GitHub", icon: faGithub, href:"https://github.com/Deepidia" },
          ].map(({ label, icon, href }) => (
            <a
              key={label}
              href={href}
               target="_blank"
              className="text-gray-400 hover:text-gray-500"
              aria-label={label}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2025 DeepIdia - All rights reserved.
        </p>
      </div>
    </section>
  );
}
