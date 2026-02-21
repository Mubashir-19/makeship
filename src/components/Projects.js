// src/components/Projects.js
import React, { useState, useEffect } from "react";
import "./Projects.css";

// Eggsplain Images
import egg1 from "../assets/portfolio/eggsplain cloud/eggsplain eggstore.png";
import egg2 from "../assets/portfolio/eggsplain cloud/eggsplain manage projects.png";
import egg3 from "../assets/portfolio/eggsplain cloud/eggsplain project settings.png";
import egg4 from "../assets/portfolio/eggsplain cloud/eggsplain run services.png";
import egg5 from "../assets/portfolio/eggsplain cloud/eggsplain select server.png";

// Fluuz Images
import fluuz1 from "../assets/portfolio/fluuz/fluuz dashboard.png";
import fluuz2 from "../assets/portfolio/fluuz/fluuz get paid.png";
import fluuz3 from "../assets/portfolio/fluuz/fluuz send crypto.png";
import fluuz4 from "../assets/portfolio/fluuz/fluuz send payment.png";

// SmileReveal Images
import smile1 from "../assets/portfolio/smilereveal/smilereveal before and after.png";
import smile2 from "../assets/portfolio/smilereveal/smilereveal gallery.png";
import smile3 from "../assets/portfolio/smilereveal/smilereveal admin portal.png";
import smile4 from "../assets/portfolio/smilereveal/smilereveal all shades.png";
import smile5 from "../assets/portfolio/smilereveal/smilereveal app install on mobile.png";
import smile6 from "../assets/portfolio/smilereveal/smilereveal expanded shades.png";
import smile7 from "../assets/portfolio/smilereveal/smilereveal generating.png";
import smile8 from "../assets/portfolio/smilereveal/smilereveal user dashboard.png";

// TieTools Images
import tie1 from "../assets/portfolio/tietools/tools1.png";
import tie2 from "../assets/portfolio/tietools/tools2.png";
import tie3 from "../assets/portfolio/tietools/tools3.png";

const projectData = [
  {
    id: 1,
    title: "Eggsplain Cloud",
    category: "Infrastructure",
    description: "High-performance cloud orchestration and server management platform designed for scaling distributed AI workloads with ease.",
    thumbnail: egg1,
    images: [egg1, egg2, egg3, egg4, egg5],
    tags: ["Infrastructure", "Cloud", "SaaS"],
  },
  {
    id: 2,
    title: "Fluuz",
    category: "Fintech",
    description: "A comprehensive Web3 payment ecosystem enabling businesses to accept, manage, and settle crypto transactions globally.",
    thumbnail: fluuz1,
    images: [fluuz1, fluuz2, fluuz3, fluuz4],
    tags: ["Blockchain", "Web3", "Finance"],
  },
  {
    id: 3,
    title: "SmileReveal",
    category: "Generative AI",
    description: "Cutting-edge diagnostic and visualization tool for dentistry, using generative AI to show patients their future smiles instantly.",
    thumbnail: smile1,
    images: [smile1, smile2, smile3, smile4, smile5, smile6, smile7, smile8],
    tags: ["Healthcare", "AI", "Mobile"],
  },
  {
    id: 4,
    title: "TieTools",
    category: "SaaS",
    description: "Integrated professional utility suite providing essential tools for developers and asset managers in a unified dashboard.",
    thumbnail: tie2,
    images: [tie2, tie1, tie3],
    tags: ["Productivity", "Utility", "DevTools"],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const openGallery = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  return (
    <section id="projects" className="py-24 projects-container bg-white dark:bg-[#0a0b0d] overflow-hidden relative">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 mb-4">
              <span className="h-[2px] w-12 bg-primary"></span>
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-light dark:text-text-dark leading-tight">
              We build products that <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">shape the future</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6 font-medium">
              Explore our journey of transforming complex ideas into elegant, high-impact digital solutions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projectData.map((project, idx) => (
            <div
              key={project.id}
              className={`project-card group rounded-[2rem] p-4 flex flex-col ${idx % 2 !== 0 ? 'md:translate-y-12' : ''}`}
              onClick={() => openGallery(project)}
            >
              <div className="project-image-container aspect-[16/10] rounded-[1.5rem] mb-8 shadow-2xl overflow-hidden cursor-zoom-in">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="project-image w-full h-full object-cover"
                />
                <div className="image-glow" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 transform scale-50 group-hover:scale-100 transition-transform duration-500">
                    <span className="material-icons-outlined text-white text-3xl">collections</span>
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-3xl font-display font-bold text-text-light dark:text-text-dark group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="pt-2">
                    <span className="material-icons-outlined text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      north_east
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-tag px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Gallery Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] modal-overlay flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-xl">
          <button
            className="absolute top-6 right-6 z-[110] text-white/50 hover:text-white transition-colors"
            onClick={() => setSelectedProject(null)}
          >
            <span className="material-icons-outlined text-4xl">close</span>
          </button>

          <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 modal-content">
            {/* Main Image View */}
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[50vh] md:min-h-[70vh]">
              <div className="relative w-full h-full flex items-center justify-center group/main">
                <img
                  src={selectedProject.images[activeImageIndex]}
                  alt={`${selectedProject.title} screenshot ${activeImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain rounded-2xl shadow-3xl"
                />

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white opacity-0 group-hover/main:opacity-100 transition-all border border-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
                      }}
                    >
                      <span className="material-icons-outlined text-3xl">chevron_left</span>
                    </button>
                    <button
                      className="absolute right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white opacity-0 group-hover/main:opacity-100 transition-all border border-white/10"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
                      }}
                    >
                      <span className="material-icons-outlined text-3xl">chevron_right</span>
                    </button>
                  </>
                )}
              </div>

              <div className="mt-6 text-center">
                <h4 className="text-2xl font-display font-bold text-white mb-2">{selectedProject.title}</h4>
                <p className="text-gray-400 text-sm max-w-xl mx-auto">{selectedProject.description}</p>
              </div>
            </div>

            {/* Thumbnail Sidebar */}
            <div className="w-full md:w-48 flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto hide-scrollbar pb-4 md:pb-0">
              {selectedProject.images.map((img, index) => (
                <button
                  key={index}
                  className={`flex-shrink-0 w-24 md:w-full aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${activeImageIndex === index ? 'border-primary scale-95 shadow-lg shadow-primary/20' : 'border-white/5 opacity-40 hover:opacity-100'
                    }`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
