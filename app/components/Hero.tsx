import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white px-6 pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <div className="mb-6 h-1 w-16 bg-[#2EC4A7]"></div>
            <h1 className="mb-6 text-5xl font-bold leading-tight text-[#0D2A4D] md:text-6xl">
              Build it. <span className="text-[#2EC4A7]">Ship it.</span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              We transform your ideas into real, production-ready digital products. From SaaS platforms to startup MVPs, we handle full-stack development with speed and precision.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-lg bg-[#FF6F3C] px-8 py-3 text-center font-medium text-white transition hover:bg-[#FF6F3C]/90"
              >
                Start Your Project
              </a>
              <a
                href="#services"
                className="rounded-lg border-2 border-[#2EC4A7] px-8 py-3 text-center font-medium text-[#0D2A4D] transition hover:bg-[#2EC4A7]/10"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <Image
              src="/assets/makeship_shipping_o.png"
              alt="Makeship - Build and Ship"
              width={450}
              height={450}
              priority
              className="relative z-10 h-80 w-80 object-contain md:h-96 md:w-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
