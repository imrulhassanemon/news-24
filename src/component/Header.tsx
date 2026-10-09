import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="border-t-2 border-[#2d1b2d] bg-white shadow-sm">
      <nav className=" flex h-16  items-center justify-center px-4">
        
        {/* Center Logo / Brand */}
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#111827]">
            <span className="text-lg font-bold text-red-500">B</span>
          </div>

          <div className="leading-tight">
            <h1 className="font-serif text-lg font-bold text-[#a51d2d]">
              Bangla News 24
            </h1>

            <p className="text-[8px] text-gray-500">
              নির্ভীক, নিরপেক্ষ ও নিরন্তর
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="ml-auto flex items-center gap-3">
          <span className="hidden text-xs text-gray-500 sm:block">
            বাংলা নিউজ
          </span>

          <button
            type="button"
            className="rounded-sm bg-[#a51d2d] px-3 py-1.5 text-[11px] font-medium text-white transition hover:bg-[#8e1826]"
          >
            লগইন করুন
          </button>
        </div>

      </nav>
      <NavLinks/>
    </header>
  );
}