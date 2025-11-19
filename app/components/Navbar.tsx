import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/30 backdrop-blur-md border-b border-[#2EC4A7]/20 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/makeship.png"
            alt="Makeship logo"
            width={40}
            height={40}
            priority
            className="h-10 w-10"
          />
          <span className="text-xl font-bold text-[#0D2A4D]">
            MakeShip<span className="text-[#2EC4A7]">.dev</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-[#0D2A4D] transition hover:text-[#2EC4A7] font-medium">
            Services
          </a>
          <a href="#testimonials" className="text-[#0D2A4D] transition hover:text-[#2EC4A7] font-medium">
            Testimonials
          </a>
          <a href="#about" className="text-[#0D2A4D] transition hover:text-[#2EC4A7] font-medium">
            About
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-[#FF6F3C] px-6 py-2 font-medium text-white transition hover:bg-[#FF6F3C]/90"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
