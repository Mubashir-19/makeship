// src/components/ClientLogos.js
import React from 'react';

const ClientLogos = () => {
  const clients = [
    { name: 'Eggsplain', logo: '/client_logos/eggsplain.png' },
    { name: 'F2T', logo: '/client_logos/f2t.png' },
    { name: 'Hural', logo: '/client_logos/hural.png' },
    { name: 'Studie Mattie', logo: '/client_logos/studiemattie.png' },
    { name: 'The Implant Engine', logo: '/client_logos/theimplantengine.png' },
  ];

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-white">
            Companies we have worked with
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
          {clients.map((client, i) => (
            <div key={i} className="flex items-center justify-center rounded-xl bg-background-dark dark:bg-surface-dark border border-gray-200/20 p-6 grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 md:h-14 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
