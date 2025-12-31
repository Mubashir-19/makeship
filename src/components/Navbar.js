import React from 'react';

const Navbar = ({ sections, activeSection, scrollToSection }) => {
    const mobileNavRef = React.useRef(null);

    // Auto-center the active section in the mobile navbar
    React.useEffect(() => {
        if (mobileNavRef.current) {
            const activeNode = mobileNavRef.current.children[activeSection];
            if (activeNode) {
                // Use scrollLeft to center manually if scrollIntoView is jittery, but scrollIntoView is usually fine
                activeNode.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            }
        }
    }, [activeSection]);

    return (
        <>
            {/* Desktop Navbar (Sidebar) - Hidden on Mobile */}
            <nav className="hidden md:flex fixed right-0 top-0 bottom-0 w-8 z-50 flex-col items-end justify-center pointer-events-none">
                <div className="flex flex-col h-full w-full pointer-events-auto justify-center">
                    {sections.map((section, index) => (
                        <div
                            key={section.id}
                            onClick={() => scrollToSection(index)}
                            className={`relative flex-1 max-h-32 group cursor-pointer transition-all duration-300 flex items-center justify-end pr-0 hover:pr-1 border-l-0
                  ${activeSection === index ? 'w-3 opacity-100' : 'w-1.5 opacity-20 hover:opacity-50 hover:w-2.5'}
                  ${section.color}
                `}
                        >
                            {/* Tooltip Label */}
                            <div className={`absolute right-4 px-3 py-1 rounded bg-[var(--bg-card-solid)] border border-[var(--border)] text-xs font-bold uppercase tracking-wider whitespace-nowrap transform transition-all duration-300 origin-right shadow-xl
                  ${activeSection === index ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-90 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100'}
                  ${section.text}
                `}>
                                {section.label}
                            </div>
                        </div>
                    ))}
                </div>
            </nav>

            {/* Mobile Navbar (Top "Circular" Scroll) - Hidden on Desktop */}
            <nav className="md:hidden fixed top-0 left-0 right-0 z-50 pointer-events-auto">
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--bg-main)] to-transparent pointer-events-none" />

                <div
                    ref={mobileNavRef}
                    className="relative flex overflow-x-auto snap-x snap-mandatory no-scrollbar py-6 px-[50vw] w-full items-center"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {sections.map((section, index) => {
                        const isActive = activeSection === index;
                        return (
                            <div
                                key={section.id}
                                onClick={() => scrollToSection(index)}
                                className={`
                                    snap-center shrink-0 mx-4 cursor-pointer transition-all duration-300 transform flex flex-col items-center justify-center
                                    ${isActive ? 'scale-110 opacity-100' : 'scale-90 opacity-40'}
                                `}
                            >
                                {/* Indicator Dot */}
                                <div className={`mb-2 w-3 h-3 rounded-full shadow-lg ${section.color} ${isActive ? 'ring-4 ring-opacity-20 ' + section.color.replace('bg-', 'ring-') : ''}`} />

                                {/* Text Label */}
                                <span className={`
                                    text-sm font-bold tracking-widest uppercase whitespace-nowrap px-3 py-1 rounded-full
                                    ${isActive ? 'bg-[var(--bg-card-solid)] border border-[var(--border)] shadow-md text-[var(--text-main)]' : 'text-transparent'}
                                `}>
                                    {section.label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
