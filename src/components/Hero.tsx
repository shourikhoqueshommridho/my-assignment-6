import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <div className="overflow-hidden rounded-xl border border-[#24272d] bg-[#15171c]">
        <div className="grid grid-cols-1 items-center md:grid-cols-2">
          {/* Content */}
          <div className="p-7 sm:p-10 md:p-12 lg:p-14">
            <p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#b7ff00]">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl">
              Train with intent.
              <br />
              Log every set.
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-gray-400 sm:text-base">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* CTA */}
            <Link
              href="#library"
              className="btn mt-7 border-none bg-[#b7ff00] font-bold text-black transition hover:bg-[#c7ff33]"
            >
              BROWSE WORKOUTS
              <FaArrowDown className="text-sm" />
            </Link>
          </div>

          {/* Image */}
          <div className="flex items-center justify-center p-6 sm:p-8 md:p-10">
            <Image
              src="/image/banner.png"
              alt="FitLog workout illustration"
              width={500}
              height={500}
              priority
              className="h-auto w-full max-w-[450px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

