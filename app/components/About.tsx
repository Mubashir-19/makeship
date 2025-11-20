export function About() {
  return (
    <section id="about" className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="mb-4 h-1 w-16 bg-[#2EC4A7]"></div>
        <h2 className="mb-8 text-4xl font-semibold text-[#0D2A4D] md:text-5xl">
          About Makeship
        </h2>
        <div className="space-y-6">
          <p className="text-lg leading-relaxed text-gray-600">
            We're a software development studio built on a simple philosophy: <strong className="text-[#0D2A4D]">Build it and ship it.</strong>
          </p>
          <div className="border-l-4 border-[#2EC4A7] pl-6">
            <p className="text-lg leading-relaxed text-gray-600">
              Makeship specializes in creating and deploying complete digital products for entrepreneurs and businesses who want to turn ideas into real startups. Whether you need a SaaS platform, an MVP, or a full-stack web application, we combine modern engineering practices with rapid delivery to get your product to market fast.
            </p>
          </div>
          <p className="text-lg leading-relaxed text-gray-600">
            Our focus areas include SaaS development, startup product building, full-stack engineering, AI integrations, automation, and deployment. We pride ourselves on clean code, professional execution, and the ability to ship high-quality products without the typical delays.
          </p>
        </div>
      </div>
    </section>
  );
}
