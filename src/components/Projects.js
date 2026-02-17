// src/components/Projects.js
import React from "react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Eggsplain Ecosystem",
    description:
      "A modular AI infrastructure platform designed to deploy, manage, and interact with AI systems across distributed environments.",
    category: "Infrastructure",
    tags: ["NixOS", "Docker", "AI"],
    image: "/eggsplain_dashboard_1771185031753.png",
    featured: true,
    stats: [
      { label: "Standardization", value: "NixOS-based" },
      { label: "Deployment", value: "Docker-powered" },
    ],
  },
  {
    title: "Funnel2Tunnel",
    description:
      "AI chatbot delivering real-time maritime industry insights. Reduced research time by 80%.",
    category: "Maritime AI",
    tags: ["Fine-tuning", "Full-stack"],
    image: "/funnel2tunnel_maritime_1771185166460.png",
    featured: false,
  },
  {
    title: "CV Analyzer",
    description:
      "High-performance resume parser powered by fine-tuned language models. +70% accuracy, -50% cost.",
    category: "HR Tech",
    tags: ["LLM", "SaaS"],
    image: "/cv_analyzer_ui_1771185054136.png",
    featured: false,
  },
  {
    title: "StuddieMattie.ai",
    description:
      "Intelligent learning companion transforming study materials into structured knowledge.",
    category: "EdTech",
    tags: ["AI Assistant", "Audio"],
    image: "/studdie_mattie_app_1771185069857.png",
    featured: false,
  },
  {
    title: "SmileReveal",
    description:
      "Specialized AI solution for dental marketing and patient visualization. Realistic before/after transformations.",
    category: "HealthTech",
    tags: ["Gemini", "Veo"],
    image: "/smile_reveal_dental_1771185090223.png",
    featured: false,
  },
  {
    title: "TIE Tools",
    description:
      "Enterprise-level management system for GHL agencies with multi-location sales tracking.",
    category: "Agency Tool",
    tags: ["Scalable", "GHL"],
    image: "/tie_tools_dashboard_1771185112726.png",
    featured: false,
  },
  {
    title: "Scene",
    description:
      "Comprehensive event management platform connecting attendees and organizers seamlessly.",
    category: "Social App",
    tags: ["Mobile-first", "Geo-location"],
    image: "/scene_event_platform_1771185132060.png",
    featured: false,
  },
  {
    title: "Rishtaa",
    description:
      "Cross-platform matchmaking application built with Flutter for Android, iOS, and Windows.",
    category: "Matchmaking",
    tags: ["Flutter", "Scalable"],
    image: "/rishtaa_matchmaking_1771185186224.png",
    featured: false,
  },
  {
    title: "WebMAve",
    description:
      "Controlled video communication platform for webinars and events with host-only visibility.",
    category: "Communication",
    tags: ["Webinar", "Video"],
    image: "/webmave_conferencing_1771185207435.png",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="case-studies"
      className="py-24 bg-background-light dark:bg-background-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 mb-4">
            <span className="h-px w-6 bg-primary"></span>
            <span className="text-gray-500 dark:text-gray-400 text-xs font-bold tracking-widest uppercase">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Driving innovation through AI-powered solutions and scalable digital
            ecosystems.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div
                className={`relative rounded-2xl overflow-hidden ${project.featured ? "aspect-[16/10]" : "aspect-[4/3]"} mb-6 shadow-lg`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
                <img
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  src={project.image}
                />
                <div className="absolute bottom-6 left-6 z-20 flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-[10px] font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider">
                    {project.category}
                  </span>
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur text-[10px] font-semibold rounded-full text-gray-900 dark:text-white uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3
                      className={`${project.featured ? "text-2xl" : "text-xl"} font-display font-bold text-gray-900 dark:text-white mb-2`}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm max-w-lg">
                      {project.description}
                    </p>
                  </div>
                  <button
                    className={`${project.featured ? "w-12 h-12" : "w-10 h-10"} rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all flex-shrink-0`}
                  >
                    <span className="material-icons-outlined">
                      arrow_forward
                    </span>
                  </button>
                </div>
                {project.stats && (
                  <div className="flex gap-8 border-t border-gray-100 dark:border-gray-800 pt-4">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                          {stat.label}
                        </div>
                        <div className="font-display font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-hover transition-colors text-lg group"
            to="/case-studies"
          >
            View all projects
            <span className="material-icons-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
