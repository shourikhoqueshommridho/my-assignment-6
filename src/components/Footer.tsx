
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0b]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-7 sm:flex-row">
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
        <p className="text-center text-xs text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
