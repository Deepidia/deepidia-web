"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {["About", "Blog", "Team", "Pricing", "Contact", "Terms"].map(
            (item) => (
              <div key={item} className="px-5 py-2">
                <a
                  href="#"
                  className="text-base leading-6 text-gray-500 hover:text-gray-900"
                >
                  {item}
                </a>
              </div>
            )
          )}
        </nav>

        <div className="flex justify-center mt-8 space-x-6">
          {[
            { label: "Facebook", icon: faFacebook },
            { label: "Instagram", icon: faInstagram },
            { label: "Twitter", icon: faTwitter },
            { label: "GitHub", icon: faGithub },
          ].map(({ label, icon }) => (
            <a
              key={label}
              href="#"
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
