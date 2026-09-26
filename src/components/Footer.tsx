import Image from "next/image";
import Link from "next/link";
import { FaArrowUp, FaDumbbell } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-wide text-white"
        >
           
          <Image
            src="/image/logo.png"
            alt="FitLog Logo"
            width={30}
            height={30}
          />
          FIT<span className="text-lime-400">LOG</span>
        </Link>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog. Train with intent.
        </p>

       
      </div>
    </footer>
  );
};

export default Footer;
