import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 pt-8">

      <div className="bg-[#15171c] border border-[#24272d] rounded-xl overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Content */}
          <div className="p-8 md:p-12">

            <p className="text-[#b7ff00] font-bold text-sm tracking-wide mb-5">
              WORKOUT LIBRARY
            </p>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[0.95] uppercase">
              Train with intent.
              <br />
              Log every set.
            </h1>

            <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
              FitLog is a dark, no-nonsense gym companion:
              pick a lift, lock it into today's plan, and watch
              the week's work add up.
            </p>

            <Link
              href="#library"
              className="btn bg-[#b7ff00] hover:bg-[#c7ff33] text-black border-none mt-7 font-bold"
            >
              BROWSE WORKOUTS
            </Link>

          </div>

          {/* Image */}
          <div className="flex justify-center items-center p-8">

            <Image
              src="/image/banner.png"
              alt="Workout"
              width={450}
              height={450}
              className="object-contain"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;