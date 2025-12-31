import React from 'react';

const logos = [
    '/client_logos/eggsplain.png',
    '/client_logos/f2t.png',
    '/client_logos/hural.png',
    '/client_logos/studiemattie.png',
    '/client_logos/theimplantengine.png',
];

const ClientLogos = () => {
    return (
        <div className="w-full py-10 bg-[var(--bg-main)] overflow-hidden relative">
            <style>{`
            @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-33.333333%); }
            }
            .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 30s linear infinite;
            }
            .group:hover .animate-marquee {
                animation-play-state: paused;
            }
        `}</style>

            <div className="max-w-7xl mx-auto px-6 mb-6">
                <p className="text-center text-[var(--text-muted)] text-sm font-semibold uppercase tracking-widest">
                    Trusted By Leading Brands
                </p>
            </div>

            <div className="relative w-full group">
                {/* Gradient Masks for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[var(--bg-main)] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[var(--bg-main)] to-transparent pointer-events-none" />

                <div className="flex animate-marquee hover:cursor-pointer">
                    {/* First set of logos */}
                    {logos.map((logo, index) => (
                        <div key={`logo-1-${index}`} className="flex items-center justify-center mx-8 md:mx-12 min-w-[120px]">
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-12 md:h-16 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {logos.map((logo, index) => (
                        <div key={`logo-2-${index}`} className="flex items-center justify-center mx-8 md:mx-12 min-w-[120px]">
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-12 md:h-16 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}

                    {/* Triplicate set for wider screens just in case */}
                    {logos.map((logo, index) => (
                        <div key={`logo-3-${index}`} className="flex items-center justify-center mx-8 md:mx-12 min-w-[120px]">
                            <img
                                src={logo}
                                alt="Client Logo"
                                className="h-12 md:h-16 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientLogos;
