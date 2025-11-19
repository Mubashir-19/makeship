export function Testimonials() {
  const testimonials = [
    {
      quote: "Makeship shipped our MVP in 6 weeks. Their team understood our vision and executed flawlessly.",
      author: "Sarah Chen",
      role: "Founder & CEO",
      company: "TechFlow",
    },
    {
      quote: "The quality of code and speed of delivery was exceptional. They're now our go-to dev partner.",
      author: "Marcus Williams",
      role: "Product Lead",
      company: "DataVault",
    },
    {
      quote: "From idea to production in record time. Makeship turned our startup dreams into reality.",
      author: "Emma Rodriguez",
      role: "Co-founder",
      company: "AutoScale",
    },
  ];

  return (
    <section id="testimonials" className="bg-white px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-4 h-1 w-16 bg-[#2EC4A7]"></div>
        <h2 className="mb-4 text-4xl font-bold text-[#0D2A4D] md:text-5xl">
          What Our Clients Say
        </h2>
        <p className="mb-16 text-xl text-gray-600 max-w-2xl">
          Real feedback from companies we've helped launch and grow
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border-t-4 border-[#2EC4A7] bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#2EC4A7]">
                    ★
                  </span>
                ))}
              </div>
              <p className="mb-6 text-lg italic text-gray-700">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-[#0D2A4D]">{testimonial.author}</p>
                <p className="text-sm text-[#2EC4A7]">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
