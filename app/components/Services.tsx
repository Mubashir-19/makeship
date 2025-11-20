import Image from "next/image";

export function Services() {
  const services = [
    {
      image: "/assets/makeship_saas_o.png",
      title: "SaaS Development",
      description: "Build scalable, multi-tenant SaaS platforms with modern tech stacks",
    },
    {
      image: "/assets/makeship_mvp_o.png",
      title: "Startup MVPs",
      description: "Launch your startup with a polished MVP that impresses investors",
    },
    {
      image: "/assets/makeship_fullstack_o.png",
      title: "Full-Stack Solutions",
      description: "Web, mobile, APIs, databases, and deployment—we handle it all",
    },
    {
      image: "/assets/makeship_rapid_o.png",
      title: "Rapid Delivery",
      description: "Ship faster without compromising on code quality",
    },
    {
      image: "/assets/makeship_automations_o.png",
      title: "AI & Automation",
      description: "Integrate AI and automate workflows to scale your business",
    },
    {
      image: "/assets/makeship_integrations_o.png",
      title: "Integrations",
      description: "Connect your tools and systems with custom integrations",
    },
  ];

  return (
    <section id="services" className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-1 w-16 bg-[#2EC4A7]"></div>
        <h2 className="mb-6 text-4xl font-semibold text-[#0D2A4D] md:text-5xl">
          What We Do
        </h2>
        <p className="mb-16 text-xl text-gray-600 max-w-2xl">
          We specialize in turning concepts into complete, deployed solutions
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-xl border-l-4 border-[#2EC4A7] bg-white p-8 shadow-sm transition hover:shadow-md hover:border-[#FF6F3C]"
            >
              <div className="mb-4 relative h-12 w-12">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0D2A4D]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
