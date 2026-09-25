import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar bg-[#0b0c0e] border-b border-[#1b1d21] px-4 lg:px-8">
      
      {/* Logo */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2">
          
<Image
  src="/image/logo.png"
  alt="Logo"
  width={30}
  height={30}
/>
          <span className="text-white font-bold tracking-wide">
            FITLOG
          </span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-2">
          <li>
            <Link
              href="/"
              className="bg-[#17200c] text-[#b7ff00] rounded-full px-5"
            >
              Workouts
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="text-gray-400 hover:text-white"
            >
              My Plan
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        <div className="hidden sm:flex items-center gap-5 text-sm">
          
          <div className="text-gray-400">
  <button className="flex items-center gap-2 cursor-pointer">
    <span>Plan</span>

    <span className="badge bg-[#b7ff00] text-black border-none font-bold">
      0
    </span>
  </button>
</div>
<div className="text-gray-400">
  <button className="flex items-center gap-2 cursor-pointer">
    <span>Saved</span>

    <span className="badge badge-outline border-gray-700 text-gray-400">
      0
    </span>
  </button>
</div>

        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost text-white"
          >
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content bg-[#15171c] rounded-box z-50 mt-3 w-44 p-2 shadow"
          >
            <li>
              <Link href="/">Workouts</Link>
            </li>

            <li>
              <Link href="/my-plan">My Plan</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;