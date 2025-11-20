import Image from "next/image";

export function Contact() {
  return (
    <section id="contact" className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-1 w-16 bg-[#2EC4A7]"></div>
        <h2 className="mb-4 text-4xl font-semibold text-[#0D2A4D] md:text-5xl">
          Let's Build Together
        </h2>
        <p className="mb-16 text-xl text-gray-600">
          Ready to turn your idea into a shipped product? Get in touch and let's start building.
        </p>

        <div className="grid gap-12 md:grid-cols-2 items-start mb-12">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-[#2EC4A7] uppercase tracking-wide mb-2">Email</p>
              <a
                href="mailto:hello@makeship.dev"
                className="text-lg text-[#0D2A4D] hover:text-[#2EC4A7] transition font-medium"
              >
                hello@makeship.dev
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-[#2EC4A7] uppercase tracking-wide mb-2">Let's Chat</p>
              <p className="text-gray-600">
                Available for consultation calls and project discussions
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-[#2EC4A7] bg-white p-8 shadow-sm">
              <h3 className="mb-4 text-xl font-bold text-[#0D2A4D]">Quick Contact</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-[#2EC4A7] focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-[#2EC4A7] focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details
                  </label>
                  <textarea
                    className="w-full rounded-lg border border-gray-300 px-4 py-2 transition focus:border-[#2EC4A7] focus:outline-none"
                    placeholder="Tell us about your project..."
                    rows={3}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#FF6F3C] px-6 py-3 font-bold text-white transition hover:bg-[#FF6F3C]/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/assets/makeship_contact_us_o.png"
              alt="Contact Us"
              width={350}
              height={350}
              className="h-auto w-full max-w-sm object-contain"
            />
          </div>
        </div>

        <div className="border-t border-[#67D1C4] pt-8 text-center">
          <p className="text-gray-600">
            Or reach out directly to <span className="font-medium text-[#0D2A4D]">hello@makeship.dev</span>
          </p>
        </div>
      </div>
    </section>
  );
}
