
import Link from "next/link";
import {
  FaDumbbell,
  FaGithub,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0d0f12] border-t border-[#24272d] mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 text-white text-2xl font-black uppercase"
            >
              <FaDumbbell className="text-[#b7ff00]" />
              FITLOG
            </Link>

            <p className="text-gray-500 text-sm leading-6 mt-4 max-w-xs">
              Train with intent. Log every set. Build better habits and
              track your progress with FitLog.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#b7ff00] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/workouts"
                  className="hover:text-[#b7ff00] transition"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  href="/plan"
                  className="hover:text-[#b7ff00] transition"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          {/* Training */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm mb-4">
              Training
            </h3>

            <ul className="space-y-3 text-sm text-gray-500">
              <li>Strength Training</li>
              <li>Full Body Workouts</li>
              <li>Core Training</li>
              <li>Conditioning</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold uppercase text-sm mb-4">
              Follow FitLog
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Stay consistent. Keep moving.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-lg border border-[#24272d] flex items-center justify-center text-gray-400 hover:text-[#b7ff00] hover:border-[#b7ff00] transition"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg border border-[#24272d] flex items-center justify-center text-gray-400 hover:text-[#b7ff00] hover:border-[#b7ff00] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-lg border border-[#24272d] flex items-center justify-center text-gray-400 hover:text-[#b7ff00] hover:border-[#b7ff00] transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[#24272d] mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} FitLog. All rights reserved.
          </p>

          <p className="text-gray-600 text-xs">
            Built for consistency.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

