export function CTA() {
  return (
    <section className="bg-white px-6 py-20 text-[#0D2A4D] md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-6 flex justify-center">
          <div className="h-1 w-16 bg-[#2EC4A7]"></div>
        </div>
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Ready to Build Something Great?
        </h2>
        <p className="mb-8 text-xl text-gray-600">
          Let's turn your idea into a shipped product. Get in touch today.
        </p>
        <a
          href="#contact"
          className="inline-block rounded-lg bg-[#FF6F3C] px-8 py-4 font-bold text-white transition hover:bg-[#FF6F3C]/90"
        >
          Start Your Project
        </a>
      </div>
    </section>
  );
}
