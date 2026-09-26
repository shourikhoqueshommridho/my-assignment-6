
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0c0e] px-4 text-white">
      <div className="text-center">

        <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#b7ff00]">
          FITLOG
        </p>

        <h1 className="text-7xl font-black tracking-tight sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-black uppercase sm:text-3xl">
          Page Not Found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
          The workout or page you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="btn mt-7 border-none bg-[#b7ff00] px-6 font-bold text-black hover:bg-[#c7ff33]"
        >
          <FaArrowLeft />
          Back to Workouts
        </Link>

      </div>
    </main>
  );
}
